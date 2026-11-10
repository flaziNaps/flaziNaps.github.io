import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
import {chromium} from '/tmp/codex-blog-check/node_modules/playwright/index.mjs';
const out=new URL('../evidence/',import.meta.url).pathname;
const browser=await chromium.launch({executablePath:'/home/flazi/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome',args:['--no-sandbox']});
const page=await browser.newPage();const errors=[];const checks=[];
page.on('pageerror',e=>errors.push(String(e)));
for(const width of [1024,1440,1920]) {
 await page.setViewportSize({width,height:900});
 for(const [name,route] of [['home','/'],['posts','/posts/'],['article','/posts/first-writing/'],['about','/about/'],['404','/404.html']]) {
  await page.goto('http://127.0.0.1:4323'+route);await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(450);
  assert.equal(await page.locator('h1').count(),1);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  if(width===1440){await page.screenshot({path:`${out}/${name}-1440.png`});await page.screenshot({path:`${out}/${name}-full-1440.png`,fullPage:true});}
  checks.push(`${width}px ${name}: single H1, no page overflow`);
 }
}
await page.setViewportSize({width:1440,height:900});await page.goto('http://127.0.0.1:4323/');
assert.ok(await page.locator('.project-links a').first().evaluate(el=>el.getBoundingClientRect().bottom<innerHeight));
assert.equal(await page.locator('.single-project').evaluate(el=>el.getBoundingClientRect().left),await page.locator('.recent-posts').evaluate(el=>el.getBoundingClientRect().left));
await page.keyboard.press('Tab');assert.ok(await page.locator('.skip-link').evaluate(el=>el===document.activeElement));await page.keyboard.press('Enter');assert.ok(await page.locator('main').evaluate(el=>el===document.activeElement));
await page.locator('.project-links a').first().focus();await page.waitForTimeout(500);await page.screenshot({path:`${out}/project-focus.png`});
await page.locator('.project-card').hover();await page.waitForTimeout(300);assert.equal(await page.locator('.project-card').evaluate(el=>getComputedStyle(el).transform),'matrix(1, 0, 0, 1, 0, -3)');
checks.push('First-viewport project entrance, aligned sections, keyboard skip/focus, card hover');
await page.goto('http://127.0.0.1:4323/posts/first-writing/');
const link=page.locator('.toc-desktop a').last();await link.click();await page.waitForTimeout(700);assert.equal(await link.getAttribute('aria-current'),'location');await page.screenshot({path:`${out}/toc-active.png`});
checks.push('Native section links and active table of contents');
await page.goto('http://127.0.0.1:4322/posts/reading-fixture/');
await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text=>window.copied=text}}));
const button=page.locator('.copy-button').first();await button.click();assert.equal(await button.textContent(),'已复制');assert.equal(await page.evaluate(()=>window.copied),await page.locator('.code-block code').first().textContent());await page.screenshot({path:`${out}/fixture-copy-success.png`});await page.waitForTimeout(2100);
await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('Denied')}}}));await button.click();assert.equal(await page.locator('.copy-status').first().textContent(),'复制失败，请手动复制');await page.screenshot({path:`${out}/fixture-copy-failure.png`});
await page.locator('.markdown-alert').first().scrollIntoViewIfNeeded();await page.screenshot({path:`${out}/fixture-callouts.png`});
checks.push('Separate fixture: copy original text, success, denied permission, callout rendering');
await page.goto('http://127.0.0.1:4323/posts/first-writing/');await page.evaluate(()=>document.documentElement.style.zoom='2');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:`${out}/zoom-200.png`});
const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:1440,height:900}});const staticPage=await nojs.newPage();await staticPage.goto('http://127.0.0.1:4322/posts/reading-fixture/');assert.equal(await staticPage.locator('.copy-button:visible').count(),0);assert.ok(await staticPage.locator('.toc-desktop a').count()>1);
const reduced=await browser.newContext({reducedMotion:'reduce',viewport:{width:1440,height:900}});const rp=await reduced.newPage();await rp.goto('http://127.0.0.1:4323');assert.equal(await rp.locator('.entrance').first().evaluate(el=>getComputedStyle(el).animationName),'none');
checks.push('200% zoom, no-JS content and TOC, reduced-motion');

assert.deepEqual(errors,[]);await writeFile(`${out}/checks.json`,JSON.stringify({browser:browser.version(),checks,errors},null,2));await browser.close();console.log(checks.join('\n'));

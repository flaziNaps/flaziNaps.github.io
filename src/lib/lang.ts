// 标题含 CJK 时中文不做负字距（0），否则按拉丁文收紧字距。
export function langOf(text: string): 'en' | 'zh' {
  return /[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/.test(text) ? 'zh' : 'en';
}

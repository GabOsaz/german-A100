/**
 * Speaks the primary German form (before any "/") using the browser's
 * built-in speech synthesis with a German voice, if one is available.
 * This is free and works offline, but voice quality/availability
 * depends on the user's device and browser.
 */
export function speakGerman(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

  const primary = text.split('/')[0].trim()
  const utterance = new SpeechSynthesisUtterance(primary)
  utterance.lang = 'de-DE'
  utterance.rate = 0.9

  const voices = window.speechSynthesis.getVoices()
  const deVoice = voices.find((v) => v.lang.startsWith('de'))
  if (deVoice) utterance.voice = deVoice

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

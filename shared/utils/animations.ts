import type { Ref } from "vue"

export async function typewriter(targetString: string, displayRef: Ref<string>, speed: number): Promise<void> {
  return new Promise((resolve) => {
    let i = 0
    function type() {
      if (i < targetString.length) {
        // Check if the current character is the start of an HTML tag
        if (targetString[i] === "<") {
          const closingTagIndex = targetString.indexOf(">", i)
          if (closingTagIndex !== -1) {
            // Append the entire tag
            displayRef.value += targetString.substring(i, closingTagIndex + 1)
            i = closingTagIndex + 1
          } else {
            // Malformed HTML or no closing tag found, just append the char
            displayRef.value += targetString[i]
            i++
          }
        } else {
          // Append a single character
          displayRef.value += targetString[i]
          i++
        }
        setTimeout(type, speed)
      } else {
        resolve()
      }
    }
    type()
  })
}

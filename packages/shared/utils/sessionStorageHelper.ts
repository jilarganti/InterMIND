/**
 * Manages a flag in session storage.
 * On the first call for a given key in a session, it stores the value and returns undefined.
 * On subsequent calls, it returns the previously stored value.
 * @param key The key to use in session storage.
 * @param valueToStore The value to store if the key is not already present.
 * @returns The stored value if the key was already present, otherwise undefined.
 */
export function manageSessionFlag(key: string, valueToStore: string): string | undefined {
  if (typeof window !== "undefined" && window.sessionStorage) {
    const existingValue = sessionStorage.getItem(key)
    if (existingValue !== null) {
      return existingValue // Key exists, return its value
    } else {
      sessionStorage.setItem(key, valueToStore)
      return undefined // Key did not exist, stored it, return undefined for first call
    }
  }
  // Fallback for environments without sessionStorage (e.g., SSR initial pass)
  // or if sessionStorage is disabled. In this case, act as if it's always the first call.
  return undefined
}

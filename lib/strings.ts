export function toCapitalize(word?: string | null): string {
    if (!word) return ""
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export function getSeparator(index: number, length: number): string {
    if (index === 0) return "";
    if (length === 2) return " and ";
    if (index === length - 1) return ", and ";
    return ", ";
}
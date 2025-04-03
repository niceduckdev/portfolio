export function getTime(text: string) {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 50);
}

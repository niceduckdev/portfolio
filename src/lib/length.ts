export function formatMaxLength(input: string, maxLength: number = 50) {
    return input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;
}
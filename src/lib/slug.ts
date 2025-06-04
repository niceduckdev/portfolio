export function convertSlug(input: string): string {
    return input.toLowerCase().replaceAll(" ", "-").replaceAll('"', "").replaceAll("'", "");
}

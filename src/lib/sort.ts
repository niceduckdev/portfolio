export function sortOnDate<T extends { date: Date }>(collection: T[]): T[] {
    return [...collection].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function sortOnDate<T extends { data: { date: Date } }>(collection: T[]): T[] {
    return [...collection].sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
    );
}
import type { Article } from "@models/article";

export function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear().toString().substring(2);
    return `${day}/${month}/${year}`;
}

export function sortOnDate(collection: Article[]) {
    return collection.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear().toString().substring(2);
    return `${day}/${month}/${year}`;
}

export type CollectionEntryLike = {
    data: {
        date: string | Date;
        [key: string]: any;
    };
    [key: string]: any;
};

export function sortOnDate(collection: CollectionEntryLike[]) {
    return collection.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });
}
export enum Align {
    CENTER,
    START,
    END,
}

export function getAlign(align: Align) {
    switch (align) {
        case Align.CENTER:
            return "items-center";
        case Align.START:
            return "items-start";
        case Align.END:
            return "items-end";
        default:
            return "";
    }
}

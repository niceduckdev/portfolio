export enum Align {
    CENTER,
    START
}

export function getAlign(align: Align) {
    switch (align) {
        case Align.CENTER:
            return "items-center";
        case Align.START:
            return "items-start";
        default:
            return "";
    }
}

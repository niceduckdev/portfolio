export enum Justify {
    BETWEEN,
}

export function getJustify(justify: Justify) {
    switch (justify) {
        case Justify.BETWEEN:
            return "justify-between";
        default:
            return "";
    }
}

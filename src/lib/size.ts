export enum Size {
    SMALL,
    MEDIUM,
    LARGE,
    MAX,
}

export function getSize(size: Size) {
    switch (size) {
        case Size.SMALL:
            return "w-32";
        case Size.MEDIUM:
            return "w-64";
        case Size.LARGE:
            return "w-92";
        case Size.MAX:
            return "w-max";
        default:
            return "";
    }
}

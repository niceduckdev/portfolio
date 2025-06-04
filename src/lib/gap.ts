export function getGap(gap: number) {
    switch (gap) {
        case 1:
            return "gap-1";
        case 2:
            return "gap-2";
        case 4:
            return "gap-4";
        default:
            return "gap-1";
    }
}

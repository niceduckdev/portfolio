export function getGap(gap: number) {
    switch (gap) {
        case 1: return "gap-1";
        case 2: return "gap-2";
        case 4: return "gap-4";
        case 6: return "gap-6";
        case 8: return "gap-8";
        default: return "gap-2";
    }
}

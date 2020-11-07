export function zeroPadded(d) {
    if (typeof d !== 'number' || isNaN(d)) {
        return d;
    }

    if (d >= 0 && d < 10) {
        return "0" + d;
    }

    return "" + d;
}

export function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

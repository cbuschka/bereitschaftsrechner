import {zeroPadded} from "./util";

export function millisToHhDotMm(dauerInMillis) {
    if (dauerInMillis === undefined) {
        return undefined;
    }

    const minutes = zeroPadded(Math.floor((dauerInMillis / (1000 * 60)) % 60));
    const hours = zeroPadded(Math.floor((dauerInMillis / (1000 * 60 * 60)) % 24));

    return `${hours}:${minutes}`
}

export function hhDotMmtoMillis(hhDotMm) {
    if (hhDotMm === undefined) {
        return undefined;
    }

    const result = /(\d+):(\d+)/.exec(hhDotMm);
    return parseInt(result[1]) * 1000 * 60 * 60 + parseInt(result[2]) * 1000 * 60;
}


import {zeroPadded} from "./util";
import {isValidDate} from "./dateconv";

export function isValidHhDotMm(v) {
    return /(\d+):(\d+)/.test(v);
}

export function millisToHhDotMm(dauerInMillis) {
    if (typeof dauerInMillis !== 'number' || isNaN(dauerInMillis)) {
        return undefined;
    }

    const minutes = zeroPadded(Math.floor((dauerInMillis / (1000 * 60)) % 60));
    const hours = zeroPadded(Math.floor((dauerInMillis / (1000 * 60 * 60)) % 24));

    return `${hours}:${minutes}`
}

export function hhDotMmtoMillis(hhDotMm) {
    if (typeof hhDotMm !== 'string') {
        return undefined;
    }

    const result = /(\d+):(\d+)/.exec(hhDotMm);
    if (!result || result.length !== 3) {
        return undefined;
    }
    return parseInt(result[1]) * 1000 * 60 * 60 + parseInt(result[2]) * 1000 * 60;
}

export function dateToTimeInputValue(d) {
    if (!isValidDate(d)) {
        return undefined;
    }

    var local = new Date(d);
    local.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return local.toJSON().slice(11, 16);
}

export function dateToHhMm(d) {
    if (!isValidDate(d)) {
        return undefined;
    }

    var local = new Date(d);
    local.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return local.toJSON().slice(11, 16);
}

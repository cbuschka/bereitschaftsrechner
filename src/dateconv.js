import {zeroPadded} from "./util";

export function isValidDate(d) {
    return typeof d === 'object'
        && d.toISOString
        && typeof d.getTime() === 'number'
        && !isNaN(d.getTime());
}

export function dateToDateInputValue(d) {
    if (!isValidDate(d)) {
        return undefined;
    }

    var local = new Date(d);
    local.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
}

export function dateToYyyyMmDd(d) {
    return zeroPadded(d.getFullYear()) + "-" + zeroPadded(d.getMonth()) + "-" + zeroPadded(d.getDate());
}

export function isValidYyyyMmDd(v) {
    if (typeof v !== 'string') {
        return false;
    }

    return v.match(/\d+-\d+-\d+/);
}

export function yyyyMmDdToDate(v) {
    if (typeof v !== 'string') {
        return undefined;
    }

    const parts = v.match(/(\d+)-(\d+)-(\d+)/)
    if (!parts || parts.length !== 4) {
        return undefined;
    }
    return new Date(parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3]));
}

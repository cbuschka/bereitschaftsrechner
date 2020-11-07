import {isValidDate} from "./dateconv";

export function dateWithTimeToDate(d, time) {
    if (!isValidDate(d) || !time) {
        return undefined;
    }

    if (typeof time !== 'string') {
        return undefined;
    }

    const parts = time.match(/(\d+):(\d+)/);
    if (!parts || parts.length !== 3) {
        return undefined;
    }

    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), parseInt(parts[1]), parseInt(parts[2]));
}

export function isDate(d) {
    return isValidDate(d);
}

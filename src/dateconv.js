export function dateToDateInputValue(d) {
    var local = new Date(d);
    local.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
}


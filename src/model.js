import {dateToDateInputValue} from "./dateconv";
import {max} from "./util";
import {dateToTimeInputValue, hhDotMmtoMillis, millisToHhDotMm} from "./timeconv";

function berechneSperrzeitEndeDatum(einsatzEndeDatum) {
    return new Date(einsatzEndeDatum.getTime() + hhDotMmtoMillis("11:00"));
}


class Model {
    constructor() {
        this.einsatzStartDatum = undefined;
        this.einsatzEndeDatum = undefined;
        this.ueblicherArbeitsbeginn = undefined;
        this.arbeitDauerInMillis = undefined;
    }

    berechneBuchung() {
        const einsatzDauerInMillis = this.einsatzEndeDatum - this.einsatzStartDatum;
        const einsatzTag = dateToDateInputValue(this.einsatzStartDatum);
        const ueblicherArbeitsbeginnDatum = new Date(`${einsatzTag} ${this.ueblicherArbeitsbeginn}`);
        const sperrzeitEndeDatum = berechneSperrzeitEndeDatum(this.einsatzEndeDatum);
        const aufschubstartDatum = max(ueblicherArbeitsbeginnDatum, this.einsatzEndeDatum);
        const buchungBeginnDatum = new Date(aufschubstartDatum.getTime() + einsatzDauerInMillis);
        let pauseDauerInMillis = 0;
        if (this.arbeitDauerInMillis > 0) {
            pauseDauerInMillis = 1000 * 60 * 50;
        }
        const buchungEndeDatum = new Date(sperrzeitEndeDatum.getTime() + this.arbeitDauerInMillis + pauseDauerInMillis);
        const gesamtDauerNetto = einsatzDauerInMillis + this.arbeitDauerInMillis;
        const gesamtDauerBrutto = gesamtDauerNetto + pauseDauerInMillis;
        let buchungDauer = buchungEndeDatum - buchungBeginnDatum;

        return {
            sperrzeitEnde: dateToTimeInputValue(sperrzeitEndeDatum),
            beginn: dateToTimeInputValue(buchungBeginnDatum),
            ende: dateToTimeInputValue(buchungEndeDatum),
            dauer: millisToHhDotMm(buchungDauer),
            gesamtDauerNetto: millisToHhDotMm(gesamtDauerNetto),
            gesamtDauerBrutto: millisToHhDotMm(gesamtDauerBrutto)
        };
    }
}

export const model = new Model();

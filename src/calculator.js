import {max} from "./util";
import {dateToTimeInputValue, hhDotMmtoMillis, millisToHhDotMm} from "./timeconv";
import {dateWithTimeToDate} from "./datetimeconv";

function berechneSperrzeitEndeDatum(einsatzEndeDatum) {
    return new Date(einsatzEndeDatum.getTime() + hhDotMmtoMillis("11:00"));
}


class Calculator {
    berechneBuchung(einsatzStartDatum, einsatzEndeDatum, ueblicherArbeitsbeginn, arbeitDauerInMillis) {
        if (arbeitDauerInMillis === undefined) {
            arbeitDauerInMillis = 0;
        }

        const einsatzDauerInMillis = einsatzEndeDatum - einsatzStartDatum;
        const ueblicherArbeitsbeginnDatum = dateWithTimeToDate(einsatzStartDatum, ueblicherArbeitsbeginn);
        const sperrzeitEndeDatum = berechneSperrzeitEndeDatum(einsatzEndeDatum);
        const aufschubstartDatum = max(ueblicherArbeitsbeginnDatum, einsatzEndeDatum);
        const buchungBeginnDatum = new Date(aufschubstartDatum.getTime() + einsatzDauerInMillis);
        let pauseDauerInMillis = 0;
        if (arbeitDauerInMillis > 0) {
            pauseDauerInMillis = 1000 * 60 * 50;
        }
        const buchungEndeDatum = new Date(sperrzeitEndeDatum.getTime() + arbeitDauerInMillis + pauseDauerInMillis);
        const gesamtDauerNetto = einsatzDauerInMillis + arbeitDauerInMillis;
        const gesamtDauerBrutto = gesamtDauerNetto + pauseDauerInMillis;
        let buchungDauerInMillis = buchungEndeDatum - buchungBeginnDatum;

        const result = {
            sperrzeitEnde: dateToTimeInputValue(sperrzeitEndeDatum),
            buchungBeginn: dateToTimeInputValue(buchungBeginnDatum),
            buchungEnde: dateToTimeInputValue(buchungEndeDatum),
            buchungDauer: millisToHhDotMm(buchungDauerInMillis),
            einsatzDauer: millisToHhDotMm(einsatzDauerInMillis),
            gesamtDauerNetto: millisToHhDotMm(gesamtDauerNetto),
            gesamtDauerBrutto: millisToHhDotMm(gesamtDauerBrutto)
        };
        return result;
    }
}

export const calculator = new Calculator();

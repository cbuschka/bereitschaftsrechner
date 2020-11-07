import {calculator} from "./calculator";
import {hhDotMmtoMillis, millisToHhDotMm} from "./timeconv";
import {dateWithTimeToDate} from "./datetimeconv";
import {dateToDateInputValue, yyyyMmDdToDate} from "./dateconv";

class Model {
    constructor() {
        this.data = {
            einsatzTag: dateToDateInputValue(new Date()),
            einsatzBeginn: "00:15",
            einsatzEnde: "02:15",
            ueblicherArbeitsbeginn: "07:30",
            arbeitBeginn: "15:05",
            arbeitEnde: "16:05"
        };
    }

    onFieldChanged({data: {fieldName, value}}) {
        this.data[fieldName] = value;
    }

    appendDataTo(target) {
        const einsatzMessages = [];
        const ueblicherArbeitsbeginnMessages = [];
        const einsatzTagDate = yyyyMmDdToDate(this.data.einsatzTag);
        const einsatzStartDatum = dateWithTimeToDate(einsatzTagDate, this.data.einsatzBeginn);
        const einsatzEndeDatum = dateWithTimeToDate(einsatzTagDate, this.data.einsatzEnde);
        const ueblicherArbeitsbeginn = this.data.ueblicherArbeitsbeginn;
        const arbeitBeginnDatum = dateWithTimeToDate(einsatzTagDate, this.data.arbeitBeginn);
        const arbeitEndeDatum = dateWithTimeToDate(einsatzTagDate, this.data.arbeitEnde);
        let arbeitDauer = 0;
        if (arbeitBeginnDatum && arbeitEndeDatum) {
            arbeitDauer = millisToHhDotMm(arbeitEndeDatum - arbeitBeginnDatum);
        }
        if (!einsatzTagDate) {
            einsatzMessages.push({type: "danger", text: "Einsatz-Tag erforderlich."});
        }
        if (einsatzTagDate && !einsatzStartDatum) {
            einsatzMessages.push({type: "danger", text: "Einsatz-Beginn erforderlich."});
        }
        if (einsatzTagDate && !einsatzEndeDatum) {
            einsatzMessages.push({type: "danger", text: "Einsatz-Ende erforderlich."});
        }
        if (!ueblicherArbeitsbeginn) {
            ueblicherArbeitsbeginnMessages.push({type: "danger", text: "Üblicher-Arbeitsbeginn erforderlich."});
        }

        if (einsatzStartDatum && einsatzEndeDatum && ueblicherArbeitsbeginn) {
            const {
                sperrzeitEnde,
                buchungBeginn,
                buchungEnde,
                buchungDauer,
                einsatzDauer,
                gesamtDauerNetto,
                gesamtDauerBrutto
            } = calculator.berechneBuchung(einsatzStartDatum,
                einsatzEndeDatum,
                ueblicherArbeitsbeginn,
                hhDotMmtoMillis(arbeitDauer));
            target.calculator = {
                ...this.data,
                sperrzeitEnde,
                buchungBeginn,
                buchungEnde,
                buchungDauer,
                einsatzDauer,
                einsatzMessages,
                gesamtDauerBrutto,
                gesamtDauerNetto,
                arbeitDauer,
                ueblicherArbeitsbeginnMessages
            };
        } else {
            target.calculator = {
                ...this.data,
                sperrzeitEnde: "",
                buchungBeginn: "",
                buchungEnde: "",
                buchungDauer: "",
                einsatzDauer: "",
                gesamtDauerBrutto: "",
                gesamtDauerNetto: "",
                arbeitDauer: "",
                einsatzMessages,
                ueblicherArbeitsbeginnMessages
            };
        }
    }
}

export const model = new Model();

import {calculator} from '../calculator';

describe("Calculator", () => {

    test("it should calc einsatzDauer, sperrzeitEnde and buchung without arbeitDauer", () => {
        const einsatzStartDatum = new Date('2020-11-03 01:00 GMT+1');
        const einsatzEndeDatum = new Date('2020-11-03 02:00 GMT+1');
        const ueblicherArbeitsbeginn = "06:00";
        const {
            einsatzDauer,
            sperrzeitEnde,
            buchungBeginn,
            buchungEnde,
            buchungDauer
        } = calculator.berechneBuchung(einsatzStartDatum, einsatzEndeDatum, ueblicherArbeitsbeginn,
            undefined);
        expect(einsatzDauer).toEqual("01:00");
        expect(sperrzeitEnde).toEqual("13:00");
        expect(buchungBeginn).toEqual("07:00");
        expect(buchungEnde).toEqual("13:00");
        expect(buchungDauer).toEqual("06:00");
    });
});

import * as $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import {hhDotMmtoMillis, millisToHhDotMm} from "./timeconv";
import {model} from "./model";

$(document).ready(function () {
    const $einsatzTag = $('#einsatzTag');
    const $einsatzTagFehler = $('#einsatzTagFehler');
    const $einsatzFehler = $('#einsatzFehler');
    const $einsatzBeginnFehler = $('#einsatzBeginnFehler');
    const $einsatzEndeFehler = $('#einsatzEndeFehler');
    const $einsatzBeginn = $('#einsatzBeginn');
    const $einsatzEnde = $('#einsatzEnde');
    const $einsatzDauer = $('#einsatzDauer');
    const $ueblicherArbeitsbeginn = $('#ueblicherArbeitsbeginn');
    const $buchungBeginn = $('#buchungBeginn');
    const $sperrzeitEnde = $('#sperrzeitEnde');
    const $buchungEnde = $('#buchungEnde');
    const $buchungDauer = $('#buchungDauer');
    const $arbeitBeginn = $('#arbeitBeginn');
    const $arbeitEnde = $('#arbeitEnde');
    const $arbeitDauer = $('#arbeitDauer');
    const $gesamtDauerBrutto = $('#gesamtDauerBrutto');
    const $gesamtDauerNetto = $('#gesamtDauerNetto');

    const form = {
        init: function () {
            $einsatzTag.val(new Date().toLocaleDateString('en-CA'));
            $einsatzBeginn.val("00:45");
            $einsatzEnde.val("08:00");
            $ueblicherArbeitsbeginn.val('06:30');
            $arbeitBeginn.val("00:00");
            $arbeitEnde.val("00:00");
        },
        sperrzeitEnde: function (v) {
            $sperrzeitEnde.val(v);
        },
        einsatzTagFehler: function (v) {
            $einsatzTagFehler.val(v);
        },
        einsatzFehler: function (v) {
            $einsatzFehler.val(v);
        },
        einsatzBeginnFehler: function (v) {
            $einsatzBeginnFehler.val(v);
        },
        einsatzEndeFehler: function (v) {
            $einsatzEndeFehler.val(v);
        },
        einsatzTag: function () {
            return $einsatzTag.val();
        },
        einsatzBeginn: function () {
            return $einsatzBeginn.val();
        },
        einsatzEnde: function () {
            return $einsatzEnde.val();
        },
        einsatzDauer: function (v) {
            $einsatzDauer.val(v);
        },
        arbeitBeginn: function () {
            return $arbeitBeginn.val();
        },
        arbeitEnde: function () {
            return $arbeitEnde.val();
        },
        arbeitDauer: function (v) {
            $arbeitDauer.val(v);
        },
        buchungBeginn: function (v) {
            return $buchungBeginn.val(v);
        },
        buchungEnde: function (v) {
            return $buchungEnde.val(v);
        },
        buchungDauer: function (v) {
            $buchungDauer.val(v);
        },
        ueblicherArbeitsbeginn: function () {
            return $ueblicherArbeitsbeginn.val();
        },
        gesamtDauerBrutto: function (v) {
            $gesamtDauerBrutto.val(v);
        },
        gesamtDauerNetto: function (v) {
            $gesamtDauerNetto.val(v);
        }
    };

    function update() {
        const einsatzTag = form.einsatzTag();
        const einsatzBeginn = form.einsatzBeginn();
        const einsatzEnde = form.einsatzEnde();
        const arbeitBeginn = form.arbeitBeginn();
        const arbeitEnde = form.arbeitEnde();
        const ueblicherArbeitsbeginn = form.ueblicherArbeitsbeginn();

        let einsatzTagFehler = "";
        if (!einsatzTag) {
            einsatzTagFehler = "Einsatz-Tag muss gesetzt sein.";
        }

        let einsatzDauer = "";
        let einsatzFehler = "";
        let einsatzBeginnFehler = "";
        let einsatzEndeFehler = "";
        let buchungBeginn = "";
        let buchungEnde = "";
        let buchungDauer = "";
        let sperrzeitEnde = "";
        let arbeitDauer = "00:00";
        let gesamtDauerBrutto = "";
        let gesamtDauerNetto = "";

        if (einsatzTag && einsatzBeginn && einsatzEnde) {

            if (arbeitBeginn && arbeitEnde) {
                let arbeitBeginnDatum = new Date(`${einsatzTag} ${arbeitBeginn}`);
                let arbeitEndeDatum = new Date(`${einsatzTag} ${arbeitEnde}`);
                arbeitDauer = millisToHhDotMm(arbeitEndeDatum - arbeitBeginnDatum);
            }

            if (einsatzBeginn < einsatzEnde) {
                const einsatzStartDatum = new Date(`${einsatzTag} ${einsatzBeginn}`);
                const einsatzEndeDatum = new Date(`${einsatzTag} ${einsatzEnde}`);
                const einsatzDauerInMillis = einsatzEndeDatum - einsatzStartDatum;
                einsatzDauer = millisToHhDotMm(einsatzDauerInMillis);

                model.einsatzStartDatum = einsatzStartDatum;
                model.einsatzEndeDatum = einsatzEndeDatum;
                model.ueblicherArbeitsbeginn = ueblicherArbeitsbeginn;
                model.arbeitDauerInMillis = hhDotMmtoMillis(arbeitDauer);
                const buchung = model.berechneBuchung();

                buchungBeginn = buchung.beginn;
                buchungEnde = buchung.ende;
                buchungDauer = buchung.dauer;
                sperrzeitEnde = buchung.sperrzeitEnde;
                gesamtDauerBrutto = buchung.gesamtDauerBrutto;
                gesamtDauerNetto = buchung.gesamtDauerNetto;
            } else {
                einsatzBeginnFehler = "Einsatz-Beginn muss vor -Ende liegen."
                einsatzEndeFehler = "Einsatz-Ende muss nach -Beginn liegen."
            }
        }

        form.einsatzDauer(einsatzDauer);
        form.einsatzTagFehler(einsatzTagFehler);
        form.einsatzFehler(einsatzFehler);
        form.einsatzBeginnFehler(einsatzBeginnFehler);
        form.einsatzEndeFehler(einsatzEndeFehler);
        form.buchungBeginn(buchungBeginn);
        form.buchungEnde(buchungEnde);
        form.buchungDauer(buchungDauer);
        form.sperrzeitEnde(sperrzeitEnde);
        form.arbeitDauer(arbeitDauer);
        form.gesamtDauerBrutto(gesamtDauerBrutto);
        form.gesamtDauerNetto(gesamtDauerNetto);
    }

    $('input').change(update);

    form.init();
    update();
})
;

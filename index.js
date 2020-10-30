function zeroPadded(d) {
    if (d === undefined) {
        return d;
    }

    if (d >= 0 && d < 10) {
        return "0" + d;
    }

    return "" + d;
}

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function millisToHhDotMm(dauerInMillis) {
    if (dauerInMillis === undefined) {
        return undefined;
    }

    const minutes = zeroPadded(Math.floor((dauerInMillis / (1000 * 60)) % 60));
    const hours = zeroPadded(Math.floor((dauerInMillis / (1000 * 60 * 60)) % 24));

    return `${hours}:${minutes}`
}

function hhDotMmtoMillis(hhDotMm) {
    if (hhDotMm === undefined) {
        return undefined;
    }

    const result = /(\d+):(\d+)/.exec(hhDotMm);
    return parseInt(result[1]) * 1000 * 60 * 60 + parseInt(result[2]) * 1000 * 60;
}

Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});


Date.prototype.toTimeInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(11, 16);
});


function berechneSperrzeitEndeDatum(einsatzEndeDatum) {
    return new Date(einsatzEndeDatum.getTime() + hhDotMmtoMillis("11:00"));
}


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
    const $gesamtDauer = $('#gesamtDauer');

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
        gesamtDauer: function (v) {
            $gesamtDauer.val(v);
        }
    };

    function berechneBuchung(einsatzStartDatum, einsatzEndeDatum, ueblicherArbeitsbeginn, arbeitDauerInMillis) {
        const einsatzDauerInMillis = einsatzEndeDatum - einsatzStartDatum;
        const einsatzTag = einsatzStartDatum.toDateInputValue();
        const ueblicherArbeitsbeginnDatum = new Date(`${einsatzTag} ${ueblicherArbeitsbeginn}`);
        const sperrzeitEndeDatum = berechneSperrzeitEndeDatum(einsatzEndeDatum);
        const aufschubstartDatum = max(ueblicherArbeitsbeginnDatum, einsatzEndeDatum);
        const buchungBeginnDatum = new Date(aufschubstartDatum.getTime() + einsatzDauerInMillis);
        const buchungEndeDatum = new Date(sperrzeitEndeDatum.getTime() + arbeitDauerInMillis);
        const buchungDauer = buchungEndeDatum - buchungBeginnDatum;

        return {
            sperrzeitEnde: sperrzeitEndeDatum.toTimeInputValue(),
            beginn: buchungBeginnDatum.toTimeInputValue(),
            ende: buchungEndeDatum.toTimeInputValue(),
            dauer: millisToHhDotMm(buchungDauer),
            gesamtDauer: millisToHhDotMm(einsatzDauerInMillis + arbeitDauerInMillis)
        };
    }

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
        let gesamtDauer = "";

        if (einsatzTag && einsatzBeginn && einsatzEnde) {

            if (arbeitBeginn && arbeitEnde) {
                arbeitBeginnDatum = new Date(`${einsatzTag} ${arbeitBeginn}`);
                arbeitEndeDatum = new Date(`${einsatzTag} ${arbeitEnde}`);
                arbeitDauer = millisToHhDotMm(arbeitEndeDatum - arbeitBeginnDatum);
            }

            if (einsatzBeginn < einsatzEnde) {
                const einsatzStartDatum = new Date(`${einsatzTag} ${einsatzBeginn}`);
                const einsatzEndeDatum = new Date(`${einsatzTag} ${einsatzEnde}`);
                const einsatzDauerInMillis = einsatzEndeDatum - einsatzStartDatum;
                einsatzDauer = millisToHhDotMm(einsatzDauerInMillis);

                const buchung = berechneBuchung(einsatzStartDatum, einsatzEndeDatum, ueblicherArbeitsbeginn, hhDotMmtoMillis(arbeitDauer));
                buchungBeginn = buchung.beginn;
                buchungEnde = buchung.ende;
                buchungDauer = buchung.dauer;
                sperrzeitEnde = buchung.sperrzeitEnde;
                gesamtDauer = buchung.gesamtDauer;
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
        form.gesamtDauer(gesamtDauer);
    }

    $('input').change(update);

    form.init();
    update();
});
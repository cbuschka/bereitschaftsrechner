import React from 'react';
import {Container, Form} from "reactstrap";
import {DayInput} from "./DayInput";
import {TimeInput} from './TimeInput';
import {DurationOutput} from "./DurationOutput";
import {dispatcher} from "@cbuschka/flux";
import {TimeOutput} from "./TimeOutput";
import {changeField} from "./changeFieldAction";
import {model} from "./model";
import {MessagePanel} from "./MessagePanel";
import './App.css';

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    onChange = ({data}) => {
        const {
            calculator: {
                einsatzTag, einsatzBeginn, einsatzEnde, einsatzDauer, einsatzMessages,
                ueblicherArbeitsbeginn,
                ueblicherArbeitsbeginnMessages,
                arbeitBeginn, arbeitEnde, arbeitDauer,
                sperrzeitEnde,
                buchungBeginn,
                buchungEnde,
                buchungDauer,
                gesamtDauerBrutto,
                gesamtDauerNetto
            }
        } = data;

        this.setState({
            einsatzTag, einsatzBeginn, einsatzEnde, einsatzDauer,
            ueblicherArbeitsbeginn, ueblicherArbeitsbeginnMessages,
            einsatzMessages,
            arbeitBeginn, arbeitEnde, arbeitDauer,
            sperrzeitEnde,
            buchungBeginn,
            buchungEnde,
            buchungDauer,
            gesamtDauerBrutto,
            gesamtDauerNetto
        });
    };

    componentDidMount() {
        dispatcher.addHandler(model);
        dispatcher.subscribe(this.onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this.onChange);
        dispatcher.removeHandler(model);
    }

    render() {
        const {
            einsatzTag, einsatzBeginn, einsatzEnde, einsatzDauer,
            einsatzMessages,
            sperrzeitEnde, arbeitBeginn, arbeitEnde, arbeitDauer,
            ueblicherArbeitsbeginn, ueblicherArbeitsbeginnMessages,
            buchungBeginn, buchungEnde, buchungDauer
        } = this.state;


        return (
            <div className="App">
                <Container tag="section">
                    <h1>Bereitschaftsrechner</h1>
                    <p><small>(Alle Angaben ohne Gewähr!)</small></p>
                    <Form>
                        <h4>Einsatz</h4>
                        <div className="row well">
                            <div className="col col-4">
                                <div className="form-group">
                                    <label htmlFor="einsatzTag">Tag:</label>
                                    <DayInput id="einsatzTag" value={einsatzTag}
                                              onChange={this.onEinsatzTagChanged}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="einsatzBeginn">Beginn:</label>
                                    <TimeInput id="einsatzBeginn" value={einsatzBeginn}
                                               onChange={this.onEinsatzBeginnChanged}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="einsatzEnde">Ende:</label>
                                    <TimeInput id="einsatzEnde" value={einsatzEnde}
                                               onChange={this.onEinsatzEndeChanged}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="einsatzDauer">Dauer:</label>
                                    <DurationOutput id="einsatzDauer" value={einsatzDauer}/>
                                </div>
                            </div>
                        </div>
                        <MessagePanel items={einsatzMessages}/>
                        <hr/>
                        <h4>Arbeit (nach dem Einsatz)</h4>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="sperrzeitEnde">Sperrzeit-Ende:</label>
                                    <TimeOutput id="sperrzeitEnde" value={sperrzeitEnde}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group ">
                                    <label htmlFor="arbeitBeginn">Beginn:</label>
                                    <TimeInput id="arbeitBeginn" value={arbeitBeginn}
                                               onChange={this.onArbeitBeginnChanged}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="arbeitEnde">Ende:</label>
                                    <TimeInput id="arbeitEnde" value={arbeitEnde}
                                               onChange={this.onArbeitEndeChanged}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="arbeitDauer">Dauer:</label>
                                    <DurationOutput id="arbeitDauer" value={arbeitDauer}/>
                                </div>
                            </div>
                        </div>

                        <hr/>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="ueblicherArbeitsbeginn">Üblicher Arbeitsbeginn:</label>
                                    <TimeInput id="ueblicherArbeitsbeginn" value={ueblicherArbeitsbeginn}
                                               onChange={this.onUeblicherArbeitsbeginnChanged}/>
                                </div>
                            </div>
                        </div>
                        <MessagePanel items={ueblicherArbeitsbeginnMessages}/>

                        <hr/>
                        <h4>Verbuchung</h4>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="buchungBeginn">Beginn:</label>
                                    <TimeOutput readOnly id="buchungBeginn" value={buchungBeginn}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="buchungEnde">Ende:</label>
                                    <TimeOutput value={buchungEnde} id="buchungEnde"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="buchungDauer">Dauer:</label>
                                    <DurationOutput value={buchungDauer} id="buchungDauer"/>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }

    onEinsatzTagChanged(value) {
        changeField("einsatzTag", value);
    }

    onEinsatzBeginnChanged(value) {
        changeField("einsatzBeginn", value);
    }

    onEinsatzEndeChanged(value) {
        changeField("einsatzEnde", value);
    }

    onUeblicherArbeitsbeginnChanged(value) {
        changeField("ueblicherArbeitsbeginn", value);
    }

    onArbeitBeginnChanged(value) {
        changeField("arbeitBeginn", value);
    }

    onArbeitEndeChanged(value) {
        changeField("arbeitEnde", value);
    }
}

import React from 'react';
import {isDate} from "./datetimeconv";
import {dateToHhMm} from "./timeconv";

export class TimeInput extends React.Component {

    onChange = (ev) => {
        const {onChange} = this.props;

        if (onChange) {
            const newValue = ev.target.value;
            onChange(newValue, ev);
        }
    };

    render() {
        const {id} = this.props;
        let {value = ""} = this.props;

        if (isDate(value)) {
            value = dateToHhMm(value);
        }

        return <input type="time" className="form-control"
                      onChange={this.onChange}
                      id={id} value={value}/>
    }
}

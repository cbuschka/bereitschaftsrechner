import React from 'react';
import {isDate} from "./datetimeconv";
import {dateToYyyyMmDd} from "./dateconv";

export class DayInput extends React.Component {

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
            value = dateToYyyyMmDd(value);
        }

        return <input type="date"
                      className="form-control"
                      onChange={this.onChange}
                      id={id} value={value}/>
    }
}

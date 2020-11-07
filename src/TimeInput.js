import React from 'react';
import {isDate} from "./datetimeconv";
import {dateToHhMm} from "./timeconv";
import classnames from 'classnames';
import {Input} from "reactstrap";

export class TimeInput extends React.Component {

    onChange = (ev) => {
        const {onChange} = this.props;

        if (onChange) {
            const newValue = ev.target.value;
            onChange(newValue, ev);
        }
    };

    render() {
        const {id, className = ""} = this.props;
        let {value = ""} = this.props;

        if (isDate(value)) {
            value = dateToHhMm(value);
        }

        return <Input placeholder="HH:MM"
                      className={classnames()}
                      onChange={this.onChange}
                      id={id} value={value}/>;
    }
}

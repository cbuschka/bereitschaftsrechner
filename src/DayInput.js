import React from 'react';
import {isDate} from "./datetimeconv";
import {dateToYyyyMmDd} from "./dateconv";
import classnames from 'classnames';
import {Input} from "reactstrap";

export class DayInput extends React.Component {

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
            value = dateToYyyyMmDd(value);
        }

        return <Input placeholder='YYYY-MM-DD'
                      className={classnames(className)}
                      onChange={this.onChange}
                      id={id} value={value}/>;
    }
}

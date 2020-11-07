import React from 'react';

export class TimeOutput extends React.Component {
    render() {
        const {id, value = ""} = this.props;
        return <output readOnly className="form-control" id={id}>{value}</output>
    }
}

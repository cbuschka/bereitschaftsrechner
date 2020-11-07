import React from 'react';

export class MessagePanel extends React.Component {

    render() {
        const {items = []} = this.props;

        if (items.length === 0) {
            return null;
        }

        return <div className="row">{items.map((item, index) => <MessagePanel.Item key={index} type={item["type"]}
                                                                   text={item["text"]}/>)}</div>;
    }
}

export class MessagePanelItem extends React.Component {

    render() {
        const {type = "info", text = ""} = this.props;

        return <div className="col"><div className={"text-" + type}>{text}</div></div>;
    }
}

MessagePanel.Item = MessagePanelItem;

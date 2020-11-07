import {dispatcher} from "@cbuschka/flux";

export function changeField(fieldName, value) {
    return dispatcher.dispatch({type: "fieldChanged", data: {fieldName, value}})
}

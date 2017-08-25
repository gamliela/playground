import * as React from "react";
import {observer} from "mobx-react";
import FirebaseNodeModel from "../../shared_modules/firebase-mobx/FirebaseNodeModel";
import {database} from "../../shared_modules/firebase-config";
import {STATUS} from "../../shared_modules/firebase-mobx/constants";

const node = new FirebaseNodeModel(database, "/MyRoot/Node1/Node12/");

@observer
export default class MainPage extends React.Component<void> {
    render() {
        const val = (typeof(node.value) === "object") ? JSON.stringify(node.value) : node.value;
        return (
            <div>
                <div>status: {STATUS[node.status]}</div>
                <div>value type: {typeof(node.value)}</div>
                <div>value: {val}</div>
                <div>error: {node.error}</div>
            </div>
        );
    }
}

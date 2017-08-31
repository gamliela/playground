import * as React from "react";
import {observer} from "mobx-react";
import FirebaseNodeModel from "../../shared_modules/firebase-mobx/FirebaseNodeModel";
import {database} from "../../shared_modules/firebase-config";
import {STATUS} from "../../shared_modules/firebase-mobx/constants";
import FirebaseNewNodesModel from "../../shared_modules/firebase-mobx/FirebaseNewNodesModel";

const node = new FirebaseNodeModel(database, "/MyRoot/Node1/Node12/");
const newNodes = new FirebaseNewNodesModel(database, "/MyRoot/Node1/");

@observer
export default class MainPage extends React.Component<{}> {
    render() {
        const val = (typeof(node.value) === "object") ? JSON.stringify(node.value) : node.value;
        const vals = JSON.stringify(newNodes.values);
        return (
            <div>
                <div>VALUE</div>
                <div>status: {STATUS[node.status]}</div>
                <div>value type: {typeof(node.value)}</div>
                <div>value: {val}</div>
                <div>error: {node.error}</div>
                <div>VALUES</div>
                <div>status: {STATUS[newNodes.status]}</div>
                <div>value: {vals}</div>
                <div>error: {newNodes.error}</div>
            </div>
        );
    }
}

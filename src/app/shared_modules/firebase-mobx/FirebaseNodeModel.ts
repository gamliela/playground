import * as firebase from "firebase/app";
import Database = firebase.database.Database;
import FirebaseModel from "./FirebaseModel";
import {observable, action} from "mobx";
import {Listener, STATUS} from "./constants";

export default class FirebaseNodeModel<T> extends FirebaseModel {

    @observable value: T = null;
    private listener: Listener;

    constructor(database: Database, ref: string) {
        super(database, ref);
        this.listener = this.ref.on('value', this.updateValue, this.setCancelled);
    }

    @action.bound
    updateValue(snapshot: firebase.database.DataSnapshot) {
        this.status = STATUS.ACTIVE;
        this.value = snapshot.val();
    }

    @action.bound
    destroy() {
        this.status = STATUS.DESTROYED;
        this.ref.off('value', this.listener);
    }

}

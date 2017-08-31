import * as firebase from "firebase/app";
import Database = firebase.database.Database;
import FirebaseModel from "./FirebaseModel";
import {observable, action} from "mobx";
import {Listener, STATUS} from "./constants";

export default class FirebaseNewNodesModel<T> extends FirebaseModel {

    @observable status: STATUS = STATUS.ACTIVE;

    public values: T[] = observable([]);
    private listener: Listener;
    private prevKey: string = null;

    constructor(database: Database, ref: string) {
        super(database, ref);
        this.listener = this.ref.on('child_added', this.childAdded, this.setCancelled);
    }

    @action.bound
    childAdded(snapshot: firebase.database.DataSnapshot, prevKey: string) {
        if (prevKey == this.prevKey) {
            this.values.push(snapshot.val());
            this.prevKey = snapshot.key;
        } else
            console.warn('child_added was triggered for non-last element, but this behaviour is not yet supported');
    }

    @action.bound
    destroy() {
        if (this.listener) {
            this.status = STATUS.DESTROYED;
            this.ref.off('child_added', this.listener);
            this.listener = null;
        }
    }

}

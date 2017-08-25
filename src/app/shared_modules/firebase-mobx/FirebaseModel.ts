import * as firebase from "firebase/app";
import Database = firebase.database.Database;
import Reference = firebase.database.Reference;
import {action, observable} from "mobx";
import {STATUS} from "./constants";

export default class FirebaseModel {

    @observable status: STATUS = STATUS.LOADING;
    @observable error: Error = null;

    protected readonly ref: Reference;

    constructor(database: Database, ref: string) {
        this.ref = database.ref(ref);
    }

    @action.bound
    protected setCancelled(error: Error) {
        this.error = error;
        this.status = STATUS.CANCELLED;
    }

}

import * as firebase from "firebase/app";

export enum STATUS {
    LOADING = 1,
    ACTIVE = 2,
    DESTROYED = 3,
    CANCELLED = 4
}

export type Listener = (a: firebase.database.DataSnapshot, b ?: string | null) => any;

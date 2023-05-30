import * as Realm from "realm-web";

export const realm_app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID || '' });
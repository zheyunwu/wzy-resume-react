import Realm from "realm-web";
import { realm_app } from "api";

export async function loginEmailPassword(email: string, password: string): Promise<Realm.User | undefined> {
  // Create an email/password credential
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user = await realm_app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === realm_app.currentUser?.id);
    return user;
  } catch(err) {
    console.error("Failed to log in", err);
  }

}

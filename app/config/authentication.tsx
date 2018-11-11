import * as firebase from "firebase";
import * as Expo from "expo";

interface IFirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    storageBucket: string;
}

export const firebaseConfig: IFirebaseConfig = {
    apiKey: "AIzaSyCP12tkAAs7L8ScltoGAsiKW-EB5z1BBJc",
    authDomain: "dili-16490.firebaseapp.com",
    databaseURL: "https://dili-16490.firebaseio.com",
    storageBucket: "gs://dili-16490.appspot.com",
}

const facebookAppID: string = "2207884789534473";
const googleConfig: Expo.Google.LogInConfig = {
    webClientId: "620460241347-f9q3fi5mjh6mgev1afnechqdn3l0hk58.apps.googleusercontent.com",

}

export async function loginWithFacebook() {
    const loginResult = await Expo.Facebook.logInWithReadPermissionsAsync(
        facebookAppID,
        { permissions: ["public_profile"] }
    );

    if (loginResult.type === "success") {
        // Build Firebase credential with the Facebook access token.
        const credential = firebase.auth.FacebookAuthProvider.credential(loginResult.token!);
        // Sign in with credential from the Facebook user.
        firebase.auth().signInWithCredential(credential)
            .catch((error) => console.log(error.message));
    }
}

export async function loginWithGoogle() {
    const loginResult = await Expo.Google.logInAsync( googleConfig );

    if (loginResult.type === "success") {
        // Build Firebase credential with the Google access token.
        const credential = firebase.auth.GoogleAuthProvider.credential(loginResult.accessToken);
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential)
            .catch((error) => { console.log(error.message) });
    }
}

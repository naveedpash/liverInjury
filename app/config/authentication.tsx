import * as firebase from "firebase";
import Expo from "expo";

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

// TODO: for facebook login to work, it needs Expo or Facebook SDK
//      therefore, it needs another secret ID
//  private handleFacebookLogin = () => {
//      const provider = new firebase.auth.FacebookAuthProvider();
//      firebase
//          .auth()
//          .signInWithPopup(provider)
//          .then((result) => {
//              firebase.auth().signInWithCredential(result.credential!)
//          })
//          .then(() => this.props.navigation.navigate("Main"))
//          .catch((error: Error) => this.setState({ errorMessage: error.message }));
//  }
//  private handleGoogleLogin = () => {
//      const provider = new firebase.auth.GoogleAuthProvider();
//      firebase
//          .auth()
//          .signInWithPopup(provider)
//          .then((result) => {
//              firebase.auth().signInWithCredential(result.credential!)
//          })
//          .then(() => this.props.navigation.navigate("Main"))
//          .catch((error: Error) => this.setState({ errorMessage: error.message }));
//  }

export async function loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            firebase.auth().signInWithCredential(result.credential!)
        })
        .catch((error: Error) => console.log(error.message));
}

export async function loginWithGoogle() {
//  Expo.Google.logInAsync({
//      webClientId: "620460241347-f9q3fi5mjh6mgev1afnechqdn3l0hk58.apps.googleusercontent.com",
//  })
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            firebase.auth().signInWithCredential(result.credential!)
        })
        .catch((error: Error) => console.log(error.message));
}

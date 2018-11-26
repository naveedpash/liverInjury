import firebase from "firebase";
import { AsyncStorage, NetInfo } from "react-native";

const waitTime: number = 10 * 1000; // watiTime in seconds

export function uploadFirebase(ref: string, child: string, data: object): Promise<any> {
    return firebase
        .database()
        .ref(ref)
        .child(child)
        .set(data);
}

export function uploadStorage(key: string): Promise<any> {
    return AsyncStorage.getItem(key)
    .then((data) => {
        firebase
        .database()
        .ref(key)
        .set(JSON.parse(data!));
    })
    .catch((error: Error) => console.log(error.message));
}

export function writeStorage(key: string, data: object): Promise<any> {
    return AsyncStorage.setItem(key, JSON.stringify(data));
}

export class listenStatus {
    public static async get(): Promise<boolean> {
        let flag: boolean = false;
        const isListening = await AsyncStorage.getItem("islistening")
                .catch((error: Error) => console.log(error.message));
        switch (isListening) {
            case null:
                AsyncStorage.setItem("islistening", "false")
                .catch((error: Error) => console.log(error.message));
                break;
            case "true":
                flag = true;
                break;
            case "false":
                flag = false;
                break;
        }
        return flag;
    }

    public static set(value: boolean): void {
        if (value) {
            NetInfo.isConnected.addEventListener("connectionChange", handleConnectivityChange);
            AsyncStorage.setItem("islistening", "true")
            .then(() => console.log("Added Event Listener"))
            .catch((error: Error) => console.log(error.message));
        } else {
            NetInfo.isConnected.removeEventListener("connectionChange", handleConnectivityChange);
            AsyncStorage.setItem("islistening", "false")
            .then(() => console.log("Removed Event Listener"))
            .catch((error: Error) => console.log(error.message));
        }
    }
}

export async function handleData(ref: string, child: string, data: object): Promise<any> {
    const isConnected = await NetInfo.isConnected.fetch();
    const isListening = await listenStatus.get();
    console.log(isListening);
    if (isConnected) {
        console.log("Connected");
        return uploadFirebase(ref, child, data);
    } else {
        console.log("Not Connected");
        return writeStorage(ref + child, data)
        .then(() => {
            if (isListening === false) {
                listenStatus.set(true);
            } else {
                console.log("Already Listening");
            }
        });
    }
}

export function handleConnectivityChange(isConnected: boolean) {
    if (isConnected) {
        console.log("Connected Again");
        const user = firebase.auth().currentUser;
        AsyncStorage.getAllKeys()
        .then((keys) => {
            let numKeys: number = keys.length;
            console.log(keys);
            for (let key of keys) {
                // ignore keys: "islistening" and firebase auth token
                if (key === "islistening") { continue }
                if (/firebase/.test(key)) { continue }
                uploadStorage(key)
                .then(() => {
                    console.log("Uploaded Data:" + key);
                    AsyncStorage.removeItem(key)
                    .then(() => { // removeEventListener ONLY when all keys are uploaded
                        numKeys -= 1;
                        if (numKeys === 2) {
                            listenStatus.set(false);
                        }
                    });
                }).catch((error: Error) => console.log(error.message));
            }
        }).catch((error: Error) =>  console.log(error.message));
    }
}

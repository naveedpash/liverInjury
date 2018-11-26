import { createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import Loading from "../screens/auth/Loading";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import EntryForm from "../screens/entryForm";
import FollowUp from "../screens/FollowUp";
import Main from "../screens/Main";
import Mortality from "../screens/Mortality";
import Notification from "../screens/Notification";

const auth = createStackNavigator({
    Loading: {
        screen: Loading,
    },
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    },
    main: {
        screen: createStackNavigator({
            main: {
                screen: Main,
            },
            entry: {
                screen: EntryForm,
            },
            followUp: {
                screen: FollowUp,
            },
            mortality: {
                screen: Mortality,
            },
            notification: {
                screen: Notification,
            },
        }, {
            headerMode: "screen",
        }),
    },
}, {
    headerMode: "none",
});

export default auth;

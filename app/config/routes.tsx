import {
    createAppContainer,
    createStackNavigator } from "react-navigation";
import Loading from "../screens/auth/Loading";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import EntryForm from "../screens/entryForm";
import FollowUp from "../screens/FollowUp";
import Main from "../screens/Main";
import Mortality from "../screens/Mortality";

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
        }, {
            headerMode: "none",
        }),
    },
}, {
    headerMode: "none",
});

export default createAppContainer(auth);

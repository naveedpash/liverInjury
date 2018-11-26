import { StatusBar } from "react-native";
import { createMaterialTopTabNavigator, createStackNavigator} from "react-navigation";
import Loading from "../screens/auth/Loading";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import demographicsEntry from "../screens/entryForm/demographicsEntry";
import diliEntry from "../screens/entryForm/diliEntry";
import examEntry from "../screens/entryForm/examEntry";
import historyEntry from "../screens/entryForm/historyEntry";
import labEntry from "../screens/entryForm/labEntry";
import labHxEntry from "../screens/entryForm/labHxEntry";
import pastEntry from "../screens/entryForm/pastEntry";
import pastRxEntry from "../screens/entryForm/pastRxEntry";
import FollowUp from "../screens/FollowUp";
import Main from "../screens/Main";
import Mortality from "../screens/Mortality";
import Notification from "../screens/Notification";

const entry = createMaterialTopTabNavigator({
    entry: {
        screen: demographicsEntry,
        navigationOptions: () => ({
            tabBarLabel: "Demographics",
        }),
    },
    dili: {
        screen: diliEntry,
        navigationOptions: () => ({
            tabBarLabel: "Suspected\nDrug",
        }),
    },
    history: {
        screen: historyEntry,
        navigationOptions: () => ({
            tabBarLabel: "Presenting\nHistory",
        }),
    },
    past: {
        screen: pastEntry,
        navigationOptions: () => ({
            tabBarLabel: "Past\nHistory",
        }),
    },
    pastRx: {
        screen: pastRxEntry,
        navigationOptions: () => ({
            tabBarLabel: "Past\nMedications",
        }),
    },
    exam: {
        screen: examEntry,
        navigationOptions: () => ({
            tabBarLabel: "Exam",
        }),
    },
    lab: {
        screen: labEntry,
        navigationOptions: () => ({
            tabBarLabel: "Labs",
        }),
    },
    labHx: {
        screen: labHxEntry,
        navigationOptions: () => ({
            tabBarLabel: "Labs\nHistory",
        }),
    },
}, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 12,
            padding: 5,
            margin: 0,
        },
        tabStyle: {
            width: 103,
            backgroundColor: "#910505",
        },
        scrollEnabled: true,
    },
});

const main = createStackNavigator({
    main: {
        screen: Main,
    },
    entry: {
        screen: entry,
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
    headerMode: "none",
});

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
                screen: entry,
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

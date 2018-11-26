import * as React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import demographicsEntry from "./demographicsEntry";
import diliEntry from "./diliEntry";
import examEntry from "./examEntry";
import historyEntry from "./historyEntry";
import labEntry from "./labEntry";
import labHxEntry from "./labHxEntry";
import pastEntry from "./pastEntry";
import pastRxEntry from "./pastRxEntry";

const Entry = createMaterialTopTabNavigator({
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
    },
}, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 12,
            paddingHorizontal: 5,
            margin: 0,
        },
        activeBackgroundColor: "#910505",
        inactiveBackgroundColor: "#910505",
        tabStyle: {
            width: 108,
            backgroundColor: "#910505",
        },
        scrollEnabled: true,
    },
});

export default class EntryForm extends React.Component {
    public static navigationOptions = {
        title: "Register New Patient",
        headerStyle: {
            backgroundColor: "#910505",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            alignSelf: "center",
            color: "#ffffff",
            flex: 1,
            fontSize: 18,
            fontWeight: "300",
            paddingBottom: 10,
            textAlign: "left",
        },
    };

    private constructor(props: any) {
        super(props)
    }

    public render() {
        return <Entry />;
    }
}

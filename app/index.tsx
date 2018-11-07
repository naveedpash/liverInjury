import * as React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation";
import demographicsEntry from "./screens/entryForm/demographicsEntry";
import diliEntry from "./screens/entryForm/diliEntry";
import examEntry from "./screens/entryForm/examEntry";
import historyEntry from "./screens/entryForm/historyEntry";
import labEntry from "./screens/entryForm/labEntry";
import labHxEntry from "./screens/entryForm/labHxEntry";
import pastEntry from "./screens/entryForm/pastEntry";
import pastRxEntry from "./screens/entryForm/pastRxEntry";
import FollowUp from "./screens/FollowUp";
import Home from "./screens/Home";
import Mortality from "./screens/Mortality";

const entry = createStackNavigator({
    entry: {
        screen: demographicsEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
    dili: {
        screen: diliEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
    history: {
        screen: historyEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
    past: {
        screen: pastEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
    pastRx: {
        screen: pastRxEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
    exam: {
        screen: examEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
    lab: {
        screen: labEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
    labHx: {
        screen: labHxEntry,
        navigationOptions: () => ({
            title: `Register New Patient`,
            headerBackTitle: "Back to Main Screen",
            headerTruncatedBackTitle: "MainScreen",
        }),
    },
}, {
    headerMode: "screen",
    mode: "modal",
});

export default createStackNavigator({
    home: {
        screen: Home,
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
}, {
    headerMode: "none",
});

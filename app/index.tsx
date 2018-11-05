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

const entry = createStackNavigator({
    entry: {
        screen: demographicsEntry,
    },
    dili: {
        screen: diliEntry,
    },
    history: {
        screen: historyEntry,
    },
    exam: {
        screen: examEntry,
    },
    past: {
        screen: pastEntry,
    },
    pastRx: {
        screen: pastRxEntry,
    },
    lab: {
        screen: labEntry,
    },
    labHx: {
        screen: labHxEntry,
    },
});

export default createStackNavigator({
    home: {
        screen: Home,
    },
    entry: {
        screen: entry,
    },
});


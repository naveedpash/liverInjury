import * as React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation";
import Demographics from "./screens/demographicsEntry";
import FollowUp from "./screens/FollowUp";
import Home from "./screens/Home";

const home = createImageBitmap({
    home: {
        screen: Home,
    },
});

export default createStackNavigator({
});

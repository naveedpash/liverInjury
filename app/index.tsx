import * as React from "react";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import colors from "./config/colors";
import store from "./config/redux/store";
import Navigation from "./config/routes";

const theme = {
    ...DefaultTheme,
    colors: {
        primary: colors.green,
        accent: colors.lightorange,
        background: colors.white,
        surface: colors.yellow,
        text: "black",
        disabled: colors.grey,
        backdrop: colors.green,
    },
};

export default () => (
    <Provider store={store}>
        <PaperProvider theme={theme}>
            <Navigation />
        </PaperProvider>
    </Provider>
);

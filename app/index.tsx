import * as React from "react";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import colors from "./config/colors";
import store from "./config/redux/store";
import Navigation from "./config/routes";

const theme = {
    ...DefaultTheme,
    colors: {
        primary: colors.darkorange,
        accent: colors.yellow,
        background: colors.yellow,
        surface: colors.green,
        text: colors.green,
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

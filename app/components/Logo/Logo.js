"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
//Images
var splash_png_1 = require("./images/splash.png");
var icon_png_1 = require("./images/icon.png");
//Styles
var styles_1 = require("./styles");
var Logo = function () {
    return (<react_native_1.ImageBackground source={splash_png_1["default"]}>
            <react_native_1.Image style={styles_1["default"].containerImage} source={icon_png_1["default"]}/>
        </react_native_1.ImageBackground>);
};
exports["default"] = Logo;

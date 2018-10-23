"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var Container_1 = require("../Container");
//Images
var splash_png_1 = __importDefault(require("./images/splash.png"));
var icon_png_1 = __importDefault(require("./images/icon.png"));
//Styles
var styles_1 = __importDefault(require("./styles"));
var Logo = function () {
    return (React.createElement(Container_1.Container, null,
        React.createElement(react_native_1.ImageBackground, { resizeMode: 'contain', style: styles_1.default.containerImage, source: splash_png_1.default },
            React.createElement(react_native_1.Image, { resizeMode: 'contain', style: styles_1.default.image, source: icon_png_1.default })),
        React.createElement(react_native_1.Text, { style: styles_1.default.text }, "Cross-institutional Registry for Drug Induced Liver Injury")));
};
exports.default = Logo;

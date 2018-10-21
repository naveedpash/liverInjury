"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var imageWidth = react_native_1.Dimensions.get('window').width / 2;
var styles = react_native_1.StyleSheet.create({
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth
    }
});
exports["default"] = styles;

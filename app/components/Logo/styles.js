"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var imageWidth = react_native_1.Dimensions.get('window').width / 2;
var styles = react_native_1.StyleSheet.create({
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    image: {
        width: imageWidth / 2,
    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: -0.5,
        marginTop: 15,
        color: '#785537',
        textAlign: 'center',
    },
});
exports.default = styles;

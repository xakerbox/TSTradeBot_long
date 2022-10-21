"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundValue = (value, decimals) => {
    if (typeof value === "string") {
        value = parseFloat(value);
    }
    const result = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return result;
};

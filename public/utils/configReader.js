"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.getConfig = (coin) => {
    try {
        // Server side:
        const coinConfig = fs_1.readFileSync(`./public/configs/${coin}.json`, "utf-8");
        return JSON.parse(coinConfig);
    }
    catch (e) {
        // const error = new Error('Не забыл добавить правильный конфиг для монеты?');
        throw `\n====> Где конфиг для ${coin}? А он правильный?\n`;
    }
};

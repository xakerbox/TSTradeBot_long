"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rounder_1 = require("../utils/rounder");
exports.generateMiddleOrders = (prices, qty, coin, tickerSize, orderType) => {
    const arrayOfOrders = [];
    for (let i = 1; i < prices.length; i++) {
        arrayOfOrders.push({
            coin: `${coin}USDT`,
            limitPrice: rounder_1.roundValue(prices[i], tickerSize),
            roundDecimals: tickerSize,
            qty: qty[i],
            orderType: orderType,
        });
    }
    return arrayOfOrders;
};

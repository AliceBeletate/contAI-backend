"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./database/data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Database connected');
    app_1.default.listen(3333, () => {
        console.log('Server running on port 3333');
    });
})
    .catch((err) => {
    console.log('Database connection error:', err);
});

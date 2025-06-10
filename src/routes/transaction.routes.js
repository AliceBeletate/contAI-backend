"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionController_1 = require("../controllers/transactionController");
const router = (0, express_1.Router)();
router.post('/', transactionController_1.TransactionController.create);
router.get('/', transactionController_1.TransactionController.getAll);
exports.default = router;

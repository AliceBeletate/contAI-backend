"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTransaction = validateTransaction;
function validateTransaction(input) {
    const errors = [];
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
    if (!dateRegex.test(input.date)) {
        errors.push('Date must be in format YYYY-MM-DD');
    }
    else {
        const [_, yearStr, monthStr, dayStr] = input.date.match(dateRegex) || [];
        const year = parseInt(yearStr);
        const month = parseInt(monthStr) - 1;
        const day = parseInt(dayStr);
        const dateObj = new Date(year, month, day);
        if (dateObj.getFullYear() !== year ||
            dateObj.getMonth() !== month ||
            dateObj.getDate() !== day) {
            errors.push('Date is not a valid calendar date');
        }
    }
    if (typeof input.amount !== 'number' || input.amount <= 0) {
        errors.push('Amount must be a positive number');
    }
    if (input.type !== 'credit' && input.type !== 'debit') {
        errors.push('Type must be either "credit" or "debit"');
    }
    if (!input.description || input.description.trim() === '') {
        errors.push('Description is required');
    }
    return {
        isValid: errors.length === 0,
        errors,
    };
}

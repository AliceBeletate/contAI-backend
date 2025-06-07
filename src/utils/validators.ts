type TransactionInput = {
    date: string;
    description: string;
    amount: number;
    type: 'credit' | 'debit';
}

type ValidationResult = {
    isValid: boolean;
    errors: string[];
}

export function validateTransaction(input: TransactionInput): ValidationResult {
    const errors: string[] = [];


const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
if (!dateRegex.test(input.date)) {
    errors.push('Date must be in format DD/MM/YYYY')
} else {
    const [_, dayStr, monthStr, yearStr] = input.date.match(dateRegex) || [];
    const day = parseInt(dayStr);
    const month = parseInt(monthStr) - 1;
    const year = parseInt(yearStr);

    const dateObj = new Date(year, month, day);
    if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month || dateObj.getDate() !== day) {
        errors.push('Date is not a valid calendar date');
    }
}

if (typeof input.amount !== 'number' || input.amount <= 0) {
    errors.push('Amount must be a positive number');   
}

if (input.type !== 'credit' && input.type !== 'debit') {
    errors.push('Type must be either "credit" or "debit');
}

if (!input.description || input.description.trim() === '') {
    errors.push('Description is required'); 
}

return {
    isValid: errors.length === 0,
    errors,
};
}
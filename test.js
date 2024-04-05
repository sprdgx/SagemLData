const ValidiElData = require('./ValidiElData');

// Initialize the validator
const validator = new ValidiElData();

// Add custom validation function for age
validator.ZidWchThab('ageValidator', async (value) => {
    const minAge = 18;
    const maxAge = 100;

    if (typeof value !== 'number') {
        return false; // Age must be a number
    }

    return value >= minAge && value <= maxAge;
});

const userData = {
    username: 'user123',
    password: 'seqsdqdqsdqd',
    email: 'user@example.com',
    age: 25, // Example age value
};

const validationRules = {
    username: { type: 'string', minLength: 4, maxLength: 20 },
    password: { type: 'string', minLength: 8 },
    email: { type: 'string', format: 'email' },
    age: { type: 'number', custom: 'ageValidator' },
};



(async () => {
    try {
        const validationResult = await validator.validiEZ(userData, validationRules);

        if (validationResult.isValid) {
            console.log('User data is valid!');
        } else {
            console.error('Validation errors:', validationResult.errors);
        }
    } catch (error) {
        console.error('Async validation error:', error);
    }
})();

# 👨🏻‍💻 SagemLData - Advanced Data Validator Library

Welcome to SagemLData, an advanced data validation library for Node.js. This library is designed to simplify and enhance data validation processes in your applications, providing robust validation capabilities with ease.


## 🚀 Installation

To start using ValidiElData in your Node.js project, you can install it via npm

**npm install sagemldata**

## 🔧 Usage

Here's an example of how you can utilize ValidiElData to validate user data:

1. **Import SagemLData: Import SagemLData into your project using require:**

   ```bash
   const SagemLData = require('sagemldata');

2. **Initialize the Validator: Create an instance of the validator:**
   
   ```bash
   const validator = new SagemLData();
   
3. **Add Custom Validation Function: You can add a custom validation function for a specific field :**

   ```bash   
    // Add custom validation function

    validator.SagemLiThab('customValidator', async (value) => {
    // Example custom validation logic
    return value === 'valid';
    });

    //  For example lets add a custom validation function for the 'age' field:

    validator.SagemLiThab('ageValidator', async (value) => {
    const minAge = 18;
    const maxAge = 100;

        if (typeof value !== 'number') {
            return false; // Age must be a number
        }

        return value >= minAge && value <= maxAge;
    });



4. **Prepare User Data and Validation Rules: Define your user data and the validation rules for each field.**

   ```bash
    // Here's an example for 'username', 'password', 'email', and 'age' Which Are Already Default Validated:

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

5. **Validate User Data: Now, you're ready to validate the user data using ValidiElData's validiEZ method:**

   ```bash
    (async () => {
        try {
            const validationResult = await validator.SagemEZ(userData, validationRules);

            if (validationResult.isValid) {
                console.log('User data is valid!');
            } else {
                console.error('Validation errors:', validationResult.errors);
            }
        } catch (error) {
            console.error('Async validation error:', error);
        }
    })();

In this example, we create a validator instance, define a custom validation rule for age, set up user data and validation rules, and then asynchronously validate the data using SagemLData's SagemEZ method. The library checks if the data meets the specified rules and provides detailed validation errors if any.

## 🌟 Features

  **Custom Validation Rules:**
    Define and apply custom validation functions for specific data fields.

  **Built-in Validators:**
    Includes validators for common data types and formats such as strings, numbers, emails, etc.

  **Asynchronous Validation:** 
    Supports asynchronous validation for complex rules or external validations.

  **Flexible Configuration:**
    Configure validation rules using a simple syntax for maximum flexibility.
    
  **Error Handling:** 
    Provides detailed error messages for validation failures.

## 🤝 Contributing

Contributions to SagemLData are welcome! If you encounter bugs, have feature requests, or wish to contribute enhancements, please open an issue or submit a pull request on the [GitHub repository ](https://github.com/sprdgx/SagemLData).

## 📄 License

SagemLData is licensed under the MIT License.

Thank you for choosing SagemLData for your data validation needs! If you have any questions or need assistance, feel free to reach out. Happy validating! 🚀

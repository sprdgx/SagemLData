class SagemLData {
    constructor() {
      this.customValidations = {};
    }
  
    SagemLiThab(name, validationFunction) {
      this.customValidations[name] = validationFunction;
    }
  
    async SagemEZ(data, rules) {
      const errors = [];
  
      const SagemPos = async (fieldName, fieldValue, fieldRules) => {
        for (const ruleKey in fieldRules) {
          const ruleValue = fieldRules[ruleKey];
  
          switch (ruleKey) {
            case 'type':
              if (typeof fieldValue !== ruleValue) {
                errors.push(`Field '${fieldName}' must be of type '${ruleValue}'.`);
              }
              break;
            case 'minLength':
              if (fieldValue.length < ruleValue) {
                errors.push(`Field '${fieldName}' must have a minimum length of ${ruleValue}.`);
              }
              break;
            case 'maxLength':
              if (fieldValue.length > ruleValue) {
                errors.push(`Field '${fieldName}' must have a maximum length of ${ruleValue}.`);
              }
              break;
            case 'format':
              if (ruleValue === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(fieldValue)) {
                  errors.push(`Field '${fieldName}' must be a valid email.`);
                }
              } else if (ruleValue === 'phone') {
                const phoneRegex = /^\d{10}$/; // Example phone regex for 10-digit numbers
                if (!phoneRegex.test(fieldValue)) {
                  errors.push(`Field '${fieldName}' must be a valid phone number.`);
                }
              } else if (ruleValue === 'url') {
                const urlRegex = /^(http|https):\/\/[^ "]+$/; // Example URL regex
                if (!urlRegex.test(fieldValue)) {
                  errors.push(`Field '${fieldName}' must be a valid URL.`);
                }
              }
              // Add more format validations as needed
              break;
            case 'custom':
              if (this.customValidations[ruleValue]) {
                const isCustomValid = await this.customValidations[ruleValue](fieldValue);
                if (!isCustomValid) {
                  errors.push(`Field '${fieldName}' failed custom validation.`);
                }
              } else {
                errors.push(`Custom validation '${ruleValue}' not found.`);
              }
              break;
            // Add more validation rules as needed
            default:
              break;
          }
        }
      };
  
      const fieldValidationPromises = [];
  
      for (const fieldName in rules) {
        const fieldValue = data[fieldName];
        const fieldRules = rules[fieldName];
        const validationPromise = SagemPos(fieldName, fieldValue, fieldRules);
        fieldValidationPromises.push(validationPromise);
      }
  
      await Promise.all(fieldValidationPromises);
  
      return {
        isValid: errors.length === 0,
        errors: errors,
      };
    }
  
    validi(data, rules) {
      const validationResult = this.SagemEZ(data, rules);
      return validationResult;
    }
  }
  
  module.exports = SagemLData;
  
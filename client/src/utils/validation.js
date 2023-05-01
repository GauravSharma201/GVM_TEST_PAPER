function validate({name, age, email, department, phoneNumber}) {
    const errors = {};
  
    if (!name) {
      errors.name = "Name is required";
    }
  
    if (!age) {
      errors.age = "Age is required";
    }
  
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
  
    if (!department) {
      errors.department = "Department is required";
    }
  
    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]+$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone number must contain only digits";
    }
  
    return errors;
  }
  
  export default validate;

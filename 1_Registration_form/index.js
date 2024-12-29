        const passwordField = document.getElementById('password');
        const submitButton = document.querySelector('button[type="submit"]');
        const requirements = {
            length: /^[\s\S]{8,}$/,
            uppercase: /[A-Z]/,
            lowercase: /[a-z]/,
            number: /[0-9]/,
            special: /[!@#$%^&*(),.?":{}|<>]/
        };

        passwordField.addEventListener('input', function() {
            let isValid = true;
            
            // Check each requirement
            for (const requirement in requirements) {
                const element = document.getElementById(requirement);
                if (requirements[requirement].test(passwordField.value)) {
                    element.classList.remove('requirement');
                    console.log("valid")
                    element.classList.add('valid');
                } else {
                    element.classList.remove('valid');
                    element.classList.add('requirement');
                    isValid = false;
                }
            }

            // Enable submit button if all conditions are met
            submitButton.disabled = !isValid;
        });
       
        const confirmPasswordField=document.getElementById('confirmPassword')
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        confirmPasswordField.addEventListener('input', function() {
            if (passwordField.value !== confirmPasswordField.value) {
                confirmPasswordError.style.display = 'block';
                confirmPasswordError.style.color = 'red';
                confirmPasswordField.classList.add('is-invalid');
            } else {
                confirmPasswordError.style.display = 'none';
                confirmPasswordField.classList.remove('is-invalid');
            }
        });

        const fullName = document.getElementById('fullName');
    const fullNameError = document.getElementById('fullNameError');
    const fullNameRegex = /^[A-Za-z\s]+$/;
    if (!fullNameRegex.test(fullName.value)) {
        fullNameError.style.display = 'block';
        valid = false;
    } else {
        fullNameError.style.display = 'none';
    }

    // Date of Birth Validation: Check if valid date
    const dob = document.getElementById('dob');
    const dobError = document.getElementById('dobError');
    if (!dob.value) {
        dobError.style.display = 'block';
        valid = false;
    } else {
        dobError.style.display = 'none';
    }

    // Gender Validation: At least one gender option should be selected
    const gender = document.querySelector('input[name="gender"]:checked');
    const genderError = document.getElementById('genderError');
    if (!gender) {
        genderError.style.display = 'block';
        valid = false;
    } else {
        genderError.style.display = 'none';
    }

      // Email Validation: Check if valid email format
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email.value)) {
          emailError.style.display = 'block';
          valid = false;
      } else {
          emailError.style.display = 'none';
      }
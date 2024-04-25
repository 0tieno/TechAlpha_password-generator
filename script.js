function generatePassword() {
    const length = 12; // Change this value to change password length
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~"; // Define characters to include in the password
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    document.getElementById("password-display").textContent = password;
  }
  
  function clearPassword() {
    document.getElementById("password-display").textContent = "";
  }
  
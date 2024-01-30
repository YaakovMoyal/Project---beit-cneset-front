export const checkingValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const checkingValidPassword = (password: string) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/.test(
    password
  );

export const checkingValidPhone = (phone: string) =>
  /0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/.test(phone);

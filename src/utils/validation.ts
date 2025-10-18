export const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

export const validateDOB = (dob: string) =>
  /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/.test(dob);

export const convertDOBToISO = (dob: string) => {
  const [day, month, year] = dob.split("/").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toISOString();
};

export const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = (password: string) =>
    password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password);
const validateText = (text: string, length: number): boolean => {
  return text && text.length > (length || 3);
};

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
);

const validateEmail = (email: string): boolean =>
  email && email.length && validEmailRegex.test(email);

export const ValidateType = {
  TEXT: 'TEXT',
  EMAIL: 'EMAIL',
};

export const validate = (type: string): Function => {
  switch (type) {
    case ValidateType.TEXT:
      return validateText;
    case ValidateType.EMAIL: {
      return validateEmail;
    }
  }
};

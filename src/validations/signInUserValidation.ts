import userSignInSchema from './signInUserSchema';

interface UserInfo {
  USERNAME: string,
  VOCATION: string,
  LEVEL: number,
  PASSWORD: string,
}

type RequestValidations = 'USERNAME' |
'VOCATION' |
'LEVEL' |
'PASSWORD' |
'NOT_STRING' |
'NOT_NUMBER' |
null;

interface ErrorMap {
  type: RequestValidations,
  message: string,
}

const validationMessages: { [key: string]: RequestValidations } = {
  USERNAME: 'USERNAME',
  VOCATION: 'VOCATION',
  LEVEL: 'LEVEL',
  PASSWORD: 'PASSWORD',
  NOT_STRING: 'NOT_STRING',
  NOT_NUMBER: 'NOT_NUMBER',
};

const typeError:string[] = ['NOT_STRING', 'NOT_NUMBER'];

function signIsUserValidation(userInfo: UserInfo): ErrorMap {
  const { error } = userSignInSchema.validate(userInfo);
  if (!error) return { type: null, message: '' };

  const validation = error.details[0].message;

  const type: RequestValidations | null = validationMessages[validation];

  let message = '';

  if (type && typeError.includes(type)) {
    message = `A field is a ${type} when it should not`;
  } else {
    message = `${type} field is missing`;
  }
  return { type, message };
}

export default signIsUserValidation;
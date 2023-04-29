import Joi from 'joi';

const userSignInSchema = Joi.object({
  username: Joi.string().min(1).required().messages({
    'any.required': 'USERNAME',
    'string.base': 'NOT_STRING',
  }),
  vocation: Joi.string().min(1).required().messages({
    'any.required': 'VOCATION',
    'string.base': 'NOT_STRING',
  }),
  level: Joi.number().integer().required().options({ convert: false })
    .messages({
      'any.required': 'LEVEL',
      'number.base': 'NOT_NUMBER',
      'number.integer': 'NOT_NUMBER',
    }),
  password: Joi.string().min(1).required().messages({
    'any.required': 'PASSWORD',
    'string.base': 'NOT_STRING',
  }),
});

export default userSignInSchema;
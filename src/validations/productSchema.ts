import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(1).required().messages({
    'any.required': 'NAME',
    'string.base': 'NOT_STRING',
  }),
  amount: Joi.string().min(1).required().messages({
    'any.required': 'AMOUNT',
    'string.base': 'NOT_STRING',
  }),
});

export default productSchema;
import productSchema from './productSchema';

function productValidation(name: string, amount: string) {
  const { error } = productSchema.validate({ name, amount });
  if (!error) return { type: null, message: '' };
  const validation = error.details[0].message;

  switch (validation) {
    case 'NAME':
      return { type: 'NAME', message: 'Name field missing' };
    case 'AMOUNT':
      return { type: 'AMOUNT', message: 'Amount field missing' };
    case 'NOT_STRING':
      return { type: 'NOT_STRING', message: 'Both Name and Amount fields should be strings' };
    default:
      return { type: null, message: '' };
  }
}

export default productValidation;
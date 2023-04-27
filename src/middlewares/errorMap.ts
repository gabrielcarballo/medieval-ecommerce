interface ErrorType {
  [key: string]: number,
}

const errorHash:ErrorType = {
  NAME: 400,
  NOT_STRING: 400,
  AMOUNT: 400,
};

const errorMap = (type:string):number => errorHash[type] || 500;

export default errorMap;
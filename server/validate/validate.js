const yup = require('yup');
const lodash = require('lodash')

module.exports = (schema) => async (req, res, next) => {
  const initialSchemaInput = lodash.pick(req.query, schema._nodes)

  try {
    const validateSchemaInput = await schema.validate(initialSchemaInput);
    req.validateSchemaInput = validateSchemaInput;
    return next();
  } catch (error) {
    return next(error);
  }
};

const yup = require('yup');
const lodash = require('lodash')

// placeholder
exports.validate = (schema) => async (req, res, next) => {

  const method = req.method.toLowerCase();

  if (method == 'get') {
    initialSchemaInput = lodash.pick(req.query, schema._nodes);
  } else if (method == 'post') {
    initialSchemaInput = lodash.pick(req.body, schema2._nodes);
  };

  try {
    const validateSchemaInput = await schema.validate(initialSchemaInput);
    req.validateSchemaInput = validateSchemaInput;
    return next();
  } catch (error) {
    return next(error);
  }
};

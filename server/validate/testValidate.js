const yup = require('yup')

// Placeholder
const schema1 = yup.object().shape({
  schema1Field1: yup.number().integer()
                  .min(1)
                  .max(100)
                  .required(),
  schema1Field2: yup.number().integer()
                  .min(1)
                  .max(100)
                  .required()
});

// Placeholder
const schema2 = yup.object().shape({
  schema2Field1: yup.number().integer()
                  .min(100)
                  .max(200)
                  .required(),
  schema2Field2: yup.number().integer()
                  .min(100)
                  .max(200)
                  .required()
});


// Placeholder
module.exports.schema1 = schema1;
module.exports.schema2 = schema2;

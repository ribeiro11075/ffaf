const yup = require('yup')

// placeholder
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

// placeholder
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

// placeholder
const schema3 = yup.object().shape({
  schema3Field1: yup.number().integer()
                  .min(200)
                  .max(300)
                  .required(),
  schema3Field2: yup.number().integer()
                  .min(200)
                  .max(300)
                  .required()
});

// Placeholder
module.exports.schema1 = schema1;
module.exports.schema2 = schema2;
module.exports.schema3 = schema3;

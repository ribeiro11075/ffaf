const yup = require('yup')

// placeholder
exports.schema1 = yup.object().shape({
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
exports.schema2 = yup.object().shape({
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
exports.schema3 = yup.object().shape({
  schema3Field1: yup.number().integer()
                  .min(200)
                  .max(300)
                  .required(),
  schema3Field2: yup.number().integer()
                  .min(200)
                  .max(300)
                  .required()
});

import joi from "joi";

let options = ['Il', 'Do'];
const createUserSchema = joi.object({
  tienda: joi.string().valid(...options).required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().required(),
  gender: joi.boolean().default(true).required(),
  password: joi.string().required(),
  wishList: joi.array().items(
    joi.object({
      date: joi.date(),
      place: joi.string(),
      capsule: joi.string(),
      price: joi.number(),
    })
  ),
  cart: joi.array().items(
    joi.object({
      date: joi.date(),
      place: joi.string(),
      capsule: joi.string(),
      price: joi.number(),
    })
  ),
});

export default async (req, res, next) => {
  try {
    // Validación
    await createUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};
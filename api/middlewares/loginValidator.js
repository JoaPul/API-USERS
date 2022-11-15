import joi from 'joi';

const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación en login',
      error,
    });
  }
};
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import config from "../config/index.js";

//GET
const getUsers = async (_, res) => {
  try {
    const users = await User(find);
    return res.json({
      msg: 'Aquí estan todos los Usuarios',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'En getUsers',
      error
    })
  }
};

const login = async (req, res) => {
  //? encontrar email
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        msg: 'Usuario no encontrado'
      });
    }

    //? crear token y regresarlo
    const passCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!passCorrect) {
      return res.status(401).json({
        msg: 'Credenciales inválidas',
      });
    }

    const payload = {
      userId: user.id,
      userRole: user.role
    }

    const token = jwt.encode(payload, config.jwt.secret);

    return res.json({
      msg: 'Credenciales Correctas',
      data: { token },
    })
  } catch (error) {
    return res.status(400).json({
      msg: 'Error en login',
      error,
    });
  }
};
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const api = express();
api.use(express.json());

// PRUEBA DE CONECCIÓN
api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  })
});

api.use(userRoutes);

export default api;

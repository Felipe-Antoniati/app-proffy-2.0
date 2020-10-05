require("dotenv-safe").config();
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  
  // Busque o token JWT do cabeçalho
  const token = <string>req.headers["auth"];
  let jwtPayload
  
  // Tente validar o token e obter os dados
  try {
    const jwtPayload = <string>jwt.verify(token, <string>process.env.SECRET);
    res.locals.jwtPayload = jwtPayload;

    
  } catch (error) {
    // Se o token não for válido, responda com 401 (não autorizado)
    res.status(401).send();
    return;
  }

  // O token é válido por 1 hora
  // Envie um novo token a cada solicitação
  const { userId, username }: any = jwtPayload;
  const newToken = jwt.sign({ userId, username }, 
      <any>process.env.SECRET, {
    expiresIn: "1h"
  });
  res.setHeader("token", newToken);

  //Chame o próximo middleware ou controller
  next();
};
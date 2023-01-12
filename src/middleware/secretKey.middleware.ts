import { NextFunction, Request, Response } from "express";

export function secretKey(req: Request, res: Response, next: NextFunction) {
  const secretKey = req.body.secretKey;
  if (secretKey === process.env.SECRET_KEY) {
    next();
  } else {
    res.status(401).send({
      message: "Vous devez avoir la clé secrète pour jouer à ce jeu",
    });
  }
}

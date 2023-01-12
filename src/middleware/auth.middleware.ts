import { Request, Response, NextFunction } from "express";
import { validateJwt } from "src/utils/jwt.utils";

export function authorize(req: Request, res: Response, next: NextFunction) {
  var token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(401).send({
      message: "Vous devez être connecté pour accéder à cette ressource",
    });
  } else {
    if (token.toLowerCase().startsWith("bearer")) {
      token = token.slice("bearer".length).trim();
    }

    validateJwt(token)
      .then((user) => {
        // utiliser pour passer le user aux autres middlewares/fonctions
        res.locals.user = user;
        next();
      })
      .catch((err) => {
        res.status(401).send({
          message: "Vous devez être connecté pour accéder à cette ressource",
        });
      });
  }
}

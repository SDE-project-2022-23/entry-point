import axios from "axios";
import { NextFunction, Request, Response } from "express";

export function authorize(req: Request, res: Response, next: NextFunction) {
  var token = req.headers.authorization;

  if (!token) {
    res.status(401).send({
      message: "Access denied",
    });
  } else {
    const bearer = token.split(" ")[1];
    axios
      .post(`${process.env.AUTH_API}/user/auth`, { token: bearer })
      .then((response) => {
        res.locals.user = response.data.user;
        next();
      })
      .catch((err) => {
        res.status(401).json({
          message: "access denied",
        });
      });
  }
}

import axios from "axios";
import { Request, Response, Router } from "express";

const loginRouter = Router();

const login = async (req: Request, res: Response) => {
  axios
    .post(`${process.env.AUTH_API}/login`, req.body)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(401).send({
        message: "password or login incorrect",
      });
    });
};

loginRouter.post("/", login);

export default loginRouter;

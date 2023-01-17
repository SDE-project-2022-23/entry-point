import { Router, RequestHandler } from "express";
import { TokenRequest } from "@type/User";
import { UserService } from "@services/user.service";
import axios from "axios";

const userRouter = Router();

const createUser: RequestHandler = async (req, res, next) => {
  const userRequest: TokenRequest = req.body;

  // creation de l'utilisateur
  // UserService.createUser(userRequest)
  //   .then((userAdded) => {
  //     res.status(200).json({ user: userAdded });
  //   })
  //   .catch(next);
  axios
    .post(`${process.env.AUTH_API}/user`, userRequest)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(401).send({
        message: "login already exist",
      });
    });
};

userRouter.post("/", createUser);

export default userRouter;

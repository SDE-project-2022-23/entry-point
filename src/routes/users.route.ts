import { Router, RequestHandler } from "express";
import { TokenRequest } from "@type/User";
import { UserService } from "@services/user.service";
import { authorize } from "src/middleware/auth.middleware";
import { secretKey } from "src/middleware/secretKey.middleware";

const userRouter = Router();

const createUser: RequestHandler = async (req, res, next) => {
  const userRequest: TokenRequest = req.body;

  // creation de l'utilisateur
  UserService.createUser(userRequest)
    .then((userAdded) => {
      res.status(200).json({ user: userAdded });
    })
    .catch(next);
};

const getUsers: RequestHandler = async (req, res, next) => {
  UserService.getUsers()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch(next);
};

const getOneUser: RequestHandler = async (req, res, next) => {
  const id = req.params.id;
  UserService.getUserById(id)
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch(next);
};

userRouter.post("/", secretKey, createUser);
userRouter.get("/:id", authorize, getOneUser);
userRouter.get("/", authorize, getUsers);

export default userRouter;

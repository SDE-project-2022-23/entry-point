import { Router } from "express";
import loginRouter from "./login.route";
import userRouter from "./users.route";
import * as Auth from "../middleware/auth.middleware";

/**
 * Routeur global de l'application. Utilise les routeurs des ressources.
 */
const globalRouter = Router();

globalRouter.use("/login", loginRouter);
// Pas encore implémenté car dans le front on peut demander à l'utilisateur de se connecter
// globalRouter.use("/token", tokenRouter);
globalRouter.use("/users", userRouter);
// globalRouter.use("/tentatives", tentativeRouter);
globalRouter.route("/test").get(Auth.authorize, (req, res) => {
  res.status(200).json({ message: "Vous êtes connecté" });
});

export default globalRouter;

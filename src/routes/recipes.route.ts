import axios from "axios";
import { Request, Response, Router } from "express";
import { authorize } from "src/middleware/auth.middleware";

const recipesRouter = Router();

const getRandRecipes = async (req: Request, res: Response) => {
  axios.get(`${process.env.RECIPES_API}/recipes/random`).then((response) => {
    res.status(200).json(response.data);
  });
};

recipesRouter.get("/random", authorize, getRandRecipes);

export default recipesRouter;

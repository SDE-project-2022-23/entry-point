import axios from "axios";
import { Request, Response, Router } from "express";

const recipesRouter = Router();

const getRandRecipes = async (req: Request, res: Response) => {
  axios.get(`${process.env.RECIPES_API}/recipes/random`).then((response) => {
    res.status(200).json(response.data);
  });
};

recipesRouter.get("/random", getRandRecipes);

export default recipesRouter;

import axios from "axios";
import { Request, Response, Router } from "express";
import { authorize } from "src/middleware/auth.middleware";

const recipesRouter = Router();

const getRandRecipes = async (req: Request, res: Response) => {
  axios.get(`${process.env.RECIPES_API}/recipes/random`).then((response) => {
    res.status(200).json(response.data);
  });
};

const getCaloriesSum = async (req: Request, res: Response) => {
  axios
    .post(`${process.env.INGREDIENTS_API}/ingredients`, req.body)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

recipesRouter.get("/random", authorize, getRandRecipes);
recipesRouter.post("/calories", getCaloriesSum);

export default recipesRouter;

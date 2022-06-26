import { Router } from "express";
import { getAllPlayers, getPlayerImage } from "../controllers/players.controller";
const router = Router();
//Players
router.get('/players',getAllPlayers);
router.get('/playerImage/:s3Id',getPlayerImage);



export default router;
import { Router } from "express";
import { addTournament, getCategories, getPageCount, getTournaments } from "../controller/tournaments.controller";
import { createUser, login, recoverPassword, resetPassword } from '../controller/user.Controller';
import { getAllPlayers,getPlayerTourneys ,getPlayerImage, topPlayersCategory, amountOfLadderByCategory} from '../controller/players.controller';
import playerSchema from '../schema/player.schema';
import { validateSchema } from '../middlewares/validate.schema';
import { checkAuth } from '../middlewares/auth';

const router = Router();

//Players
router.get('/players',getAllPlayers);
router.get('/playerTourneys/:licenseNumber',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);
router.get('/topPlayersCategory', topPlayersCategory);
router.get('/amountOfPages', amountOfLadderByCategory);

//Tournaments
router.post('/tournaments',addTournament);

// users
router.post('/createUser', validateSchema(playerSchema), createUser)
router.post('/login', login)
router.post('/recoverPassword', recoverPassword)
router.post('/resetPassword', resetPassword)

// router.post('/changePassword', [checkAuth], changePassword)

// Tourneys
router.get('/categories', getCategories);
router.get('/getTournaments', getTournaments);
router.get('/getTournamentPages', getPageCount);

export default router;
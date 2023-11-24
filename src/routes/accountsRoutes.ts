import { Router } from 'express';
import accountsController from '../controllers/accountsController';

const router = Router();

// Ruta para obtener todas las cuentas
router.get('/accounts', accountsController.getAllAccounts);

export default router;

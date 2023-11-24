import { Request, Response } from 'express';
import Account from '../models/accountModel';

const getAllAccounts = async (req: Request, res: Response): Promise<void> => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las cuentas' });
  }
};

export default {
  getAllAccounts,
};

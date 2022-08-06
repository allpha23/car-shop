import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }
}
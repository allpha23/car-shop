import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Request, Response } from 'express';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { carMock, carMockWithId, allCarMock } from '../../mocks/carMock';

describe('Car Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(allCarMock);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res)
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create Car', () => {
    it('Succes', async () => {
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  })

  describe('Read Car', () => {
    it('Succes', async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allCarMock)).to.be.true;
    });
  })

  describe('ReadOne Car', () => {
    it('Succes', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  })
});
import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId, allCarMock } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(allCarMock);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create a car', () => {
    it('Succesfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  })

  describe('Searching all cars', () => {
    it('Succesfully found all cars', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal(allCarMock);
    });
  })

  describe('Searching a car', () => {
    it('Succesfully found', async () => {
      const cars = await carModel.readOne(carMockWithId._id);
      expect(cars).to.be.deep.equal(carMockWithId);
    });
  })
});
import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

const carMockWithId: ICar & { _id: string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const allCarMock: ICar[] & { _id: string }[] = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: "62ee09fe5ad84407c9741c7a",
    model: "Lamborghini",
    year: 1963,
    color: "black",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
];

export {
  carMock,
  carMockWithId,
  allCarMock
};
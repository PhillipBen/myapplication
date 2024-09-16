import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 18455,
  login: 'Q@sC082e\\Pn',
};

export const sampleWithPartialData: IUser = {
  id: 3566,
  login: 'OBH07m',
};

export const sampleWithFullData: IUser = {
  id: 17520,
  login: 'cyq-',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

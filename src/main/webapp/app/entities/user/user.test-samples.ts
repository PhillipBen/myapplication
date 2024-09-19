import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 9430,
  login: 'NM',
};

export const sampleWithPartialData: IUser = {
  id: 4898,
  login: 'hTJ',
};

export const sampleWithFullData: IUser = {
  id: 18358,
  login: '4C3',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

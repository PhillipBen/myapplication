import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '99041a81-8b6a-407c-80eb-39ccc50d152a',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c78019b2-1cb5-4342-897c-9ba237bb0bbb',
};

export const sampleWithFullData: IAuthority = {
  name: 'f7280639-26d2-4678-8890-b91f1995f99c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

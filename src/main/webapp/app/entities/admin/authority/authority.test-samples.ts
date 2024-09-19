import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '81faedd8-7f54-4b7b-bd93-c743fe476720',
};

export const sampleWithPartialData: IAuthority = {
  name: '775af4e7-6e1c-406d-8253-99d976ee0e8f',
};

export const sampleWithFullData: IAuthority = {
  name: 'f36e8c42-98db-412f-a295-4595ce4ea7a9',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { Information } from './InfoTypes';

export type InformationsState = {
  informations: Information[];
  error: string | undefined;
};
export type InformationsAboutState = {
  information: Information[];
  error: string | undefined;
};

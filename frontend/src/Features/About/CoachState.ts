import { Coach } from './CoachType';

export type CoachState = {
  coaches: Coach[];
  error?: string | undefined;
};

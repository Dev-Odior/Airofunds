import { crowdFunding } from "./details/crowdFunding";
import { agricultural } from "./details/agricultural";
import { project } from "./details/projects";
import { restaurant } from "./details/restaurant";
import { transportation } from "./details/transportation";
import { donations } from "./details/donations";
import { mortgages } from "./details/mortgage";

export const servicesProductContent = [
  { ...crowdFunding },
  { ...agricultural },
  { ...project },
  { ...restaurant },
  { ...transportation },
  { ...donations },
  { ...mortgages },
];

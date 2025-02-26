import {Status} from "../enums/Status.enum";
import {Type} from "../enums/Type.enum";

export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

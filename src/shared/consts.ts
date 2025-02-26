import {Status} from "../types/enums/Status.enum";
import {Type} from "../types/enums/Type.enum";

export const statusOrderASC = [Status.ONLINE, Status.PAUSED, Status.STOPPED, Status.DRAFT];
export const statusOrderDESC = [Status.DRAFT, Status.STOPPED, Status.PAUSED, Status.ONLINE];
export const URL_TO_COLOR_MAP = new Map<string, string>([
  ['https://market.company.com', 'rgb(225, 65, 101)'],
  ['https://www.delivery.company.com', 'rgb(194, 194, 255)'],
  ['http://games.company.com', 'rgb(134, 134, 255)'],
]);
export const STATUS_TO_COLOR_MAP = {
  ONLINE: 'rgb(27, 218, 157)',
  DRAFT: 'rgb(92, 92, 92)',
  STOPPED: 'rgb(254, 72, 72)',
  PAUSED: 'rgb(255, 131, 70)',
};

export const formatTestStatus = (status: Status) => {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};
export const formatTestType = (type: Type) => {
  switch (type) {
    case Type.CLASSIC:
      return 'Classic';
    case Type.MVT:
      return 'MVT';
    case Type.SERVER_SIDE:
      return 'Server-side';
    default:
      return type;
  }
};
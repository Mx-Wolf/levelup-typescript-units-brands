import { Kettle } from './i-face-smart-kettle';

export interface ControlPanel{
  getKettle:()=>Kettle
}

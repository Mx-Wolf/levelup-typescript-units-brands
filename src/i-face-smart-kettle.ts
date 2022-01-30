import { Celsius } from './i-face-brand-c';

export interface Kettle{
  keepTemperature: (target: Celsius)=>void;
  getWater:()=>Celsius;
}

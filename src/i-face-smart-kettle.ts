export interface Kettle{
  keepTemperature: (target: number)=>void;
  getWater:()=>number;
}

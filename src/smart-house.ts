import { Celsius, makeCelsius } from './i-face-brand-c';
import { ControlPanel } from './i-face-control-panel';

let targetTemperature: Celsius = makeCelsius(0);

export const controlPanel: ControlPanel = {
  getKettle: () => ({
    keepTemperature: (target) => { targetTemperature = target; },
    getWater: () => targetTemperature,
  }),
};


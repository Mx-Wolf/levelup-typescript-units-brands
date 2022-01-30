import { ControlPanel } from './i-face-control-panel';

let targetTemperature = 0;

export const controlPanel: ControlPanel = {
  getKettle: () => ({
    keepTemperature: (target) => { targetTemperature = target; },
    getWater: () => targetTemperature,
  }),
};


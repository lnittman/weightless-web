import { atom } from 'recoil';

export const navigationMenuTriggerStyleState = atom({
  key: 'navigationMenuTriggerStyleState',
  default: null,
});

export const appModeState = atom({
  key: 'appModeState',
  default: 'visualizer',
});

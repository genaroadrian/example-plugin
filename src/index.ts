import { registerPlugin } from '@capacitor/core';

import type { EyenetNetworkInfoPlugin } from './definitions';

const EyenetNetworkInfo = registerPlugin<EyenetNetworkInfoPlugin>('EyenetNetworkInfo', {
  web: () => import('./web').then(m => new m.EyenetNetworkInfoWeb()),
});

export * from './definitions';
export { EyenetNetworkInfo };

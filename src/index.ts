import { registerPlugin } from '@capacitor/core';

import type { EyenetNetworkInfo } from './definitions';

const EyenetNetworkInfo = registerPlugin<EyenetNetworkInfo>(
  'EyenetNetworkInfo',
  {
    web: () => import('./web').then(m => new m.EyenetNetworkInfoWeb()),
  },
);

export * from './definitions';
export { EyenetNetworkInfo };

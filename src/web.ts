import { WebPlugin } from '@capacitor/core';

import type { EyenetNetworkInfoPlugin } from './definitions';

export class EyenetNetworkInfoWeb
  extends WebPlugin
  implements EyenetNetworkInfoPlugin
{
  async echo(): Promise<{ value: string }> {
    console.log('ECHO', '');
    return { value: '' };
  }
}

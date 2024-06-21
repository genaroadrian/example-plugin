import { WebPlugin } from '@capacitor/core';

import type { EyenetNetworkInfo } from './definitions';

export class EyenetNetworkInfoWeb
  extends WebPlugin
  implements EyenetNetworkInfo
{
  async echo(): Promise<{ value: string }> {
    console.log('ECHO', '');
    return { value: '' };
  }
}

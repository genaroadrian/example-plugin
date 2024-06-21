import { WebPlugin } from '@capacitor/core';

import type { EyenetNetworkInfoPlugin } from './definitions';

export class EyenetNetworkInfoWeb extends WebPlugin implements EyenetNetworkInfoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

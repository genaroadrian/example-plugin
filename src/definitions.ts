export interface EyenetNetworkInfoPlugin {
  echo(): Promise<{ value: string }>;
}

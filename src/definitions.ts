export interface EyenetNetworkInfoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

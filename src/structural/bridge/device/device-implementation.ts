export interface DeviceImplementation {
  getName(): string;
  setPower(powerSatatus: boolean): void;
  getPower(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
}

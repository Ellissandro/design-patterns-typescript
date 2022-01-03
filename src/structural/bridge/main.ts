import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remove-control/remote-control';
import { RemoteControlWithVolume } from './remove-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); //20
  abstraction.volumeUp(); //30
  abstraction.volumeDown(); //20
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControl(tv);
clientCode(tvRemoteControl);

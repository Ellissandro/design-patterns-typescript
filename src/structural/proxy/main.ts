import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Elissandri', 'elissandroSilva');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAddresses());

  console.log('Isso va se repetir (Cache)');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();

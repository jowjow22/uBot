/* eslint-disable no-new */
import DiscordJS, { Client, Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

class UBot extends Client {
  public constructor() {
    super({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });
  }

  public async init(): Promise<void> {
    this.login(process.env.TOKEN);

    this.on('ready', () => {
      console.log("I'm ready!!");

      new WOKCommands(this, {
        commandsDir: path.join(__dirname, 'Commands'),
        typeScript: true,
        testServers: ['788060366755201055'],
      }).setDefaultPrefix('$');
    });
  }
}

const ubot = new UBot();

ubot.init();

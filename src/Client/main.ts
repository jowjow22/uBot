import { Client, Intents } from 'discord.js';
import ConfigJson from '../config.json';
import IConfig from '../Interfaces/Config';

class UBot extends Client {
  public config: IConfig = ConfigJson;

  public constructor() {
    super({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });
  }

  public async init(): Promise<void> {
    this.login(this.config.token);

    this.on('ready', () => {
      console.log("I'm ready!!");
    });

    this.on('messageCreate', message => {
      if (message.content === 'ping') {
        if (this.ws.ping <= 150) {
          message.reply({
            content: String(
              `Your actual ping is: ${this.ws.ping} :green_circle:`,
            ),
          });
        } else if (this.ws.ping > 150 && this.ws.ping <= 260) {
          message.reply({
            content: String(
              `Your actual ping is: ${this.ws.ping} :yellow_circle:`,
            ),
          });
        } else {
          message.reply({
            content: String(
              `Your actual ping is: ${this.ws.ping} :red_circle:`,
            ),
          });
        }
      }
    });
  }
}

export default UBot;

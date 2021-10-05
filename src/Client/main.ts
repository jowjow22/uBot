import { Client, Intents } from 'discord.js';
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

import { ICommand } from 'wokcommands';

export default {
  category: 'Testing',
  description: 'Replies with your actual ping and a safe flag',

  slash: 'both',
  testOnly: true,

  callback: ({ client }) => {
    if (client.ws.ping <= 150) {
      return `Your actual ping is: ${client.ws.ping} :green_circle:`;
    }
    if (client.ws.ping > 150 && client.ws.ping <= 260) {
      return `Your actual ping is: ${client.ws.ping} :yellow_circle:`;
    }
    return `Your actual ping is: ${client.ws.ping} :red_circle:`;
  },
} as ICommand;

import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
  category: 'Testing',
  description: 'Prefix command for other commands',

  testOnly: true,

  callback: ({ message, client }) => {
    const embedMessage = new MessageEmbed()
      .setDescription('Hello World')
      .setTitle('Title')
      .setColor('RED')
      .setAuthor('uBot')
      .setFooter('Footer')
      .setFields([
        {
          name: 'name',
          value: 'value',
        },
        {
          name: 'name 2',
          value: 'value 2',
        },
      ])
      .addField('name 3', 'value 3');
  },
} as ICommand;

import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
  category: 'Testing',
  description: 'Sends an embed',

  permissions: ['ADMINISTRATOR'],

  callback: ({ message, text }) => {
    const embed = new MessageEmbed()
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

    return embed;
  },
} as ICommand;

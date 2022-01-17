import { MessageEmbed } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
  category: 'Testing',
  description: 'Show Profile command',

  testOnly: true,
  // permissions: ['ADMINISTRATOR'],
  callback: ({ message, client, args }) => {
    const embedMessage = new MessageEmbed()
      .setTitle(`Perfil de Jonathan`)
      .setDescription(
        'Desenvolvedor front-end na Juntos Somos Mais 💙. \n Estudante de Ciência da Computação na UTFPR e me aventurando entre as tecnologias de front-end e back-end.',
      )
      .setColor('RED')
      .setAuthor('uBot')
      .setFields([
        {
          name: 'Github 🐙:',
          value: 'https://github.com/jowjow22',
        },
        {
          name: 'Linkedin 🟦:',
          value: 'https://www.linkedin.com/in/jonathan-santos-453a641b4/',
        },
      ])
      .setImage(
        'https://media-exp1.licdn.com/dms/image/C5616AQEM8dDxJslPzQ/profile-displaybackgroundimage-shrink_200_800/0/1641581850094?e=1648080000&v=beta&t=_B15nHq05wigzJ1b09WUu2xuKqa9VmNDfGv2eFQIZlg',
      )
      .setThumbnail('https://avatars.githubusercontent.com/u/51102351?v=4')
      .setFooter(
        'Another random footer message',
        'https://play-lh.googleusercontent.com/9fwWl4lRiLDR0fyMB4zYuC67VQZ4NJEVqd2Gnzf7lp8jmKlIjKKU9b1bAgEtpnhSy8E',
      );
    return embedMessage;
  },
} as ICommand;

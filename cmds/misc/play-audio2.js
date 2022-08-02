const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'queisso',
      group: 'misc',
      memberName: 'queisso',
      description: 'Plays some audio',
    })
  }

  async run(message) {
    const { voice } = message.member

    if (!voice.channelID) {
      message.reply('É preciso estar em um canal de voz para utilizar este comando')
      return
    }

    voice.channel.join().then((connection) => {
      connection.play(path.join(__dirname, 'queisso.m4a'))
    })
  }
}
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ping",
    aliases: ["p"],
    description: "test command",
    userPermissions: ['SendMessages'],
    botPermissions: ['ViewChannel'],
    run: async (client, message, args) => {
        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`🏓 Pong! ${client.ws.ping}ms.`)
                    .setColor("Green")
            ]
        })
    }
}
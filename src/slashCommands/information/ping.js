const { EmbedBuilder} = require('discord.js');

module.exports = {
    name : 'ping',
    description : 'Pong',
    run : async(client, interaction, args) => {
        interaction.reply({
            embeds : [
                new EmbedBuilder()
                .setDescription(`🏓 ${client.ws.ping}ms!`)
                .setColor('Green')
            ]
        })
    }
}
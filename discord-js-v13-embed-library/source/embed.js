var fs = require('fs');
const yaml = require('js-yaml');
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('your commands description here'),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your embeds name here')
            .setDescription('Your embeds description here')
            .addFields(
                { name: "fields name here", value: "fields value here", inline: true }, // inline: true OR false
                { name: `fields name here`, value: 'fields value here', inline: false }, // inline: true OR false
                { name: 'fields name here', value: `fields value here` },
            )
            .setFooter('your embeds footer here')
            .setTimestamp();
        return interaction.reply({embeds: [embed] });
    },
};
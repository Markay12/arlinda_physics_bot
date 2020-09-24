const Discord = require('discord.js-commando');

class DiceRollCommand extends Discord.Command {

    constructor(client){
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a dice',
            examples: '$roll'

        });


    }

    async run(message, args){

        //choose random number between 1 and 6 then return to user
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("The number that you rolled was a --> " + roll);

    }


}

module.exports = DiceRollCommand;
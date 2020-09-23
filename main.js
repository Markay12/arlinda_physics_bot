// create constant to contact with Discord servers
const Discord = require('discord.js-commando');
//create our own discord client
const client = new Discord.Client();


const token = "NzU4MDEyMjQwNDk3NzM3ODIy.X2ov6Q.iH6DklyvwBOZcu16Cn-WiXyhfXE";

const PREFIX = '$'; //prefix to ask command

var version = '0.0.1'; //version name

/*
const newUser = new Discord.Collection();

const listUsers = new Discord.Collection();
*/

//log to terminal when on

client.on('ready',  () => {

    console.log(`Logged in as ${client.user.tag}!`);

});

/*

//welcome message for new users to the server
client.on("guildMemberAdd", (member) =>{  // adds user name to server
    newUser.set(member.id, member.user);
    listUsers.set(member.id, member.user);
    const guild = member.guild;
    const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));

    if (newUser.size > 0) { //change to 9 when we start getting more people
        const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
        const userlist = newUser.map(u => u.toString()).join(" ");
        defaultChannel.send("Welcome our new user!: " + userlist);
        newUser.clear();
    }

    if(listUsers > 4){
        const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
        const thisUserList = newUser.map(u => u.toString()).join(" ");
        defaultChannel.send("Welcome to our new users:\n" + thisUserList);
        listUsers.clear();
    }
});

client.on("guildMemberRemove", (member) =>{
    if(newUsers.has(member.id)) newUsers.delete(member.id);
});


//implement prefix at the beginning of a statement
/*
client.on('message', (message) =>{


    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){  // args[0] means first word after the prefix, what to do after the '$'  '$ping' -- ping is the first argument

        case 'ping':
            message.channel.sendMessage('pong'); //message.channel.sendMessage(''); -- responds to the channel rather than the person
            break;

        case 'rick':
            message.channel.sendMessage('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); //get rick rolled
            break;

        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version + ' -  Developed by Markay#5500');
            } else {
                message.channel.sendMessage('ERROR: Invalid argument');
            }
            break;

        case 'roles':

            message.channel.sendMessage("Main Roles Inlclude:\nHuge Cock\nServer Booster\nNotes Man\nMight be a TA?\nWell Endowed Individuals\nRead Karl Marx once in freshman year\nBots\nOnline");


            break;

        
        case 'help':
            if(args[1] === '--all'){
		message.channel.sendMessage("Help still in development");
                break;
                
            }


	case 'random':
            message.channel.sendMessage("Your number is: " + Math.floor(Math.random() * 11)+1); // returns a random integer from 0 to 10 // random number between 1 and 10
            console.log('Random was used and gave the #');
            break;

        case 'porn':

		if(message.channel.id === '758007006886887465'){ //gates-of-autism chat for new members

            	 	var num = (Math.floor(Math.random() * 10));

              		var pornLinks = ["http://cdn.pichunter.com/369/4/3694883/3694883_13_p.jpg", "https://img.pornpics.com/2019-07-14/598579_20.jpg", "http://cdn.nakedpornpics.com/2019-09-26/629696_08.jpg", "http://cdn1.teengirlsporn.com/fe/1/fe102daaf.jpg", "http://cdn1.picspussy.com/ea/d/ead8534a8.jpg", "https://www.totally-naked-girls.com/wp-content/uploads/sites/120/2015/12/totallynakedgirls-fiona-ftvgirls.jpg", "https://i.pinimg.com/736x/13/2b/30/132b3016fa6965fcbf744173601a5f0b--sexy-girls.jpg", "http://image.wowerotica.com/st/thumbs/504/GH9p4ISRNI.jpg", "http://www.hotgirlsnaked.org/wp-content/uploads/2018/11/naked-blonde-girl.jpg", "http://www.nudeteens.net/wp-content/uploads/2012/06/teen-hottie-nude.jpg"];

            		message.channel.sendMessage(pornLinks[num]);
            		console.log('Someone used the porn command with image #: ' + num);
        
        		break;
		} else { break; }


        
        case '1216681349':
            message.channel.bulkDelete(100);
            console.log('ultraclear has been used');
            
            break;
        
            
        case 'advice':

		if(!args[1] == "grug" || !args[1] == "Grug"){

			message.channel.sendMessage("1: Here’s a word of advice for you: try not to reflect on your failures and regrets in life while you’re trying to jerk it. I know, it’s kinda obvious, but if you’re like me it can be hard sometimes. I like to choke the chicken the same way I like to sleep: on the bed, eyes closed, masturbating furiously to the idea of titties and traps galore.\n2: No lube, no mercy; the way life ought to be.\n3: Even so, it’s hard to enjoy such voluptuous things when a lifetime of failure and regret is trying to block the view.\n4: What’s a man to do? Little Richard’s still up and ready, the giz rag’s good to go, yet here I am looking back at the uninterrupted stream of missed opportunities, squandered resources, and easily-avoided catastrophes that I have made my life into. The wank’s been ruined, I feel more alone than ever, but the worst part is that I still need to bust a nut!\n5: Then, a moment of brilliance! I can jerk off to one of the gals that took part in my personal, unending comedy of errors! Maybe I could go for that gal who genuinely enjoyed my company until I got too… aggressive… in trying to bust out of the friend zone. Boy golly that’s still a painful memory! Like, physically painful. This would probably be easier if I was a masochist, but a man has to make do with the hand he’s got from day to day.\n6: Mayhaps one of my old teachers would work better, like that Jewish bird who watched me do the Hitler salute during the pledge of allegance. Nah, she’s a cunt with a face made of botox and the imitation of a human soul. Besides, I don’t regret doing that anyway.\n7: Maybe I could just get my mind off the whole buissness anyway. You know, write a lil story or something, make a few people laugh, then get back down to buissness. Yeah, that sounds about right.");

            break;
            
        } else { break; }

        case 'clear':

            if(!args[1]){ 
                return message.reply('Error: Please define the second arg'); // if command of the second arg doesn't exist, return find second message and delete the second word
            } else if (args[1] <= 5){
            message.channel.bulkDelete(args[1]);
            } else { message.reply("Sorry, too many. Try 5 or less"); }
            break;

        case "profile":
                var embed = new Discord.RichEmbed()
                .addField(message.author.username, "Roles: " + message.member.roles.map(role => role.name).join(", ")) // user, roles
                .setColor(0x00ffff)
                .setThumbnail(message.author.avatarURL)
                message.channel.sendEmbed(embed);
                console.log(message.author + ` Viewed their profile!`)
                break;

    }


}); // end of client message for basic commands

*/

// create registry to have separate class files for execution
client.registry.registerGroup('random', 'Random');
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('message', (message) => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case 'info':
            if(args[1] === 'version'){
                message.reply('Version ' + version + ' -  Developed by Markay#5500');
            } else {
                message.channel.send('ERROR: Invalid argument');
            }
            break; 

    }

    

});

/*
client.on('message', msg => {
    if (message.author.bot === )
}
*/

// logs the bot in using the token
// client.login(process.env.token);
client.login('NzU4MDEyMjQwNDk3NzM3ODIy.X2ov6Q.iH6DklyvwBOZcu16Cn-WiXyhfXE');

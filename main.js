const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("$")) {
        processCommand(receivedMessage)
    }
})

function advice(arguments, receivedMessage) {

    if (arguments == "grug")
    
    {
        receivedMessage.channel.send("1: Here’s a word of advice for you: try not to reflect on your failures and regrets in life while you’re trying to jerk it. I know, it’s kinda obvious, but if you’re like me it can be hard sometimes. I like to choke the chicken the same way I like to sleep: on the bed, eyes closed, masturbating furiously to the idea of titties and traps galore.\n2: No lube, no mercy; the way life ought to be.\n3: Even so, it’s hard to enjoy such voluptuous things when a lifetime of failure and regret is trying to block the view.\n4: What’s a man to do? Little Richard’s still up and ready, the giz rag’s good to go, yet here I am looking back at the uninterrupted stream of missed opportunities, squandered resources, and easily-avoided catastrophes that I have made my life into. The wank’s been ruined, I feel more alone than ever, but the worst part is that I still need to bust a nut!\n5: Then, a moment of brilliance! I can jerk off to one of the gals that took part in my personal, unending comedy of errors! Maybe I could go for that gal who genuinely enjoyed my company until I got too… aggressive… in trying to bust out of the friend zone. Boy golly that’s still a painful memory! Like, physically painful. This would probably be easier if I was a masochist, but a man has to make do with the hand he’s got from day to day.\n6: Mayhaps one of my old teachers would work better, like that Jewish bird who watched me do the Hitler salute during the pledge of allegance. Nah, she’s a cunt with a face made of botox and the imitation of a human soul. Besides, I don’t regret doing that anyway.\n7: Maybe I could just get my mind off the whole buissness anyway. You know, write a lil story or something, make a few people laugh, then get back down to buissness. Yeah, that sounds about right.")
    }

}

function links(receivedMessage) {

    receivedMessage.reply("Here are some helpful links for you!:\nCanvas --> https://canvas.asu.edu/courses/66449\nModules --> https://canvas.asu.edu/courses/66449/modules\n9:00AM Zoom --> https://asu.Zoom.us/j/99407721817\n10:30AM Zoom --> https://asu.Zoom.us/j/92175101069\nSection 71554 Recitation --> https://asu.Zoom.us/j/99908716470\nSection 71555 Recitation --> https://asu.Zoom.us/j/9085665264\n\nYoutube | Electric Field Physics Problems - Point Charges, Tension Force, Conductors, Square & Triangle\nhttps://www.youtube.com/watch?v=j6sDLnNuFW0\n")

}

function search(arguments, receivedMessage){

    if (arguments != "")
    {

        receivedMessage.channel.send("https://duckduckgo.com/?q=" + arguments.join("+"))

    }
    else
    {

        receivedMessage.reply("Hi there! Looks like you're not searching for anything. Try adding something after --> usage: $search [argument]")

    }

}

function youtube(arguments, receivedMessage){

    
    if (arguments == "general") { receivedMessage.channel.send("https://www.youtube.com") }
    else if (arguments != "")
    {
        receivedMessage.channel.send("https://www.youtube.com/results?search_query="+arguments.join("+"))

    }
    else
    {

        receivedMessage.reply("Hi there! Looks like you're not searching for anything. Try adding something after --> usage: $youtube [argument]")

    }

}

function help(arguments, receivedMessage){

    if (arguments == "commands"){

        receivedMessage.author.send("Hi there! My name is Farad and I'm here to help out with Physics131!\nHere are some of my basic commands!\n\n$multiply [number] [number]   --> You can multiply multiple numbers however, you cannot use this command without 2\n$advice grug  --> lists some great advice from user Grug Untermench#3336\n$search [<query>]  --> Use this to search anything without having to open a browser\n$links  --> This gives some helpful links for the class including Canvas, Zoom lecture and Recitation links\n$youtube [<topic>]  --> Gives link to any youtube search, use '$youtube' to just go to youtube.com\n\n\nIf you have any further questions or would like another command to be implemented contact Markay#5500")

    }
    else
    {

        receivedMessage.reply("Sorry dude. That is the wrong way to use me. Try using $help commands")

    }

}

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    
    if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)
    } else if (primaryCommand == "advice") {
        advice(arguments, receivedMessage)
    } else if (primaryCommand == "links") {
        links(receivedMessage)
    } else if (primaryCommand == "search") {
        search(arguments,receivedMessage)
    } else if (primaryCommand == "youtube") {
        youtube(arguments, receivedMessage)
    } else if (primaryCommand == "help") {
        help(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("I don't understand the command. Try `$help` or `$multiply`")
    }
}


function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `$multiply 2 4 10` or `$multiply 5.2 7`")
        return
    }
    let product = 1 
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.reply("The product of " + arguments + " multiplied together is: " + product.toString())
}


client.login(process.env.BOT_TOKEN);
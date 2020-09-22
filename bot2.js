console.log('The bot is starting')

var Twit = require ('twit');

var config  =  require('./config');
var T = new Twit(config);



setInterval(tweetIt, 1000*2)


tweetIt()

function tweetIt() {
        var r = Math.floor(Math.random()*10000);

         var tweet = {
             status: 'Aqui está um número aleatório ' + r +  ' #BotDoSpag'
         }
        
        T.post('statuses/update', tweet, tweeted);

        function tweeted(err, data, response) {
            if (err) {
                console.log("Deu errado pra caralho!");
            }else{
            console.log("Deu muito certo!");
        }
    }
}

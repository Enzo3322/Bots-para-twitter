console.log('The bot is starting')

var Twit = require ('twit');

var config  =  require('./config');
var T = new Twit(config);


var tweet = {
  status: 'Está funcionando!'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
      console.log("SOMENTING WENT WRONG!");
    }else{
    console.log("It worked!");
  }
}

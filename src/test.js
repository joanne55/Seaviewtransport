var mailgun = require("mailgun-js");
var api_key = 'key-df5aa806bf40626ca4a15c70077c6491';
var DOMAIN = 'sandboxc589e5cbd93f4aaba4406ad7bd4d9fac.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'jnjw55@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
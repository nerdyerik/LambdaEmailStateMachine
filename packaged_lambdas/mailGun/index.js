'use strict';
console.log('Loading function');

var request = require("request");

exports.handler = (event, context, callback) => {
	var options = { 
		method: 'POST',
  		url: 'https://api.mailgun.net/v3/axiom88.com/messages',
  		headers: {	 
     		'cache-control': 'no-cache',
     		authorization: 'Basic YXBpOmtleS1hZjFmZWJmODQyNTI0NWFjNWQyNzgwZWYzYWVmMTBlYg==',
     		'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
  		},
  		formData: { 
     		to: event.to,
     		from: event.from,
     		subject: event.subject,
     		text: event.strippedBody 
  		} 
	};
	
	request( options , function (error, response, body){
      	if( !error )
      	{
      		callback(null, "Sent e-mail to MailGun.")
      	}	 
      	else 
      	{
        	callback(null, 'Fail to send E-mail via MailGun! ' + response.statusCode)
        }
	})
};
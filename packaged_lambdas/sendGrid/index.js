'use strict';
console.log('Loading function');

var request = require("request");

exports.handler = (event, context, callback) => {
	var options = { 
		method: 'POST',
   	 	url: 'https://api.sendgrid.com/v3/mail/send',
    	headers: {
    		'Authorization': 'Bearer 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',
    		'Content-Type': 'application/json'
		},
		body: '{"personalizations": [{"to": [{"email": "' + event.to + '"}]}],"from": {"email": "' + event.from + '"},"subject": "' + event.subject + '","content": [{"type": "text/plain", "value": "' + event.strippedBody + '"}]}'
	};
	
	request( options , function (error, response, body){
      	if( !error )
      	{
      		callback(null, "Sent e-mail to SendGrid.")
      	}	 
      	else 
      	{
        	callback(null, 'Fail to send E-mail via SendGrid! ' + response.statusCode)
        }
	})
};
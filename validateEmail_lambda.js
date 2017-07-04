'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {

    var passed = validateEmail(event.to);
    
    if ( passed )
        callback(null, event);
    else
        callback("verification failed")
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
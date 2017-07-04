'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    event.strippedBody = event.body.replace(/<(?:.|\n)*?>/gm, '');
    callback(null, event);
};
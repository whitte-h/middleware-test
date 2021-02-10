'use strict';
    
const handler = require('../handler');

module.exports.handler = async (event, context) => {
  let end = false;
  context.end = () => end = true;

  const wrappedHandler = handler => prev => {
    if (end) return prev;
    context.prev = prev;
    return handler(event, context);
  };

  return Promise.resolve()
    .then(wrappedHandler(handler.hello.bind(handler)))
    .catch(wrappedHandler(handler.middleware.bind(handler)));
};
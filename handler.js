'use strict';

module.exports.hello = async (event) => {
  throw { msg: 'Just error' }
};

module.exports.middleware = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        payload: context.prev
      },
      null,
      2
    ),
  };
};

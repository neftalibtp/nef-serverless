'use strict';

const AWS = require('aws-sdk');
const stepfunctions = new AWS.StepFunctions();

exports.handler = (event, context, callback) => {
    
    const params = {
        stateMachineArn: 'arn:aws:states:us-east-2:047802695727:stateMachine:Helloworld',
        input: JSON.stringify(event)
    };
    
    stepfunctions.startExecution(params, (err, data) => {
      if (err)  {
          console.log(err);
          callback(null, err);
      } else {
          console.log(data);
          callback(null, event);
      }
    });
    
};
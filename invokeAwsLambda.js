let AWS = require("aws-sdk");
const lambda = new AWS.Lambda({ region: "eu-central-1" });

function invokeAwsLambda(params) {
  return new Promise((resolve, reject) => {
    lambda.invoke(params, (error, data) => {
      const { FunctionName } = params;
      console.log(
        `Invoking AWS Lambda: ${FunctionName}.Payload: `,
        params.Payload
      );
      if (error) {
        console.log(error, error.stack);
        reject(error);
      } else {
        try {
          console.log(`AWS Lambda: ${FunctionName} was triggered!`);
          resolve({
            status: data.StatusCode,
            payload: JSON.parse(data.Payload),
          });
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}

module.exports = invokeAwsLambda;

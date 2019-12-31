#!/usr/bin/env node
const exec = require('child_process').execSync;
const info = exec('node_modules/serverless/bin/serverless.js info -v', { encoding: 'utf8' });
const find = (fieldName) => info.match(`${fieldName}: (.*)`)[1];

const region = find('region');
const config = `export default {
  s3: {
    REGION: "${region}",
    BUCKET: "${find('AttachmentsBucketName')}"
  },
  apiGateway: {
    REGION: "${region}",
    URL: "${find('ServiceEndpoint')}"
  },
  cognito: {
    REGION: "${region}",
    USER_POOL_ID: "${find('UserPoolId')}",
    APP_CLIENT_ID: "${find('UserPoolClientId')}",
    IDENTITY_POOL_ID: "${find('IdentityPoolId')}"
  }
};`

console.log('\n========== scripts/deploy.sh ==========\n');
console.log(`S3_REACT_APP_BUCKET="${find('ReactAppBucketName')}"`)

console.log('\n========== src/config.js ==============\n');
console.log(config);
console.log('\n=======================================');

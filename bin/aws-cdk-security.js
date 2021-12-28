#!/usr/bin/env node

const cdk = require("aws-cdk-lib");
const { GuardDutyAccountStack } = require("../lib/stack");

// Construct our AWS CDK app.
const app = new cdk.App();

// Regions disabled in my account.
// 'af-south-1', 'ap-east-1', 'me-south-1', 'eu-south-1', 'ap-southeast-3'
const guardDutyRegions = [
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
  "ap-south-1",
  "ap-northeast-3",
  "ap-northeast-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-northeast-1",
  "ca-central-1",
  "eu-central-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "eu-north-1",
  "sa-east-1",
];
const stacks = guardDutyRegions.map(
  (region) =>
    new GuardDutyAccountStack(app, "OrgSecurity", {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: region,
      },
    })
);

// Synthesize the CloudFormation template.
app.synth();

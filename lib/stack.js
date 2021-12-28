const { Stack } = require("aws-cdk-lib");
const { CfnDetector } = require("aws-cdk-lib/aws-guardduty");

/**
 * Configures a GuardDuty detector.
 */
class GuardDutyAccountStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const detector = new CfnDetector(this, "Detector", {
      enable: true,
      dataSources: {
        s3Logs: {
          enable: false,
        },
      },
      findingPublishingFrequency: "ONE_HOUR",
    });
  }
}

module.exports = { GuardDutyAccountStack };

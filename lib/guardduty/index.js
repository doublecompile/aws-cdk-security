const { Construct } = require("constructs");
const { CfnOutput } = require("aws-cdk-lib");
const { CfnDetector } = require("aws-cdk-lib/aws-guardduty");

const DETECTOR = Symbol("detector");

/**
 * The setup for GuardDuty.
 */
class GuardDutySetup extends Construct {
  /**
   * @param {constructs.Construct} scope - The scope in which to define this construct.
   * @param {string} id - The scoped construct ID.
   * @param {Object} props - The properties.
   */
  constructor(scope, id, props = {}) {
    super(scope, id);

    const detector = new CfnDetector(this, "Detector", {
      enable: true,
      dataSources: {
        s3Logs: {
          enable: true,
        },
      },
      findingPublishingFrequency: "ONE_HOUR",
    });

    const output = new CfnOutput(this, "DetectorId", {
      value: detector.ref,
      description: "The GuardDuty detector ID in this region",
      exportName: "guardDutyDetectorId",
    });

    this[DETECTOR] = detector;
  }

  get detector() {
    return this[DETECTOR];
  }
}

module.exports = { GuardDutySetup };

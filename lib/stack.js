const { Stack } = require("aws-cdk-lib");
const { GuardDutySetup } = require("./guardduty");

/**
 * The whole stack for security accounts.
 */
class SecurityAccountStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const guardDutySetup = new GuardDutySetup(this, "GuardDuty", {});
  }
}

module.exports = { SecurityAccountStack };

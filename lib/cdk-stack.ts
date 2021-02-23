import * as cdk from "@aws-cdk/core";
import * as lambda_node from "@aws-cdk/aws-lambda-nodejs";

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda_node.NodejsFunction(this, "lambda", {
      entry: __dirname + "/lambda function/index.ts",
      handler: "handler",
    });
  }
}

# CDK Bug Report

When running "cdk synth" this code will not work.

The esbuildCommand in aws-lambda-nodejs returns
an un-escaped string, resulting in esbuild crashing because it expects multiple files.
A solution could be to either wrap "--bundle" and "--outfile" paths in single/double quotation, or by escaping spaces with /.

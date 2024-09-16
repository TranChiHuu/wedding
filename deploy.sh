#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Build the project
echo "Building the project..."
yarn build
echo "Build complete."

# Copy the build files to the S3 bucket
echo "Copying build files to S3..."
aws s3 sync dist s3://trinhhuu/ --profile michael
echo "Files copied to S3."

# Create a CloudFront invalidation
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id E1MC6EN7EN2PXN --paths '/*' --profile michael
echo "CloudFront invalidation complete."

echo "Deployment script finished successfully."

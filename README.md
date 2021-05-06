# Pyro Opengraph API

This API endpoint is responsible for providing information for URI's.
Endpoint is accessible at `https://og.pyrochat.app?url=[url]`

## Deployment
In order to deploy this API you must be authenticated as the pyrochatapp@gmail.com user or similar GCP service account.

`gcloud builds submit --tag gcr.io/pyro-production/pyro-opengraph --project pyro-production`

Once deployed using the above command, you must edit and deploy an new revision, selecting the revision you have just deployed the in Cloud Run in the GCP console.
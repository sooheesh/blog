# How to set a serverless Telegram bot webhook using Google Cloud Functions, Google Cloud Build, Google Source Repositories
This is what we want to achieve:

- Telegram user sends a message to your bot -> Google Cloud Function triggered.
- Developer updates code and commits -> Google Cloud Build triggered -> Deploys repository code to Google cloud function

## STEPS
1. Create a Google Cloud Function that's going to be triggered whenever someone sends a message to your Telegram bot. 
2. Set the trigger url of the Google Cloud Function as your Telegram bot webhook url (Refer to the Telegram documentation page). 
3. Now we will need to put your code into Google Cloud Function. You can manually copy and paste the codes everytime you update them, but for convenience we are going to use Github and a webhook that is going to build and deploy into Google cloud function whenever you commit.
4. To do that you need to use Google Source Repositories, but don't worry, Google Source Repositories supports linking any Github repositories.
5. After linking, in the configuration page of the linked source repository, configure a trigger. This is automatically going to create a Google Cloud Build.
6. Now, in the root directory, make a yaml file and merge. This is how I set it. (Skipped details...)

```yaml
steps:
  - name: node
    entrypoint: yarn
    args: ['install']
    id: "yarn-install"
  - name: "gcr.io/google.com/cloudsdktool/cloud-sdk"
    waitFor: ["yarn-install"]
    args:
      - gcloud
      - functions
      - deploy
      - trade-signal
      - --region=asia-northeast3
      - --source=https://source.developers.google.com/projects/${PROJECT_NAME}/repos/github_${GITHUB_ID}_${REPO_NAME}/moveable-aliases/master/paths//
      - --entry-point=${FUNCTION_NAME}
      - --runtime=nodejs10
      - --trigger-http
      - --allow-unauthenticated
```


> You might also want to use Google Cloud Scheduler to schedule a notification. This is easy, I'll skip the details.



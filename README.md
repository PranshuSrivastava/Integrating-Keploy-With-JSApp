# Integrating-Keploy-With-JSApp
This is a simple app where I have integrated Keploy with a NodeJS API. Feel free to play around with it or use it as a reference for integrating Keploy with your own NodeJS API.
If you face any issues, you can open an issue at [Typescript-SDK](https://github.com/keploy/typescript-sdk)

## Instructions For Running The App
- The app uses the world weather api to get information about the weather of a city. You need to go to https://www.worldweatheronline.com/weather-api/api/docs/
and sign up to get the API key. Add the API key to the .env file as 
``` export apikey= <your key> ```
- Clone the [Keploy repo](https://github.com/keploy/keploy) and go into the folder and run
``` docker-compose up -d ```
This will start the Keploy UI which you can access by going to localhost:6789.
- You can change the keploy mode in the .env file to record, test or off according to your requirements. After every change, run 
``` source .env ```
This updates all the environment variables.
- Now start the app using 
``` node app.js ```
- Now make some API calls and check the Keploy UI, your testcases should be recorded.
- When you are done recording the testcases go to the .env file and change the keploy mode from record to test.
- Update the environment variables using the command mentioned above, and start the server again. The test results will be shown on the terminal.

If you have any doubts feel free to reach out.

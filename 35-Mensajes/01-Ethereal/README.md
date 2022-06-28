1. Go to a https://ethereal.email/
2. click on "Create Ethereal Account"
3. Copy the Name, UserName and Password
4. Create a .env file as follow

   PORT=your-app-port
   ETHEREAL_EMAIL=your-email@ethereal.email
   ETHEREAL_PASSWORD=your-password
   ETHEREAL_NAME=you-ethereal-name

5. NPM Install
6. npm run start
7. make a post request to http://localhost:PORT/api/send-email
8. If response is 200 you will receive in your fake account an email

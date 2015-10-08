# nodeMailer

Create cred.js file in root level, with the following code.
////////////////////////// START //////////////////////////
	var cred = {
		email : 'youremail@gmail.com',
		pass : 'gmail-password',
		phone : 'twilio-account-number',
		sendgrid_apikey : '',
		twilio_sid : '',
		twilio_token : ''
	};
	module.exports = cred;
////////////////////////// END //////////////////////////

Pre-requisites:
node.js

Steps to Run the application:
1. Clone the project locally and open command line in the root level of the project.
2. npm install
3. nodemon server
4. Open browser and run 'localhost:3000'

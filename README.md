# nodeMailer

Create cred.js file in root level, with the following code. <br>
////////////////////////// START //////////////////////////<br>
	var cred = {<br>
		email : 'youremail@gmail.com',<br>
		pass : 'gmail-password',<br>
		phone : 'twilio-account-number',<br>
		sendgrid_apikey : '',<br>
		twilio_sid : '',<br>
		twilio_token : ''<br>
	};<br>
	module.exports = cred;<br>
////////////////////////// END //////////////////////////<br>

Pre-requisites:
node.js

Steps to Run the application:<br>
1. Clone the project locally and open command line in the root level of the project.<br>
2. npm install<br>
3. nodemon server<br>
4. Open browser and run 'localhost:3000'<br>

var cred = require('./cred.js');
var express=require('express');
var nodemailer = require("nodemailer");
var sendgrid  = require('sendgrid')(cred.sendgrid_apikey);
var twilio = require('twilio')(cred.twilio_sid , cred.twilio_token);

var app=express();
/* Here we are configuring our SMTP Server details. STMP is mail server which is responsible for sending and recieving email.*/
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
		auth: {
		user: cred.email,
		pass: cred.pass
	}
});
/*------------------SMTP Over-----------------------------*/
/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
	res.sendfile('index.html');
});

app.get('/send',function(req,res){
	var mailOptions = {
		from : cred.email,
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text,
		sendUsing : req.query.sendUsing
	}
	var phoneOptions = {
		from : cred.phone,
		to : req.query.to,
		body : req.query.body,
		sendUsing : req.query.sendUsing
	}

	if (mailOptions.sendUsing == "nodemailer") {
		console.log(mailOptions);
		smtpTransport.sendMail(mailOptions, function(error, response){
			if(error){
				console.log(error);
				res.end("error");
			}else{
				console.log("Message sent: " + response.message);
				res.end("sent");
			}
		});
	} else if (mailOptions.sendUsing == "sendgrid"){
		console.log(mailOptions);
		sendgrid.send(mailOptions, function(error, response){
			if(error){
				console.log(error);
				res.end("error");
			}else{
				console.log("Message sent: " + response.message);
				res.end("sent");
			}
		});
	} else if (phoneOptions.sendUsing == "twilio"){
		console.log(phoneOptions);
		twilio.sendMessage(phoneOptions, function(error, response){
			if(error){
				console.log(error);
				res.end("error");
			}else{
				console.log("Message sent: " + response.message);
				res.end("sent");
			}
		});
	}
});

app.get('/send',function(req,res){
	twilio.sendMessage(phoneOtions)

});
/*--------------------Routing Over----------------------------*/
app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});
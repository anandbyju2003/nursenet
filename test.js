const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key:'f8f066a7ce82b3d85cec7f3de041c670-2c441066-1744a5d5'});

mg.messages.create('admin.orionblaze.me', {
	from: "Admin <mailgun@admin.orionblaze.me>",
	to: ["jamessajan07@gmail.com",'thecdharth@gmail.com','shonysharath@gmail.com'],
	subject: "Your otp is:",
	text: "hi daa enthokke und visheshsam",
	html: "<h1>WHY ARE YOU GAY</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error 
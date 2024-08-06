import { VITE_SECRET_KEY_CF_TURNSITE } from '$env/static/private';
import { fail, type Actions } from '@sveltejs/kit';
export const actions: Actions = {
	sendContact: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const company = formData.get('company');
		const comments = formData.get('comments');
		const phone = formData.get('phone');
		const token = formData.get('cf-turnstile-response');
		const ip = request.headers.get('CF-Connecting-IP');

		// Validate the token by calling the
		// "/siteverify" API endpoint.
		let body = new FormData() as any;
		body.append('secret', VITE_SECRET_KEY_CF_TURNSITE);
		body.append('response', token);
		body.append('remoteip', ip);

		const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
		const result = await fetch(url, {
			body: body,
			method: 'POST'
		});

		const outcome = await result.json();
		if (outcome.success) {
			// create reusable transporter object using the default SMTP transport
			try {
				const data = {
					name: name,
					email: email,
					company: company,
					phone: phone,
					comments: comments
				};
				console.log('🚀 ~ file: +page.server.ts:38 ~ sendContact: ~ data:', data);
				const sendEmail = await fetch(`https://lemy-contact-send-mail.deno.dev/send-email`, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json' // Đặt loại nội dung là JSON
					}
				});
				const resultEmail = await sendEmail.text();
				console.log('🚀 ~ file: +page.server.ts:46 ~ sendContact: ~ resultEmail:', resultEmail);
				// let transporter = createTransport({
				//   host: VITE_SMTP_SERVER,
				//   port: 465,
				//   secure: true, // true for 465, false for other ports
				//   auth: {
				//     user: VITE_EMAIL_USER, // generated ethereal user
				//     pass: VITE_EMAIL_PASSWORD, // generated ethereal password
				//   },
				// });
				// // send mail with defined transport object
				// let info = await transporter.sendMail({
				//   from: '"Admin web HTrecruitment.vn" <service@creditbird.vn>', // sender address
				//   to: "trongtri35@gmail.com, tritt@htrecruitment.vn", // list of receivers
				//   subject: "New Contact info ✔", // Subject line
				//   text: `name: ${name}, email: ${email}, phone: ${phone}, message: ${message}`, // plain text body
				//   html: `<b>name: ${name},<br> email: ${email},<br> phone: ${phone},<br> message: ${message}</b>`, // html body
				// });
				// console.log("Message sent: %s", info.messageId);

				// console.log("Preview URL: %s", getTestMessageUrl(info));
			} catch (err) {
				if (err) {
					return fail(400, {
						error: true,
						errMessage: 'Error! Please try again later!' + err
					});
				}
			}
			return { success: true };
		} else {
			return fail(400, {
				error: true,
				errMessage: 'Error! Please try again later! maybe your check human is invalid'
			});
		}
	}
};

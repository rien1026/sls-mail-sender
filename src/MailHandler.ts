import Joi from '@hapi/joi';
import { AppError } from './utils';
import { transporter } from './configs/MailConfig';

export const mailHandler = async (event: any, context: any) => {
	try {
		let params = await Joi.object({
			to: Joi.string().required(),
			subject: Joi.string().required(),
			html: Joi.string().required(),
		}).validateAsync(JSON.parse(event.body));

		await transporter.sendMail({ to: params.to, subject: params.subject, html: params.html });

		return { statusCode: 200, body: JSON.stringify({ msg: 'suc' }) };
	} catch (err) {
		new AppError('AppErr', err.message, err.stack);
		return { statusCode: 400, body: JSON.stringify({ msg: err.message }) };
	}
};

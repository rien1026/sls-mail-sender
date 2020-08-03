import * as nodemailer from 'nodemailer';
import { Constants } from '../utils/Constants';

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	port: Number(Constants.MAIL_CONFIG.MAIL_PORT),
	host: Constants.MAIL_CONFIG.MAIL_HOST,
	auth: {
		user: Constants.MAIL_CONFIG.MAIL_USER,
		pass: Constants.MAIL_CONFIG.MAIL_PASSWORD,
	},
});

export const configureMail = () => {};

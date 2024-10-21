import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";
import path from "path";

interface EmailOptions {
  email: string;
  subject: string;
  template: string;
  data: { [key: string]: any };
}
const sendEmail = async (options: EmailOptions): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const { email, subject, template, data } = options;
  //getting path of the template
  const templatePath = path.join(__dirname, `../mails/${template}`);
  const html: string = await ejs.renderFile(templatePath, data);
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: subject,
    html,
  };
  await transporter.sendMail(mailOptions);
};
export default sendEmail;

'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_API);

export const sendEmail = async (formData: FormData) => {
  console.log('Running on server');
  console.log(formData.get('senderEmail'));
};

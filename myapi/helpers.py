from django.core.mail import send_mail,EmailMessage
from django.conf import settings 

import smtplib

def send_forget_password_mail(email , token ):
    YOUR_GOOGLE_EMAIL = 'balajikukkapalli2002@gmail.com'  # The email you setup to send the email using app password
    YOUR_GOOGLE_EMAIL_APP_PASSWORD = 'gmeacfikgvnuwbgs'  # The app password you generated

    smtpserver = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    smtpserver.ehlo()
    smtpserver.login(YOUR_GOOGLE_EMAIL, YOUR_GOOGLE_EMAIL_APP_PASSWORD)

    # Test send mail
    sent_from = YOUR_GOOGLE_EMAIL
    print('seknd: ',email)
    sent_to = email  #  Send it to self (as test)
    email_text = 'This is a test'
    email_text = 'Hi click on the link to reset your password\nhttp://127.0.0.1:8000/change-password/'+token+'/'
    smtpserver.sendmail(sent_from, sent_to,email_text)

    # Close the connection
    smtpserver.close()
    return True
'''
def send_forget_password_mail(email , token ):
    subject = 'Your forget password link'
    message = f'Hi , click on the link to reset your password http://127.0.0.1:8000/change-password/{token}/'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, email_from, recipient_list)
    #email = EmailMessage('Subject', 'Body', to=['vamsiajay4@gmail.com'])
    #email.send()
    print('send')
    return True
'''
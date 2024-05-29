
import pandas as pd
from .models import Counsellor,Student
from django.contrib.auth.models import User
from .models import *
from django.contrib.auth import authenticate,login,logout
from .helpers import send_forget_password_mail

def readcounsellor():
    df = pd.read_excel('./media/counsellor.xlsx')
    paswFlag = True
# Now 'df' contains the data from the Excel file    
    print(df.head())
    for index, row in df.iterrows():
        try:
            r = Counsellor.objects.get(counId=row.iloc[0])
            if ( r.name == row.iloc[1] and r.phoneNo==row.iloc[2] and r.mail == row.iloc[3] ):
                paswFlag = False

        except:
            pass
        newCoun = Counsellor(
        counId = row.iloc[0],
        name=row.iloc[1],
        phoneNo = row.iloc[2],
        mail = row.iloc[3]
        )
        newCoun.save()

        counsId = row.iloc[0]
        email = row.iloc[3]
        #password = str(row.iloc[0])
        password = "sircrr123"

        try:
            user_obj = User(username = counsId , email = email)
            user_obj.set_password(password)
            user_obj.save()
            profile_obj = Profile.objects.create(user = user_obj )
            profile_obj.save()
        except:
            user_obj = User.objects.get(username = counsId , email = email)
            user_obj.set_password(password)
            user_obj.save()

        

def readstudent():
    df = pd.read_excel('./media/student.xlsx')
    print(df.head())
    
    try:
        for index, row in df.iterrows():
            counsellor = Counsellor.objects.get(counId=row.iloc[1])
            row = Student.objects.create(regNo=row.iloc[0], counId=counsellor)
            row.save()
        return []
    except Counsellor.DoesNotExist:
        return [row.iloc[1]]
                
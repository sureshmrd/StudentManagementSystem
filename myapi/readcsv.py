import pandas as pd
import tabula
from django.contrib.auth.models import User
from .models import Result
from .pdfExtr import getDetails
import datetime
# Read CSV file into a DataFrame

def toCsv():
    df = pd.DataFrame([])
    #dfs = tabula.read_pdf("Supply.pdf", pages='all',stream=True)
    dfs = tabula.read_pdf('./media/result.pdf', pages='all',stream=True)
    df = [dfs[i] for i in range(len(dfs))]
    df = pd.concat(df)
    df.to_csv('./media/'+'ok.csv',index=False)
    examDetails = getDetails('./media/result.pdf')
    return examDetails

def uploadToDb():
    
    csv_file_path = './media/ok.csv'
    revalution,regular,sem,datee = toCsv()
    df = pd.read_csv(csv_file_path)
    print(revalution,regular,sem,datee)
    d = datee.split('-')#dateFormat: 2002-08-24
    d = datetime.date(int(d[0]), int(d[1]), int(d[2]))
    
    if(df.shape[1]==6):
        if(revalution==False):
            for index, row in df.iterrows():
                result = Result(
                    regNo = row.iloc[0],
                    subCode=row.iloc[1],
                    subName = row.iloc[2],
                    internals = row.iloc[3],
                    grade = row.iloc[4],
                    credits = row.iloc[5],
                    sem = sem,
                    month_year = d
                )
                result.save()
        else:
            for index, row in df.iterrows():
                r = Result.objects.get(regNo=row.iloc[0],subCode=row.iloc[1],month_year = d)
                if('NO' in str(row.iloc[4]).upper()):
                    continue
                r.internals = row.iloc[3]
                r.grade = row.iloc[4]
                r.credits = row.iloc[5]
                r.save()
    else:
        if(revalution==False):
            for index, row in df.iterrows():
                result = Result(
                    regNo = row.iloc[0],
                    subCode=row.iloc[1],
                    subName = row.iloc[2],
                    internals = 0,
                    grade = row.iloc[3],
                    credits = row.iloc[4],
                    sem = sem,
                    month_year = d
                )
                result.save()
        else:
            for index, row in df.iterrows():
                r = Result.objects.get(regNo=row.iloc[0],subCode=row.iloc[1],month_year = d)
                if('NO' in str(row.iloc[4]).upper()):
                    continue
                r.internals = 0,
                r.grade = row.iloc[3]
                r.credits = row.iloc[4]
                r.save()
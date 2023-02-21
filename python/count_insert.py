<<<<<<< HEAD
import pymysql
import time
from datetime import datetime

now = datetime.now()


cur_year = now.year
cur_month = now.month
cur_day = now.day
count = 0


con = pymysql.connect(host='localhost', user='root', password='Capstone2023',
                       db='team_cc', charset='utf8')
cur = con.cursor()


while 1:
    time.sleep(3)
    
    select_sql = "SELECT * FROM count WHERE year='"+str(now.year)+"' AND month = '"+str(now.month) +"' AND day ='"+str(now.day)+"'"
    
    print(select_sql)

    cur.execute(select_sql)
    result = cur.fetchall()

    if len(result) == 0:

        sql = "INSERT INTO count VALUES('admin',0, '"+str(now.year)+"','"+str(now.month) +"','"+str(now.day)+"')"
        sql2 = "INSERT INTO count VALUES('user',0, '"+str(now.year)+"','"+str(now.month) +"','"+str(now.day)+"')"

        print(sql)
        print(sql2)

        cur.execute(sql)
        cur.execute(sql2)

        con.commit();

con.close()
=======
import pymysql
import time
from datetime import datetime

now = datetime.now()


cur_year = now.year
cur_month = now.month
cur_day = now.day
count = 0


con = pymysql.connect(host='localhost', user='root', password='7894',
                       db='team_cc', charset='utf8')
cur = con.cursor()


while 1:
    time.sleep(60)

    select_sql = "SELECT * FROM count WHERE year='"+str(now.year)+"' AND month = '"+str(now.month) +"' AND day ='"+str(now.day)+"'"

    cur.execute(select_sql)
    result = cur.fetchall()

    if len(result) == 0:

        sql = "INSERT INTO count VALUES('admin',0, '"+str(now.year)+"','"+str(now.month) +"','"+str(now.day)+"')"
        sql2 = "INSERT INTO count VALUES('user',0, '"+str(now.year)+"','"+str(now.month) +"','"+str(now.day)+"')"

        print(sql)

        cur.execute(sql)
        cur.execute(sql2)

        con.commit();

con.close()
>>>>>>> 9818a434a718e83192380d90b4c1cafe0e5736a8

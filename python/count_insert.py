import pymysql
import time
from datetime import datetime

now = datetime.now()


cur_year = now.year
cur_month = now.month
cur_day = now.day


while 1:
    time.sleep(60)
    if cur_year != now.year and cur_month != now.year and cur_day != now.day:
        con = pymysql.connect(host='localhost', user='root', password='7894',
                               db='team_cc', charset='utf8')
        cur = con.cursor()

        sql = "INSERT INTO count VALUES('admin',0, '"+str(now.year)+"','"+str(now.month) +"','"+str(now.day)+"')"
        sql2 = "INSERT INTO count VALUES('user',0, '"+str(now.year)+"','"+str(now.month) +"','"+str(now.day)+"')"

        cur.execute(sql)
        cur.execute(sql2)

        con.commit();
        con.close()

import pymysql

connection = pymysql.connect(user='root', password = 'password', host = 'localhost', database = 'python_tut')
#connection = pymysql.connect(user='root', password = 'password', host = 'localhost')
c = connection.cursor()

#c.execute("CREATE SCHEMA python_tut")
def createtable():
    c.execute("CREATE TABLE employee(id INT NOT NULL, name VARCHAR(20), PRIMARY KEY(id))")
    c.execute("INSERT INTO employee VALUES (1, 'Elizabeth'),(2, 'Nora'),(3,'Emily')")


def ret():
    c.execute("SELECT * FROM employee WHERE id = 3")
    #print(c.fetchall())
    for row in c.fetchall():
        print(row)


def up():
    c.execute(" UPDATE employee SET name = 'Matthew' WHERE id = 3")
    connection.commit()

def drop():
    c.execute("drop table employee")
    connection.commit()

def delete():
    c.execute("DELETE FROM employee WHERE name = 'Matthew'")
    connection.commit()


def schema():
    c.execute("DROP SCHEMA python_tut")

createtable()
up()
ret()
drop()
#schema()
#createtable()
#delete()
#ret()
#drop()

c.close()

connection.close()

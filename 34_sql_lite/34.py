import sqlite3

connection = sqlite3.connect('abc.sql')
c = connection.cursor()

def ct():
    c.execute('CREATE TABLE IF NOT EXISTS def (id REAL, name TEXT)')

def av():
    c.execute("INSERT INTO def VALUES(3, 'Liz'),(4, 'Emily')")
    connection.commit()


def view():
    c.execute("SELECT * FROM def ")
    #t = c.fetchall()
    #print(t)
    for row in c.fetchall():
        print(row)


def up():
    c.execute("UPDATE def SET name='Rj' WHERE name='Raunak'")
    connection.commit()


def dele():
    c.execute("DELETE FROM def WHERE id=2")
    connection.commit()

#ct()
#dele()
#up()
view()
#av()
c.close()
connection.close()
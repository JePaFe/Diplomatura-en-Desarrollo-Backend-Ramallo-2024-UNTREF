import mysql.connector

def conectar_a_db():
    return mysql.connector.connect(
        host='127.0.0.1',
        user='root',
        password='root',
        database='northwind'
    )

def obtener_tabla(table_name):
    connection = conectar_a_db()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM {table_name}")
    rows = cursor.fetchall()
    cursor.close()
    connection.close()
    return rows

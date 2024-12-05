# import mysql.connector

# # Connect to server
# cnx = mysql.connector.connect(
#     host="127.0.0.1",
#     port=3306,
#     user="root",
#     password="root")

# # Get a cursor
# cur = cnx.cursor()

# # Execute a query
# cur.execute("SELECT CURDATE()")

# # Fetch one result
# row = cur.fetchone()
# print("Current date is: {0}".format(row[0]))

# # Close connection
# cnx.close()

# ---

import mysql.connector, os
from dotenv import load_dotenv

load_dotenv()

config = {
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASS'),
    'host': os.getenv('DB_HOST'),
    'database': os.getenv('DB_NAME')
}

try:
    conexion = mysql.connector.connect(**config) 

    if conexion.is_connected():
        print('Conexión establecida.')

        cursor = conexion.cursor()
        cursor.execute("SELECT * FROM products LIMIT 10")
        resultados = cursor.fetchall()

        for resultado in resultados:
            print(resultado)

except mysql.connector.Error as e:
    print(f"⛔️ Error al conectar a la base de datos: {e}")

except:
    print('Otro error')

finally: 
    if 'conexion' in locals() and conexion.is_connected():
        cursor.close()
        conexion.close()
        print('Conexión cerrada')
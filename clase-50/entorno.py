import os
# import platform

# # print(platform.system())

# if platform.system() == 'Windows':
#     mi_user = os.environ.get('USERNAME')
#     os.system('cls')
# else:
#     mi_user = os.environ.get('USER')
#     os.system('clear')

# print('User', mi_user)
# print('OS', os.name)

# os.environ["API_KEY"] = "3y9rnhf9vbh3h3fhn9p13fc1"

# os.environ["DB_HOST"] = "localhost"
# os.environ["DB_USER"] = "root"
# os.environ["DB_PORT"] = "3306"

# print(os.environ)

# for key, value in os.environ.items():
#     print(f"{key}: {value}")

from dotenv import load_dotenv

load_dotenv()

print(os.environ.get('DB_HOST'))
print(os.getenv('DB_USER'))
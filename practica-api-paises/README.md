# API Países

## Instalación

```shell
npm install
```

Crear un archivo .env usando el .env-example

## Ejecutar

### Modo desarrollo

```shell
npm run dev
```

### Modo producción

```shell
npm start
```

## Postman

### Obtener todos los países

GET http://localhost:3000/paises

Accept: application/json

### Obtener los datos de un país en particular (ejemplo: Colombia)

GET http://localhost:3000/paises/Colombia

Accept: application/json

### Obtener todos los países que hablen un idioma específico (ejemplo: italiano)

GET http://localhost:3000/paises?idioma=italiano

Accept: application/json

### Insertar un nuevo país

POST http://localhost:3000/paises

Content-Type: application/json

```json
{
  "pais": "Argentina",
  "idioma": ["Español"],
  "continente": "América"
}
```


### Borrar un país (ejemplo: Argentina)

DELETE http://localhost:3000/paises/Argentina

Accept: application/json

# Proyecto de API con Express.js y Sequelize

## Productos

### Crear un Producto

Request:

```
POST /api/products
Content-Type: application/json

{
    "name": "Producto A",
    "description": "Descripción del Producto A",
    "price": 100,
    "categoryId": 1
}
```

Response:

```
{
    "id": 1,
    "name": "Producto A",
    "description": "Descripción del Producto A",
    "price": 100,
    "categoryId": 1,
    "createdAt": "2023-10-01T00:00:00.000Z",
    "updatedAt": "2023-10-01T00:00:00.000Z"
}
```

### Obtener Todos los Productos

Request:

```
GET /api/products
```

Response:

```
[
    {
        "id": 1,
        "name": "Producto A",
        "description": "Descripción del Producto A",
        "price": 100,
        "categoryId": 1,
        "category": {
            "id": 1,
            "name": "Categoría 1",
            "description": "Descripción de Categoría 1",
            "createdAt": "2024-10-12T02:31:22.000Z",
            "updatedAt": "2024-10-12T02:31:22.000Z"
        }
        "createdAt": "2023-10-01T00:00:00.000Z",
        "updatedAt": "2023-10-01T00:00:00.000Z"
    }
]
```

### Obtener un Producto por ID

Request:

```
GET /api/products/1
```

Response:

```
{
    "id": 1,
    "name": "Producto A",
    "description": "Descripción del Producto A",
    "price": 100,
    "categoryId": 1,
     "category": {
        "id": 1,
        "name": "Categoría 1",
        "description": "Descripción de Categoría 1",
        "createdAt": "2024-10-12T02:31:22.000Z",
        "updatedAt": "2024-10-12T02:31:22.000Z"
    }
    "createdAt": "2023-10-01T00:00:00.000Z",
    "updatedAt": "2023-10-01T00:00:00.000Z"
}
```

### Actualizar un Producto

Request:

```
PUT /api/products/1
Content-Type: application/json

{
    "name": "Producto A",
    "description": "Descripción del Producto A",
    "price": 120,
    "categoryId": 1
}
```

Response:

```
{
    "id": 1,
    "name": "Producto A",
    "description": "Descripción del Producto A",
    "price": 120,
    "categoryId": 1,
    "createdAt": "2023-10-01T00:00:00.000Z",
    "updatedAt": "2023-10-01T01:00:00.000Z"
}
```

### Eliminar un Producto

Request:

```
DELETE /api/products/1
```

Response:

```
HTTP/1.1 204 No Content
```

### Obtener Productos por Categoría

Request:

```
GET /api/products/category/1
```

Response:

```
[
    {
        "id": 1,
        "name": "Producto A",
        "description": "Descripción del Producto A",
        "price": 100,
        "categoryId": 1,
        "category": {
            "id": 1,
            "name": "Categoría 1",
            "description": "Descripción de Categoría 1",
            "createdAt": "2024-10-12T02:31:22.000Z",
            "updatedAt": "2024-10-12T02:31:22.000Z"
        }
        "createdAt": "2023-10-01T00:00:00.000Z",
        "updatedAt": "2023-10-01T00:00:00.000Z"
    },
    ...
]
```

### Buscar Productos por Nombre

Request:

```
GET /api/products/search?name=Producto
```

Response:

```
[
    {
        "id": 1,
        "name": "Producto A",
        "description": "Descripción del Producto A",
        "price": 100,
        "categoryId": 1,
        "category": {
            "id": 1,
            "name": "Categoría 1",
            "description": "Descripción de Categoría 1",
            "createdAt": "2024-10-12T02:31:22.000Z",
            "updatedAt": "2024-10-12T02:31:22.000Z"
        }
        "createdAt": "2023-10-01T00:00:00.000Z",
        "updatedAt": "2023-10-01T00:00:00.000Z"
    }
]
```

## Ordenes

### Crear una Orden

Request:

```
POST /api/orders
Content-Type: application/json

{
    "orderDate": "2023-10-01",
    "status": "pending",
    "products": [
        { "id": 1, "quantity": 2 },
        { "id": 2, "quantity": 1 }
    ]
}
```

Response:

```
{
    "id": 4,
    "orderDate": "2023-10-01T00:00:00.000Z",
    "status": "pending",
    "createdAt": "2024-10-12T03:03:37.000Z",
    "updatedAt": "2024-10-12T03:03:37.000Z",
    "products": [
        {
            "id": 1,
            "name": "Producto A",
            "price": 120,
            "description": "Descripción del Producto A",
            "createdAt": "2024-10-12T02:35:03.000Z",
            "updatedAt": "2024-10-12T02:42:07.000Z",
            "categoryId": 1,
            "OrderProduct": {
                "quantity": 2
            }
        },
        {
            "id": 2,
            "name": "Producto B",
            "price": 50,
            "description": "Descripción del Producto B",
            "createdAt": "2024-10-12T02:35:43.000Z",
            "updatedAt": "2024-10-12T02:35:43.000Z",
            "categoryId": 1,
            "OrderProduct": {
                "quantity": 1
            }
        }
    ]
}
```

## Usuarios

### Request para Crear un Usuario y su Perfil

Request:

```
POST /api/users
Content-Type: application/json

{
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe",
    "bio": "This is John's bio"
}
```

Response:

```
{
    "id": 1,
    "username": "johndoe",
    "email": "johndoe@example.com",
    "profile": {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "bio": "This is John's bio",
        "userId": 1,
        "updatedAt": "2024-10-12T03:11:02.716Z",
        "createdAt": "2024-10-12T03:11:02.716Z"
    },
    "updatedAt": "2024-10-12T03:11:02.712Z",
    "createdAt": "2024-10-12T03:11:02.712Z"
}
```
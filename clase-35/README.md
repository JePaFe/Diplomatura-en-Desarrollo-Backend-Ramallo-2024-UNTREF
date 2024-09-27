# Clase 35

## Vistas

```sql
CREATE
	ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `productsandcategories` AS
	SELECT P.ProductID,
		   P.ProductName,
		   P.CategoryID,
		   C.CategoryName,
		   P.QuantityPerUnit,
		   P.UnitPrice,
		   P.UnitsInStock
	FROM Northwind.Products P
	RIGHT JOIN Northwind.Categories C
	ON C.CategoryID = P.CategoryID
	ORDER BY P.productID;
```

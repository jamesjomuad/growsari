## User

npx sequelize-cli model:generate --name User --attributes fullName:string,email:string,username:string,password:string

## Products

npx sequelize-cli model:generate --name Product --attributes name:string,description:string,expiration:date,price:decimal,barcode:string,tag:string,category:string

## Order

npx sequelize-cli model:generate --name Order --attributes customerID:integer,customerID:integer

## Order Details

npx sequelize-cli model:generate --name OrderDetails --attributes orderID:integer,productID:integer,quantity:integer,discount:decimal,unitPrice:integer

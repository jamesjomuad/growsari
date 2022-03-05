# Grow Sari

A Quasar Framework app

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
```

### Format the files

```bash
yarn format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

# Database Setup

## Migration

### User

npx sequelize-cli model:generate --name User --attributes fullName:string,email:string,username:string,password:string

### Products

npx sequelize-cli model:generate --name Product --attributes name:string,description:string,expiration:date,price:decimal,barcode:string,tag:string,category:string

### Order

npx sequelize-cli model:generate --name Order --attributes customerID:integer,customerID:integer

### Order Details

npx sequelize-cli model:generate --name OrderDetails --attributes orderID:integer,productID:integer,quantity:integer,discount:decimal,unitPrice:integer

### Run Migration

npx sequelize-cli db:migrate

### Reset Migration

npx sequelize-cli db:migrate:undo:all

### Run Seeders

npx sequelize-cli db:seed:all

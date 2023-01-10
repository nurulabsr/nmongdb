const key = require("../../private_key");
const food_connection = async () => {
const func = await key.client_func();
const db_connect = func.db(key.db_data.db_shop);
const collection_connect = db_connect.collection(key.collection_data._db_shop_2);
return collection_connect;
}

module.exports = food_connection;


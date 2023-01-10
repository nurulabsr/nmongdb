const key = require("../../private_key");
const __laptop_connection__ = async() => {
const func = await key.client_func();
const db_connect = func.db(key.db_data.db_shop);
const collection_connect = db_connect.collection(key.collection_data._db_shop_1);
return collection_connect;
}



module.exports = __laptop_connection__;
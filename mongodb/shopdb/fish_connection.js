const key = require("../../private_key");
const fish_connection = async(req, res) => {
   const func = await key.client_func();
   const db_connect = func.db(key.db_data.db_shop);
   const collection_connect = db_connect.collection(key.collection_data._db_shop_3);
   return collection_connect;
}

module.exports = fish_connection;
const key = require("../../private_key");

const __android_connection__ = async() =>{
  const fun = await key.client_func();
  const db_connect = fun.db(key.db_data.db_shop);
  const collection_connect = db_connect.collection(key.collection_data._db_shop_2);
  return collection_connect;
}

module.exports = __android_connection__;
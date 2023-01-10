const key = require("../../private_key");
const __book_connection__ = async() => {
    const func = await key.client_func();
    const db_connect = func.db(key.db_data.db_book);
    const collection_connect = db_connect.collection(key.collection_data._db_book);
    return collection_connect;
}

module.exports= __book_connection__;
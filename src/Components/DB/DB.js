const db = {};

const addToDB = (item) => {
    const db = getDB();
    db[item] = 1;
    console.log(db);
}

const getDB = () => {
    return db;
}

export {addToDB};
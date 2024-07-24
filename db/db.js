const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log('Db Connected'))
        .catch((err)=>console.log(`Error while connecting db:${err} `))
        
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}
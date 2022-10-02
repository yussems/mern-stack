const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        
        console.log(`mongo db connect ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = connectDB
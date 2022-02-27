const mongoose = require('mongoose')


// ALL MONGO NEEDS TO BE ASYNC

const connectDB = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_URI)
        // USING COLORS LIBRARY
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        // TO GET FAILURE MESSAGE - BELOW
        process.exit(1)

    }
}

module.exports = connectDB
const mongoose = require('mongoose');

// Create asynchronous method to connect to database, use try catch block for attempt
const connectDB = async () => {

    // Attempt to call mongoose to connect to MongoDB Atlas Server.
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log("Error, could not connect to database");
        process.exit(1);
    }
}

module.exports = connectDB;
import mongoose from 'mongoose'

async function connectOnDbConnect() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}

export default connectOnDbConnect
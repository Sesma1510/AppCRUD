const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    //Added with auth: useCreateIndex`
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    //Log error
    console.error(err)
    //Exit program if error
    process.exit(1)
  }
}
//Export function as a module
module.exports = connectDB
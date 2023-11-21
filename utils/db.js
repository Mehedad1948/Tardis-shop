import mongoose from 'mongoose';
const connection = {};

export async function connectDb(params) {
  if (connection.isConnected) {
    console.log('Already connected to database');
    return;
  }

  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Use Previous connection to database');
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('New  connection to database');
  connection.isConnected = db.connections[0].readyState;
}

export async function disconnetDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'prodction') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Not disconnecting from database');
    }
  }
}

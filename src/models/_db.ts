import mongoose from 'mongoose';
import { db } from '../config';

const url = `mongodb://${db.host}:${db.port}/${db.name}`;


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};
mongoose.connect(url, options,
    (err: Error) => {
        if (!err)
            console.log('Connected to DB');
        else
            console.log(`err${err}`);
    }
);

import './sample.model';


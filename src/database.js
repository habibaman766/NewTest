import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/fuelUpEducation', {
    useNewUrlParser: true, 
    useCreateIndex:true,
    useUnifiedTopology: true
});

const conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

export default conn;
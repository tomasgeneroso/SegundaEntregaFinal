
const config = require("../../config.json")
//var admin = require("firebase-admin");
//var serviceAccount = require("./curso-backend-a6efd-firebase-adminsdk-8pu1r-2b4047943f.json");
let configConnection

if (config.database.engine === 'Firebase') {  
    // admin.initializeApp({
    //     credential: admin.credential.cert(serviceAccount)
    // });
    // console.log("firebase Connected")
}

//si se elige mongodb como bbdd se conecta
if (config.database.engine === 'Mongo') {
    configConnection=require("mongoose")
     (async () => {
        try {
            const cs=config.database.uri
            await mongoose.connect(cs, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log('MongoDB connected');
        } catch (err) {
            console.log(`Error al conectar con mongo: ${err.message}`);
        }
    })()
}

//exportar firebase
module.exports=configConnection
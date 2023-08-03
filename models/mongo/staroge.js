const mongo = require('mongoose');

const storageSchema = new mongo.Schema(
    {
        url: {
            type: String,
        },
        fileName:{
            type: String,
        },
       
    },
    {
      timestamps: true,//created at and updated at
      versionKey: false,//__v
    }

)

module.exports = mongo.model("storageSchema", storageSchema);
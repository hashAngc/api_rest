const mongo = require('mongoose');

const traksSchema = new mongo.Schema(
    {
        name: {
            type: String,
        },
        album:{
            type: String,
        },
        cover:{
            type: String,
            validate: {
                validator: ()=> {
                    return true
                },
                message: "cover is not valid"
            }
        },
        artist:{
            name: {
                type: String,
            },
            nickName:{
                type: String,
            },
            nationality:{
                type: String,
            }

            
        },
        duration:{
            start:{
                type: Number,
            },
            end:{
                type: Number,
            }
        },
        mediaID:{
            type:mongo.Schema.Types.ObjectId,
        }
       
    },
    {
      timestamps: true,//created at and updated at
      versionKey: false,//__v
    }

)

module.exports = mongo.model("traksSchema", traksSchema);
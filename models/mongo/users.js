const mongo = require('mongoose');

const userSchema = new mongo.Schema(
    {
        name: {
            type: String,
        },
        age:{
            type: Number,
        },
        email:{
            type: String,
            unique: true,
        },
        password:{
            type: String,
        },
        role:{
            type:["user","admin"],
            default: "user",
        }
    },
    {
      timestamps: true,//created at and updated at
      versionKey: false,//__v
    }

)

module.exports = mongo.model("users", userSchema);
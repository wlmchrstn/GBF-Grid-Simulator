const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    role: {
        type: String,
        required: false,
        enum: ['Admin', 'User'],
        default: 'User'
    },
    password: {
        type: String,
        required: true
    },
    grid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grid'
    }
});

userSchema.plugin(uniqueValidator);
var User = mongoose.model('User', userSchema);

User.generateHash = function(data) {
    let salt = 10
    return bcrypt.hashSync(data, salt)
}

User.register = async function(data) {
    return new Promise(async function(resolve, reject) {
        try {
            if(!data.username || data.password) {
                return reject([400, 'Invalid data! Please follow the requirement!'])
            }
            let pwd = await generateHash(data.password)

            let taken = await User.findOne({ username: data.username })
            if(taken){
                return reject([422, 'Username is already taken!'])
            }
            else {
                let user = await User.create({
                    username: data.username,
                    password: pwd
                })
                let result = {
                    _id: user._id,
                    username: user.username
                }
                resolve([201, result, 'User created!'])
            }
        }
        catch(err) {

        }
    })
}

User.login = async function(data) {
    return new Promise(async function(resolve, reject) {
        if(!data.username || !data.password) {
            return reject([400, 'Invalid data! Please follow the requirement!'])
        }

        let user = await User.findOne({
            username: data.username
        }).select(['username', 'password', 'role'])
        
        let isCorrect = await bcrypt.compare(data.password, user.password)
        if(!isCorrect || !user) {
            return reject([403, "Invalid username or password!"])
        }
        else {
            let token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, { expiresIn: '1h' })
            resolve([200, { token: token }, 'Token created!'])
        }
    })
}

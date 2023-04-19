const mongoose = require("mongoose");
// how to create a model
// step 1: require mongoose
// step 2 : create a mongoose schema (structure of a user)
// step 3: create a model

const User = new mongoose.schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedSongs: {
        // array 
        type: String,
        default: "",
    }, 
    likedPlaylists: {
        // array
        type: String,
        default: "",
    },
    subscribedArtists: {
        // array
        type: String,
        default: "",
    }


});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;
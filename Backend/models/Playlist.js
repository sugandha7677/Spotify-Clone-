const mongoose = require("mongoose");


const Playlist = new mongoose.schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail : {
        type: String, 
        required: true,
    }, 
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    //1. playlist song
    // 2. playlist collaborators
    songs: [ 
        {
        type: mongoose.Types.ObjectId,
        ref: "song"
        },
    ],
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
    ]

});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;
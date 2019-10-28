const songsReducer = () => {
    return [
        { title : 'Song 1', 'duration' : '4:05'},
        { title : 'Song 2', 'duration' : '3:41'},
        { title : 'Song 3', 'duration' : '2:54'},
        { title : 'Song 4', 'duration' : '5:38'}
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type == "SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
}
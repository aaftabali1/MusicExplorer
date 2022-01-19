import TrackPlayer from 'react-native-track-player';

  export const initialize = async ()=>{
    await TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      stopWithApp: true
  });
  }

  export const addTrack = async item => {
    /* Reset the player */
    await TrackPlayer.reset();

    /* Add a track to the player */ 
    await TrackPlayer.add(item);

    /* Start playing */
    await TrackPlayer.play();
  };

  /* Pause track if running */
  export const pauseTrack = async()=>{
    await TrackPlayer.pause();
  }
/* Play track if paused */
  export const playTrack = async()=>{
    await TrackPlayer.play();
  }
/* Seeking forward and backward */
  export const forward = async()=>{
    /* Getting current position of the player */
    const position = await TrackPlayer.getPosition();
    /* Forwarding 5 sec */
    await TrackPlayer.seekTo(position+5);
  }

  export const backward = async()=>{
    /* Getting current position */
    const position = await TrackPlayer.getPosition();
    /* Backwarding 5 sec */
    await TrackPlayer.seekTo(position-5)
  }


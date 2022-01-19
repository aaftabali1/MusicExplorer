import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import images from '../../Constants/images';
import FastImage from 'react-native-fast-image';
import {
  addTrack,
  backward,
  forward,
  pauseTrack,
  playTrack,
} from '../../Services/audioPlayer';
import TrackPlayer from 'react-native-track-player';
export default class Player extends Component {
  constructor(props) {
    super(props);
    /* Initializing States Here:- */
    this.state = {
      trackIndex: 0,
      isPlaying: true,
    };
  }

  /* Set Up player when component loads */
  componentDidMount() {
    const {trackIndex} = this.props.route.params;
    this.setState({trackIndex: trackIndex});
    /* Adding Track to the Player */
    addTrack(this.props.tracks[trackIndex]);
    TrackPlayer.addEventListener('playback-queue-ended',()=>{
      const index = this.state.trackIndex;
      if (index == this.props.tracks.length - 1) {
        /* All songs from the queue played */
        this.setState({isPlaying:false});
        return;
      }
      this.onNext();
    })
  }

  /* on next Tap */

  onNext = () => {
    const index = this.state.trackIndex;
    if (index == this.props.tracks.length - 1) {
      return;
    }
    this.setState({trackIndex: index + 1}, () => {
      addTrack(this.props.tracks[index + 1]);
    });
  };

  /* on prev Tap */

  onPrev = () => {
    const index = this.state.trackIndex;
    if (index == 0) {
      return;
    }
    this.setState({trackIndex: index - 1}, () => {
      addTrack(this.props.tracks[index - 1]);
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.subContainer} source={images.background}>
          <ImageBackground style={styles.albumBox} source={images.music}>
            {/* Loading Album Image Here:- */}
            <FastImage
              style={styles.artwork}
              source={{
                uri: this.props.tracks[0].artwork,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </ImageBackground>
          <View style={[styles.trackDetails, styles.dropShadow]}>
            <Text style={styles.songName}>
              {this.props.tracks[this.state.trackIndex].title}
            </Text>
            <Text style={styles.artistName}>
              {this.props.tracks[this.state.trackIndex].artist}
            </Text>
            {/* Player Controls Here:- */}
            <View style={styles.playerControls}>
              {/* on Skip Previous */}
              <TouchableOpacity onPress={this.onPrev}>
                <Image style={styles.prevBtn} source={images.backward} />
              </TouchableOpacity>

              {/* on Seek backward  */}

              <TouchableOpacity
                onPress={() => {
                  backward();
                }}>
                <Image style={styles.backwardBtn} source={images.backward} />
              </TouchableOpacity>

              {/* on Play / Pause */}
              <TouchableOpacity
                onPress={() => {
                  /* Pause track if already playing */
                  if (this.state.isPlaying) {
                    this.setState({isPlaying: false}, () => {
                      pauseTrack();
                    });
                    return;
                  }
                  /* Play track if paused */
                  this.setState({isPlaying: true}, () => {
                    playTrack();
                  });
                }}>
                <Image
                  style={styles.playBtn}
                  source={this.state.isPlaying ? images.pause : images.play}
                />
              </TouchableOpacity>

              {/* on Seek forward  */}

              <TouchableOpacity
                onPress={() => {
                  forward();
                }}>
                <Image style={styles.forwardBtn} source={images.forward} />
              </TouchableOpacity>

              {/* on Skip Next */}

              <TouchableOpacity onPress={this.onNext}>
                <Image style={styles.nextBtn} source={images.forward} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Loader} from '../../Components/loader';
import images from '../../Constants/images';
import styles from './styles';

export default class ListSongs extends Component {
  constructor(props) {
    super(props);
    /* Initializing states here:- */
    this.state = {
      albumCoverUri: null,
      songsData: null
    };
  }

  /* Loading songs data when component loads */
  componentDidMount() {
    /* Get Album Cover Image and Tracks data */
    const {images, tracks} = this.props.data;
    /* First we are getting the Cover Image below */
    this.props.getAlbumCover(images.href, imageData => {
      /* Getting tracks data in Callback */
      this.props.getAlbumTracks(tracks.href,tracksData=>{
        /* Finally updating the states */
      this.setState({albumCoverUri: imageData.url,songsData:tracksData});
        
      })
    });

  }
  renderItem = ({item}) => {
    /* Rounding of Play back seconds to nearest minutes */
    const min = Math.round(item.playbackSeconds / 60)
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.item, styles.dropShadow]}>
        <View>
          <Text style={styles.songName}>{item.name}</Text>
          {/* Seprating Artist name with commas */}
          <Text style={styles.artistName}>{item.artistName.replaceAll('&',',')}</Text>
          <Text style={styles.time}>{`${min} min`}</Text>

        </View>
        <Image style={styles.playBtn} source={images.play} />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Loader loading={this.props.isLoading} />
        <ImageBackground style={styles.container} source={images.background}>
          <FastImage
            style={{width: '100%', height: "100%",position:'absolute',backgroundColor:'transparent'}}
            source={{
              uri: this.state.albumCoverUri,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FlatList
            style={styles.songList}
            /* genrating unique key */
            keyExtractor={(item, index) => index.toString()}
            /* adding album data to flatlist */
            data={this.state.songsData}
            /* Disable verticle scroll indicator */
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

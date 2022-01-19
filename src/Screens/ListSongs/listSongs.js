import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Loader} from '../../Components/loader';
import images from '../../Constants/images';
import routeName from '../../Constants/routeName';
import styles from './styles';
import{addTrack} from '../../Services/audioPlayer'

export default class ListSongs extends Component {
  constructor(props) {
    super(props);
    /* Initializing states here:- */
    this.state = {
      albumCoverUri: null,
    };
  }

  /* Loading songs data when component loads */
  componentDidMount() {
    /* Get Album Cover Image and Tracks data */
    const {images, tracks} = this.props.data;

    /* First we are getting the Cover Image below */
    this.props.getAlbumCover(images.href, imageData => {

      /* Saving album tracking to Redux Here:- */
      this.props.getAlbumTracks(tracks.href, imageData.url, () => {

        /* Finally updating the states */
        this.setState({albumCoverUri: imageData.url});
      });
    });
  }


  renderItem = ({item,index}) => {
    /* Rounding of Play back seconds to nearest minutes */
    const min = Math.round(item.duration / 60);
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>{
          this.props.navigation.navigate(routeName.player,{trackIndex:index});
        }}
        style={[styles.item, styles.dropShadow]}>
        <View>
          <Text style={styles.songName}>{item.title}</Text>

          {/* Seprating Artist name with commas */}
          <Text style={styles.artistName}>{item.artist.replace('&', ',')}</Text>
          <Text style={styles.time}>{`${min} min`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {

            /* Play Music Preview */
            addTrack(item);
          }}
          style={styles.previewBtn}>
          <Text style={styles.previewTxt}>l{'>'} Preview</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Loader loading={this.props.isLoading} />
        <ImageBackground style={styles.container} source={images.background}>
           {/* Loading Album Image Here:- */}
          <FastImage
            style={styles.albumImage}
            source={{
              uri: this.state.albumCoverUri,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FlatList
            style={styles.songList}

            /* genrating unique key */
            keyExtractor={(item, index) => index.toString()}

            /* adding album data to flatlist from redux store */
            data={this.props.tracks}

            /* Disable verticle scroll indicator */
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

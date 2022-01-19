import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import {Loader} from '../../Components/loader';
import styles from './styles';
import moment from 'moment';
import strings from '../../Constants/strings';
import images from '../../Constants/images';

export default class ListAlbums extends Component {
  constructor(props) {
    super(props);
    /* Initializing states here:- */
    this.state = {
      page: 0,
      albumData: null,
      loadMoreVisible: false,
    };
  }
  /* Calling Api and fetching Data on component mount */
  componentDidMount() {
    /* getting initial album data */
    this.props.getAlbumData(this.state.page, albums => {
      this.setState({albumData: albums});
      console.log(albums);
    });
  }
  /* Rendering albums in FlatList Here:- */
  renderItem = ({item}) => {
    return (
      <TouchableOpacity style={[styles.dropShadow, styles.itemContainer]}>
        <View style={styles.item}>
          <Image style={styles.itemImage} source={images.music}/>
          <Text style={styles.albumName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.artistName}>{item.artistName}</Text>
          <Text style={styles.songsCount}>{item.trackCount} Songs</Text>
          <Text style={styles.albumDate}>
            {moment(item.released).format('MMM YYYY')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  /* Loading more items when end reached */
  loadMoreAlbums = () => {
    /* Updating Pages when scroll ends */
    const newPage = this.state.page + 1;
    /* Getting new albums from API */
    this.props.getAlbumData(newPage, albums => {
      /* updating states and inserting album data */
      this.setState({
        albumData: [...this.state.albumData, ...albums],
        page: newPage,
        loadMoreVisible: false,
      });
    });
  };

  render() {
    var contentOffsetY = 0;
    return (
      <SafeAreaView style={styles.container}>
        <Loader loading={this.props.isLoading} />
        <ImageBackground style={styles.container} source={images.background}>
          <FlatList
            style={styles.albumList}
            /* genrating unique key */
            keyExtractor={(item, index) => index.toString()}
            /* adding album data to flatlist */
            data={this.state.albumData}
            /* Disable verticle scroll indicator */
            showsVerticalScrollIndicator={false}
            /* setting number of columns */
            numColumns={2}
            onScroll={({nativeEvent}) => {
              const {contentOffset} = nativeEvent;
              if (contentOffsetY == contentOffset.y) {
                /* Hide load more button when user start scrolling */
                contentOffsetY = contentOffset.y;
                this.setState({loadMoreVisible: false});
              }
            }}
            onEndReached={() => {
              /* Show load more button when end reached */
              this.setState({loadMoreVisible: true});
            }}
            onEndReachedThreshold={0.1}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={this.renderItem}
          />
          {this.state.loadMoreVisible && (
            // Loading more data button Actions
            <TouchableOpacity
              style={[styles.dropShadow, styles.loadMoreBtn]}
              onPress={this.loadMoreAlbums}>
              <Text style={styles.loadMoreTxt}>{strings.loadMoreAlbums}</Text>
            </TouchableOpacity>
          )}
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

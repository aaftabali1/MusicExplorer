import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.black
  },
  albumList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  albumName: {
    fontSize: widthPercentageToDP('3.8%'),
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.white,
  },
  artistName: {
    fontWeight: '600',
    fontSize: widthPercentageToDP('3.3%'),
    color: colors.white,
  },
  albumDate: {
    textAlign: 'right',
    fontSize: widthPercentageToDP('3%'),
    color: colors.white,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  songsCount: {
    textAlign: 'left',
    fontSize: widthPercentageToDP('3%'),
    color: colors.white,
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  dropShadow: {
    backgroundColor: colors.grey,
    shadowColor: colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  item: {
    flex: 1, 
    padding: 10,
  },
  itemImage:{
    height: '100%',
    width: '100%',
    resizeMode:'contain',
    position:'absolute'
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    height: heightPercentageToDP('15%'),
    borderRadius: 8,
  },
  loadMoreBtn: {
    position: 'absolute',
    bottom: 20,
    borderColor: colors.black,
    borderRadius: 16,
    borderWidth: 0.5,
    padding: 8,
    backgroundColor: colors.theme,
    flexDirection: 'row',
    alignSelf: 'center',
    opacity: 0.8,
  },
  loadMoreTxt: {
    fontWeight: '500',
    color: colors.white,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

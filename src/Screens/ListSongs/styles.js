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
  songList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom:20
  },
  item: {
    flex: 1, 
    padding:10,
    marginBottom:10,
    borderRadius: 8,
    flexDirection:'row',
    opacity:0.8,
    height:heightPercentageToDP('10%')
  },
  songName:{
    fontSize: widthPercentageToDP('3.8%'),
    fontWeight: 'bold',
    color: colors.white,
  },
  artistName:{
    fontWeight: '600',
    fontSize: widthPercentageToDP('3.3%'),
    color: colors.white,
  },
  albumImage:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  time:{
    fontStyle:'italic',
    fontSize: widthPercentageToDP('3.3%'),
    color: colors.white,
  },
  dropShadow: {
    backgroundColor: colors.grey,
    shadowColor: colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  previewBtn:{
    position:'absolute',
    resizeMode:'contain',
    right:10,
    alignSelf:'center',
    borderColor: colors.black,
    borderRadius: 16,
    borderWidth: 0.5,
    padding: 8,
    backgroundColor: colors.theme,
    opacity: 0.8,

  },
  previewTxt:{
      fontWeight: '500',
      color: colors.white,
  }

});

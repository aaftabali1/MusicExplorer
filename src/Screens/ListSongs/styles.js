import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';
import {
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
  },
  item: {
    flex: 1, 
    padding:10,
    marginBottom:10,
    borderRadius: 8,
    flexDirection:'row'
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
  playBtn:{
    position:'absolute',
    resizeMode:'contain',
    right:0,
    alignSelf:'center',
    height:50,
    width:50
  }

});

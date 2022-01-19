import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import colors from '../../Constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  albumBox: {
    backgroundColor:colors.white,
    marginTop: '10%',
    height: '50%',
    width: '85%',
    alignSelf: 'center',
    borderRadius:10
  },
  artwork: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  songName: {
    fontWeight: '600',
    fontSize: widthPercentageToDP('4%'),
    color: colors.black,
    textAlign: 'center',
  },
  artistName: {
    fontWeight: '600',
    fontSize: widthPercentageToDP('3.3%'),
    color: colors.black,
    textAlign: 'center',
  },
  trackDetails: {
    width: '85%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    opacity: 0.7,
    marginBottom: 20,
  },
  dropShadow: {
    backgroundColor: colors.white,
    shadowColor: colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  playBtn: {
    height: 80,
    width: 80,
  },
  nextBtn: {
    height: 40,
    width: 40,
  },
  prevBtn: {
    height: 40,
    width: 40,
  },
  forwardBtn: {
    height: 20,
    width: 20,
  },
  backwardBtn: {
    height: 20,
    width: 20,
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

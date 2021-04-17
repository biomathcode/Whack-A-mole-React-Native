import {Dimensions} from 'react-native';

export default Constants = {
    MAX_WIDTH : Dimensions.get('screen').width,
    MAX_HEIGTH : Dimensions.get('screen').height,
    XR: Dimensions.get('screen').width/ 650,
    YR: Dimensions.get('screen').height/ 1024,
}
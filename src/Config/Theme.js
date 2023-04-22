import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 813;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const Colors = {
    TEXT_COLOR : '#172b4d',
    PRIMARY_COLOR : '#0065ff',
    GREY_COLOR : '#8f99aa',
    LIGHT_GRAY_COLOR : '#e6e7eb',
    WHITE : '#FFFFFF',
    BLACK : '#000000'
}

const Fonts = {
    SEMI_BOLD : 'Poppins-SemiBold',
    BOLD : 'Poppins-Bold',
    REGULAR : 'Poppins-Regular',
    MEDIUM : 'Poppins-Medium',
    EXTRA_BOLD : 'Poppins-ExtraBold',
    BLACK : 'Poppins-Black'
}

export {
    Colors,
    Fonts,
    scale,
    moderateScale,
    verticalScale
}
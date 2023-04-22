import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FacebookLogo } from '../Assets/Images';
import { Colors, moderateScale } from '../Config/Theme';

const FacebookLoginButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
    >
      <Image
        source={FacebookLogo}
        style={{
          width: '23%',
          height: undefined,
          aspectRatio: 1
        }}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  )
}

export default FacebookLoginButton

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    height: undefined,
    aspectRatio: 2.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.GREY_COLOR,
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(18)
  }
})
import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CommonContainer from '../Component/CommonContainer';
import CustomInputComponent from '../Component/CustomInputComponent';
import GoogleLoginButton from '../Component/GoogleLoginButton';
import FacebookLoginButton from '../Component/FacebookLoginButton';
import AppleLoginButton from '../Component/AppleLoginButton';
import { SignupImage } from '../Assets/Images/index';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { LockIcon, MailIcon, MaskIcon, OfficeIcon, BackIcon } from '../Assets/Icons';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {

  const navigation = useNavigation();
  const [details, setDetails] = useState({
    mail: '',
    password: '',
    name: '',
    companyName: ''
  })

  return (
    <CommonContainer>
      <View style={{ flex: 1 }}>

        <TouchableOpacity
          style={{
            position : 'absolute',
            top : 18,
            left : 8,
            zIndex : 100
          }}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          accessibilityRole={'button'}
        >
          <BackIcon />
        </TouchableOpacity>

        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          <View>
            <Image
              source={SignupImage}
              style={{
                width: '90%',
                height: undefined,
                aspectRatio: 1.1,
                alignSelf: 'center'
              }}
              resizeMode={'contain'}
            />
          </View>

          <View>
            <View>
              <Text style={styles.loginText}>Sign up</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: moderateScale(15) }}>
              <GoogleLoginButton />
              <FacebookLoginButton />
              <AppleLoginButton />
            </View>

            <View style={{ marginTop: moderateScale(10), alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.commonStyle}>Or register with email</Text>
            </View>

            <View style={{ marginVertical: moderateScale(8) }}>
              <CustomInputComponent
                icon={MailIcon}
                value={details.mail}
                onChangeValue={(e) => setDetails((prev) => ({ ...prev, mail: e }))}
                placeholder={'Email ID'}
                keyboard={'email-address'}
              />
            </View>

            <View style={{ marginVertical: moderateScale(8) }}>
              <CustomInputComponent
                icon={LockIcon}
                value={details.password}
                onChangeValue={(e) => setDetails((prev) => ({ ...prev, password: e }))}
                placeholder={'Password'}
                isPassword={true}
              />
            </View>

            <View style={{ marginVertical: moderateScale(8) }}>
              <CustomInputComponent
                icon={MaskIcon}
                value={details.name}
                onChangeValue={(e) => setDetails((prev) => ({ ...prev, name: e }))}
                placeholder={'Full Name'}
              />
            </View>

            <View style={{ marginVertical: moderateScale(8) }}>
              <CustomInputComponent
                icon={OfficeIcon}
                value={details.companyName}
                onChangeValue={(e) => setDetails((prev) => ({ ...prev, companyName: e }))}
                placeholder={'Company name'}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.6}
              onPress={() => console.log('ooooo')}
            >
              <Text style={styles.buttonContainerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </CommonContainer>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  loginText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: moderateScale(27),
    color: Colors.TEXT_COLOR,
    marginHorizontal: moderateScale(10)
  },
  forgotPassword: {
    fontFamily: Fonts.MEDIUM,
    fontSize: moderateScale(12),
    textAlign: 'right',
    color: Colors.PRIMARY_COLOR
  },
  buttonContainer: {
    backgroundColor: Colors.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(46),
    width: '98%',
    alignSelf: 'center',
    marginVertical: moderateScale(8),
    borderRadius: moderateScale(12)
  },
  buttonContainerText: {
    fontFamily: Fonts.SEMI_BOLD,
    color: Colors.WHITE,
    bottom: -1,
    fontSize: moderateScale(15),
    textAlign: 'center'
  },
  commonStyle: {
    fontFamily: Fonts.REGULAR,
    fontSize: moderateScale(13),
    color: Colors.GREY_COLOR,
    textAlign: 'center'
  },
  commonTextStyle: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: moderateScale(13),
    marginHorizontal: moderateScale(2)
  }
})
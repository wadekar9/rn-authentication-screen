import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CommonContainer from '../Component/CommonContainer';
import CustomInputComponent from '../Component/CustomInputComponent';
import GoogleLoginButton from '../Component/GoogleLoginButton';
import FacebookLoginButton from '../Component/FacebookLoginButton';
import AppleLoginButton from '../Component/AppleLoginButton';
import { LoginImage } from '../Assets/Images/index';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { LockIcon, MailIcon } from '../Assets/Icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();
    const [details, setDetails] = useState({
        mail : '',
        password : ''
    })

    return (
    <CommonContainer>
        <View style={{flex : 1}}>
            <ScrollView
                style={{flex : 1}}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Image
                        source={LoginImage}
                        style={{
                            width : '90%',
                            height : undefined,
                            aspectRatio : 1.1,
                            alignSelf : 'center'
                        }}
                        resizeMode={'contain'}
                    />
                </View>

                <View>
                    <View>
                        <Text style={styles.loginText}>Login</Text>
                    </View>

                    <View style={{marginVertical : moderateScale(8)}}>
                        <CustomInputComponent
                            icon={MailIcon}
                            value={details.mail}
                            onChangeValue={(e) => setDetails((prev) => ({ ...prev, mail : e }))}
                            placeholder={'Email ID'}
                            keyboard={'email-address'}
                        />
                    </View>

                    <View style={{marginVertical : moderateScale(8)}}>
                        <CustomInputComponent
                            icon={LockIcon}
                            value={details.password}
                            onChangeValue={(e) => setDetails((prev) => ({ ...prev, password : e }))}
                            placeholder={'Password'}
                            isPassword={true}
                        />
                    </View>

                    <TouchableOpacity
                        style={{
                            alignSelf : 'flex-end',
                            margin : moderateScale(8)
                        }}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.forgotPassword}>Forgot ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        activeOpacity={0.6}
                        onPress={() => console.log('ooooo')}
                    >
                        <Text style={styles.buttonContainerText}>Login</Text>
                    </TouchableOpacity>

                    <View style={{marginVertical : moderateScale(10),alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.commonStyle}>Or login with....</Text>
                    </View>

                    <View style={{flexDirection : 'row',alignItems : 'center',justifyContent:'space-evenly',marginVertical : moderateScale(8)}}>
                        <GoogleLoginButton/>
                        <FacebookLoginButton/>
                        <AppleLoginButton/>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginVertical: moderateScale(10)}}>
                        <View>
                            <Text style={[styles.commonTextStyle, { color : Colors.GREY_COLOR }]}>New to App ?</Text>
                        </View>
                        <TouchableOpacity
                            accessibilityRole={'button'}
                            activeOpacity={0.7}
                            onPress={() => navigation.navigate('SigninScreen')}
                        >
                            <Text style={[styles.commonTextStyle, { color : Colors.PRIMARY_COLOR }]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    </CommonContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginText : {
        fontFamily : Fonts.SEMI_BOLD,
        fontSize : moderateScale(27),
        color : Colors.TEXT_COLOR,
        marginHorizontal : moderateScale(10)
    },
    forgotPassword : {
        fontFamily : Fonts.MEDIUM,
        fontSize : moderateScale(12),
        textAlign : 'right',
        color : Colors.PRIMARY_COLOR
    },
    buttonContainer : {
        backgroundColor : Colors.PRIMARY_COLOR,
        alignItems : 'center',
        justifyContent : 'center',
        height : moderateScale(46),
        width : '98%',
        alignSelf : 'center',
        marginVertical : moderateScale(8),
        borderRadius : moderateScale(12)
    },
    buttonContainerText : {
        fontFamily : Fonts.SEMI_BOLD,
        color : Colors.WHITE,
        bottom : -1,
        fontSize : moderateScale(15),
        textAlign : 'center'
    },
    commonStyle : {
        fontFamily : Fonts.REGULAR,
        fontSize : moderateScale(13),
        color : Colors.GREY_COLOR,
        textAlign : 'center'
    },
    commonTextStyle : {
        fontFamily : Fonts.SEMI_BOLD,
        fontSize : moderateScale(13),
        marginHorizontal : moderateScale(2)
    }
})
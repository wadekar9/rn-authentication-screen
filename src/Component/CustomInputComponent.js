import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../Assets/Icons/index';
import { Colors, Fonts, moderateScale } from '../Config/Theme';

const CustomInputComponent = ({
    icon,
    value,
    onChangeValue,
    placeholder,
    keyboard = 'default',
    isPassword = false
}) => {

    const SideIcon = icon;
    const [hide, setHide] = useState(isPassword)

    return (
        <View style={styles.inputContainer}>
            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                <SideIcon />
            </View>
            <View style={{ flex: 0.9 }}>
                <TextInput
                    value={value}
                    onChangeText={onChangeValue}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.GREY_COLOR}
                    cursorColor={Colors.PRIMARY_COLOR}
                    style={styles.inputStyle}
                    keyboardType={keyboard}
                    secureTextEntry={hide}
                />

                {
                    (isPassword) ?
                        <TouchableOpacity 
                            style={styles.container}
                            onPress={() => setHide(!hide)}
                            activeOpacity={0.7}
                        >
                            {hide ? <EyeIcon /> : <EyeOffIcon />}
                        </TouchableOpacity>
                        : null
                }
            </View>
        </View>
    )
}

export default CustomInputComponent

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: moderateScale(48),
        marginHorizontal: moderateScale(5),
        borderBottomWidth: 0.8,
        borderColor: Colors.GREY_COLOR
    },
    inputStyle: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.TEXT_COLOR,
        fontSize: moderateScale(13.4),
        bottom: -1
    },
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        top: 0,
        bottom: 0
    }
})
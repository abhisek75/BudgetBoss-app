import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScreenWrapperProps } from '@/types';
import { colors } from '@/constants/theme';

const {height} = Dimensions.get('window');

const ScreenWrapper = ({style, children}: ScreenWrapperProps) => {
    // Moto Edge 50 Fusion specific padding
    // Using Platform.select for more precise control
    const paddingTop = Platform.select({
        ios: height * 0.06,
        android: Number(Platform.Version) > 23 ? 40 : 50, // Adjusted for Moto Edge 50 Fusion
    });

    return (
        <View style={[{
            paddingTop,
            flex: 1,
            backgroundColor: colors.neutral900
        }, style]}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor={colors.neutral900} // Adding background color for Android
                translucent={true}
            />
            {children}
        </View>
    );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
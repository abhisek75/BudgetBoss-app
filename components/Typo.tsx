import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { colors } from '@/constants/theme';
import { TypoProps } from '@/types';
import { verticalScale } from '@/utils/styling';

const Type = ({
    size,
    color = colors.text,
    fontWeight = '400',
    children,
    style,
    textProps = {},
} : TypoProps ) => {
    const textStyle : TextStyle = {
      fontSize : size? verticalScale(size): verticalScale(18)
    }
     return <Text style = {[style]}>Type</Text>
};

export default Type;

const styles = StyleSheet.create({});
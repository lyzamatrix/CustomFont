import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CustomText extends Component {
  setFontType = type => {
    switch (type) {
        case 'black':
            return 'Poppins-Black';
            case 'black-italic':
            return 'Poppins-BlackItalic';
            case 'bold':
            return 'Poppins-Bold';
            case 'bold-italic':
            return 'Poppins-BoldItalic';
            case 'extra-bold':
            return 'Poppins-ExtraBold';
            case 'extra-bold-italic':
            return 'Poppins-ExtraBoldItalic';
            case 'extra-light':
            return 'Poppins-ExtraLight';
            case 'extra-light-italic':
            return 'Poppins-ExtraLightItalic';
            case 'italic':
            return 'Poppins-Italic';
            case 'light':
            return 'Poppins-Light';
            case 'light-italic':
            return 'Poppins-LightItalic';
            case 'Medium':
            return 'Poppins-Medium';
            case 'regular':
            return 'Poppins-Regular';
            case 'semi-bold':
            return 'Poppins-SemiBold';
            case 'semi-bold-italic':
            return 'Poppins-SemiBoldItalic';
            case 'thin':
            return 'Poppins-Thin';
            case 'thin-italic':
            return 'Poppins-Thin-Italic';
    }
  };

  render() {
    const font = this.setFontType(this.props.type ? this.props.type : 'normal');
    const style = [{ fontFamily: font }, this.props.style || {}];
    const allProps = Object.assign({}, this.props, { style: style });
    return <Text {...allProps}>{this.props.children}</Text>;
  }
}
export default CustomText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
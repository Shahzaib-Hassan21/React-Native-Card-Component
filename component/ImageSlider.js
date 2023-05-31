/* eslint-disable prettier/prettier */
import { View, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import Timer from './Timer';
import Swiper from 'react-native-swiper';

const ImageSlider = () => {
  return (
  <Swiper>
   <View style={styles.container}>
     <Timer/>
     <Image style={styles.image}source={require('../assets/estateimage1.jpeg')}
     />
     <Text style={styles.textA}>
      Sotheby's
     </Text>
     <Text style={styles.smallText}>
      INTERNATIONAL REALITY
     </Text>
     <Text style={styles.monText}>
     ₤₤55,000,000 GBP
     </Text>
     <Text style={styles.sliderText}>
        SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM
     </Text>
     <Text style={styles.sliderText2}>
     #ZM861234567
     </Text>
   </View>
   <View style={styles.container}>
     <Timer/>
     <Image style={styles.image}source={require('../assets/estateimage2.jpeg')}
     />
     <Text style={styles.textA}>
      Sotheby's
     </Text>
     <Text style={styles.smallText}>
      INTERNATIONAL REALITY
     </Text>
     <Text style={styles.monText}>
     ₤₤55,000,000 GBP
     </Text>
     <Text style={styles.sliderText}>
        SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM
     </Text>
     <Text style={styles.sliderText2b}>
     #ZM861234567
     </Text>
   </View>
   </Swiper>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
      container: {
        flex:1,
        marginVertical: 1,
        marginTop: 25,
        padding: 16,
        top: 6,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 300,
        height: '115%',
        borderTopStartRadius: 7,
      },
      sliderText: {
            position: 'absolute',
            color: '#f8f8ff',
            fontSize: 7.5,
            bottom: 5,
            paddingRight: 49,
            marginBottom: 10,
      },
      sliderText2: {
        position: 'absolute',
        color: '#f8f8ff',
        fontSize: 7.5,
        bottom: 5,
        paddingLeft: 220,
      },
      sliderText2b: {
        position: 'absolute',
        color: '#f8f8ff',
        fontSize: 7.5,
        bottom: 5,
        paddingLeft: 220,
        fontWeight: 'bold',
      },
      monText: {
        position: 'absolute',
        color: '#f8f8ff',
        bottom: 65,
        fontSize: 13,
        paddingRight: 60,
      },
      textA:{
        position: 'absolute',
        color:'#f8f8ff',
        fontWeight: 'bold',
        fontSize: 18,
        bottom: 63,
        paddingLeft: 200,
      },
      smallText: {
        position:'absolute',
        color: '#f8f8ff',
        fontSize: 6.5,
        bottom: 55,
        paddingLeft: 200,
      },
    });

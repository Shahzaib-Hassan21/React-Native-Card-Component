/* eslint-disable prettier/prettier */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import PrimaryButton from './component/PrimaryButton';
import ImageSlider from './component/ImageSlider';

const App = () => {
  return (
    <View style={styles.mainConatiner}>
      <ImageSlider/>
      <PrimaryButton/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainConatiner:{
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 20,
    top: 70,
  },
});

/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
const PrimaryButton = () => {
  return (
    <Pressable style={styles.mainBtn}>
    <View style={styles.button}>
    <View>
     <Text style={styles.text}>₤225.00 GBP</Text>
    </View>
     <View>
     <Text style={styles.text}>BUY ENTRY NOW</Text>
     <Text style={styles.text2}>#ZM861234567</Text>
     </View>
     </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    mainBtn:{
        flex: 1,
        marginHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:'#212121',
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom: 310,
        padding:9,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        width: '97%',
      },
      text:{
        fontSize:17,
        color: '#ffff',
      },
      text2:{
        fontSize:8,
        color:'#ffff',
        textAlign:'right',
      },
}
);

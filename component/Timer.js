/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';


const Timer = () => {
        const [startTime] = useState(new Date());
        const [elapsedTime, setElapsedTime] = useState(0);
        useEffect(() => {
          const interval = setInterval(() => {
            const currentTime = new Date();
            const diff = Math.floor((currentTime - startTime) / 1000);
            setElapsedTime(diff);
          }, 1000);
          return () => {
            clearInterval(interval);
          };
        },);
    const days = Math.floor(elapsedTime / (24 * 60 * 60));
    const hours = Math.floor((elapsedTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((elapsedTime % (60 * 60)) / 60);
    const seconds = elapsedTime % 60;
  return (
    <View style={styles.timer}>
    <View style={styles.innerTimer}>

    <Text style={styles.timerText}>{days}</Text>
    <Text style={styles.label}>Days</Text>
    </View>
    <View style={styles.innerTimer}>

    <Text style={styles.timerText}>{hours}</Text>
    <Text style={styles.label}>Hours</Text>

    </View>
      <View style={styles.innerTimer}>
    <Text style={styles.timerText}>{minutes}</Text>
    <Text style={styles.label}>Minutes</Text>
    </View>
    <View style={styles.innerTimer}>
    <Text style={styles.timerText}>{seconds}</Text>
    <Text style={styles.label}>Seconds</Text>
    </View>
  </View>
  );
};

export default Timer;

const styles = StyleSheet.create({

    timer:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:1,
        position: 'absolute',
        top:1,
        zIndex:1,
      },
      innerTimer:{
        marginHorizontal: 15,
      },
        timerText:{
          fontSize:37,
          textAlign:'center',
          color:'#f8f8ff',
        },
        label:{
          color:'#f8f8ff',
          textAlign:'center',
        },
});

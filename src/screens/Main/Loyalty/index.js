import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
 FlatList,
 TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../Component/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Bottum from "../../../Component/StoreButtomTab";
const Loyalty = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <TouchableOpacity delayPressIn={0} onPress={() => navigation.goBack()}>
          <Image style={styles.img}
            source={require('../../../assets/L.png')}
          />
        </TouchableOpacity>
        <Text
          style={styles.text}>
          {'Loyalty'}
        </Text>

        <View style={{ width: '30%' }} />
        <TouchableOpacity >
        <Image style={styles.img}
            source={require('../../../assets/Fo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity >
        <Image style={styles.img}
            source={require('../../../assets/La.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1,paddingHorizontal:10,paddingVertical:15 }}>
      <View style={styles.card}>
          <View style={styles.main}>


        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:17}}
         placeholder='Enter Loyalty offer name'
         placeholderTextColor='grey'
         />

        </View>
        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:17}}
         placeholder='Numder of Points'
         placeholderTextColor='grey'
         />

        </View>
        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:17}}
         placeholder='Start Date'
         placeholderTextColor='grey'
        
         />

        </View>
        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:17}}
         placeholder='End Date'
         placeholderTextColor='grey'
         />

        </View>
       
        </View>
        <View style={{ marginTop: 20, alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Loyalty1')}
            style={styles.button}>
            <Text style={styles.textbt}>{'Save'}</Text>
          </TouchableOpacity>
          <Text style={{marginLeft:8,marginTop:10,fontSize:11}}>DELETE OFFER</Text>

        </View>
        <View style={{ marginTop: 30 }} />
      </View>
      </ScrollView>
      <StatusBar />
      <Bottum />
    </View>
  );
};
export default Loyalty;


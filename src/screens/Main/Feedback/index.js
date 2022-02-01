import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../Component/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Bottum from "../../../Component/StoreButtomTab";
const Feedback = () => {
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
          {'Feedback'}
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
      <ScrollView style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 0 }}>
      <View style={styles.main}>
            
            <View style={[styles.main1,{borderColor:'#032e63'}]}>
            <Text style={[styles.Text1,{color:'#032e63'}]}>Pending Reply</Text>
            </View>      
        <View style={[styles.main1,{marginLeft:10}]}>
          <Text style={styles.Text1}>Replied</Text>
            </View>

          </View>
        <View style={styles.card}>
         
          <View style={{flexDirection:'row',alignContent:'center',justifyContent:'flex-start',paddingHorizontal:17}}>
         <Text style={{marginTop:5,fontSize:15,color:'#032e63'}}>Milind Shethia</Text>
          <View style={{height:25,width:80,backgroundColor:'#918f90',borderRadius:20,alignItems:'center',justifyContent:'center',marginLeft:10,marginTop:-10}}>
              <Text style={{color:'#fff',fontSize:12}}>PLATINUM</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginTop:15,paddingHorizontal:17}}>
          <Text>+918765467834</Text>
          <Text>23 Sep 2021</Text>
              </View>
         <View style={{ borderWidth:1, marginTop:15, borderColor:'#DDDDDD',}}/>
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:10}}>
           <Text>How was our Jewellery collection</Text>
          <Text>Excellent</Text>

           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:10}}>
           <Text>Staff behavior</Text>
          <Text>Well Behaved</Text>

           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:10}}>
           <Text>Showroom ambience</Text>
          <Text>Proper Jewellery displyed</Text>

           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:10}}>
           <Text>Will vou refer us</Text>
          <Text >Yes</Text>

           </View>
          <View style={{ marginTop: 20, marginHorizontal: 10, }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Messagebox')}
            style={styles.button}>
            <Text style={styles.textbt}>{'Reply'}</Text>
          </TouchableOpacity>
        </View>
      
        </View>
        <View style={[styles.card,{marginTop:10}]}>
        <View style={{flexDirection:'row',alignContent:'center',justifyContent:'flex-start',paddingHorizontal:17}}>
         <Text style={{marginTop:5,fontSize:15,color:'#032e63'}}>Milind Shethia</Text>
          <View style={{height:25,width:80,backgroundColor:'#da9401',borderRadius:20,alignItems:'center',justifyContent:'center',marginLeft:10,marginTop:-10}}>
              <Text style={{color:'#fff'}}>GOLD</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginTop:15,paddingHorizontal:17}}>
          <Text>+918765467834</Text>
          <Text>23 Sep 2021</Text>
              </View>

       </View>
      < View style={[styles.card,{marginTop:10}]}>
      <View style={{flexDirection:'row',alignContent:'center',justifyContent:'flex-start',paddingHorizontal:17}}>
         <Text style={{marginTop:5,fontSize:15,color:'#032e63'}}>Avishek Tarafdar</Text>
          <View style={{height:25,width:80,backgroundColor:'#918f90',borderRadius:20,alignItems:'center',justifyContent:'center',marginLeft:10,marginTop:-10}}>
              <Text style={{color:'#fff'}}>SILVER</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginTop:15,paddingHorizontal:17}}>
          <Text>+918765467834</Text>
          <Text>23 Sep 2021</Text>
              </View>

       </View>
      </ScrollView>
      <StatusBar />
      <Bottum />
    </View>
  );
};
export default Feedback;

Data = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
]
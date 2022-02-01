import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
 FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../Component/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Buttom from "../../../Component/StoreButtomTab";
const Mycustomer = () => {
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
          style={ styles.text}>
          {'My Customers'}
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
      <ScrollView style={{ flex: 1}}>
      <View style={styles.blog}>
            <Image style={styles.img1}
              source={require('../../../assets/search1.png')}
            />
            <TextInput
              style={{marginLeft: 10}}
              placeholder="Search by Name or Phone Number"
              placeholderTextColor='grey'
              value={Data}
             // onChangeText={val => searchFilterFunction(val)}
              style={{color: 'grey', width: '70%'}}
              returnKeyType="done"
            />
          </View>
          <FlatList
              data ={Data}
              renderItem={({item}) =>(
          <View style={styles.Flatlist}>
           {/* <Text style={{marginLeft:10,fontSize:15,fontWeight:'500',}}>{item.id}</Text> */}
           <Text style={{marginLeft:10,fontSize:15,color:'grey',}}>{item.label}</Text>
           <Text style={{marginLeft:10,fontSize:15,color:'grey',justifyContent:'center'}}>{item.value}</Text>
     </View>
     )}
     
     
     />
     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:100}}>
     <View style={{width:'80%'}}/>
     <View style={{backgroundColor:'#052a47',borderRadius:25,height:50,width:50,justifyContent:'center',alignItems:'center'}}>
       
        <Text style={{fontSize:40,color:'white',marginBottom:10}}
        onPress={()=>navigation.navigate('Feedback')}
        >{'+'}</Text>
     </View>
     </View>
      </ScrollView>
      <StatusBar />
      <Buttom />
    </View>
  );
};
export default Mycustomer ;

Data = [
  { label: 'Milind Sethia', value: '+918765467834' },
  { label: 'Manish Ranka', value: '+918765467834' },
  { label: 'Atul Bhargawa', value: '+918765467834' },
]
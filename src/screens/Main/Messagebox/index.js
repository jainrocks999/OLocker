import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
 FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../Component/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Bottum from "../../../Component/StoreButtomTab";
const Messagebox = () => {
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
          {'Message Box'}
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
      <ScrollView style={{ flex: 1, }}>
      <View style={[styles.main,{paddingHorizontal:20,paddingVertical:15}]}>
            
            <View style={[styles.main1,{borderColor:'#032e63',}]}>
            <Text style={[styles.Text1,{color:'#032e63'}]}>Business</Text>
            </View>      
        <View style={[styles.main1,{marginLeft:10}]}>
          <Text style={styles.Text1}>Customer</Text>
            </View>
             </View>
             <FlatList
              data ={Data}
              renderItem={({item}) =>(
          <View style={styles.Flatlist}>
           {/* <Text style={{marginLeft:10,fontSize:15,fontWeight:'500',}}>{item.id}</Text> */}
           <Text style={{fontSize:18,color:'#032e63',}}>{item.label}</Text>
           <Text style={{marginTop:10,fontSize:17,}}>{item.value}</Text>
           <Text style={{marginTop:15,fontSize:15,color:'grey',}}>{item.Item}</Text>
     </View>
     )}
     
     
     />
      <View style={{paddingVertical:100,paddingHorizontal:5 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Editprofile')}
            style={styles.button}>
            <Text style={styles.textbt}>{'Send new message'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar />
      <Bottum />
    </View>
  );
};
export default Messagebox;

Data = [
    { label: 'Milind Jewellers', value: 'We can supply the product you have as..' ,
     
    Item:'- Last replied on 07 Sep, 2020'
},
    { label: 'Mahabir Jewellers', value: 'Payment terms can be discussed as per t.',
    Item:'- Last replied on 07 Sep, 2020'
},
    
  ]
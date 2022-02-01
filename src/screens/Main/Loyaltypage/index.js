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
      <ScrollView style={{ flex: 1,paddingHorizontal:10,paddingVertical:0 }}>
      <View style={styles.card}>
         <View style={styles.main}> 
           <Text style={styles.textbt}>Download</Text>
           <Text style={styles.textbt}>100 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}>
         <Text style={styles.textB}>11 Sep 2021</Text>
         <Text style={styles.textC}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.8,borderColor:'grey',paddingVertical:20}}/>
         <View style={{marginTop:10}}>
         <Text style={styles.textB}>10 Oct 2021</Text>
         <Text style={styles.textC}>Start Date</Text>
         </View>   

         </View>
       
      </View>
      <View style={styles.card}>
         <View style={styles.main}> 
           <Text style={styles.textbt}>Referal</Text>
           <Text style={styles.textbt}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}> 
         <Text style={styles.textB}>11 Sep 2021</Text>
         <Text style={styles.textC}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.8,borderColor:'grey',paddingVertical:20}}/>
         <View style={{marginTop:10}}> 
         <Text style={styles.textB}>10 Oct 2021</Text>
         <Text style={styles.textC}>Start Date</Text>
         {/* <View style={{marginTop:10}}></View> */}
         </View>   

         </View>
       
      </View>
      <View style={styles.card}>
         <View style={styles.main2}> 
           <Text style={styles.textbt}>First purchase</Text>
           <Text style={{color:'#fff',marginRight:15}}>Expand</Text>
           <Text style={styles.textbt}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}>
         <Text style={styles.textB}>11 Sep 2021</Text>
         <Text style={styles.textC}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.8,borderColor:'grey',paddingVertical:20}}/>
         <View style={{marginTop:10}}>
         <Text style={styles.textB}>10 Oct 2021</Text>
         <Text style={styles.textC}>Start Date</Text>
         {/* <View style={{marginTop:10}}></View> */}
         </View>   

         </View>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:90,paddingHorizontal:10}}>
     <View style={{}}/>
     <View style={{backgroundColor:'#052a47',borderRadius:35,height:70,width:70,justifyContent:'center',alignItems:'center'}}>
       
        <Text style={{fontSize:40,color:'white',marginBottom:10,fontWeight:'300'}}
        onPress={()=>navigation.navigate('Purchase')}
        >{'+'}</Text>
     
     </View>
      </View>
      </ScrollView>
      <StatusBar />
      <Bottum />
    </View>
  );
};
export default Loyalty;


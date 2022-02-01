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
import Buttom from "../../../Component/StoreButtomTab";
const Addcollection = () => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);
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
          {'Add Collection'}
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
      <ScrollView style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20 }}>
        <View style={styles.card}>
          <View style={styles.main}>
            <Text style={styles.Text1}>Collection</Text>
            <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter name'
                placeholderTextColor='black'

              />

            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Status</Text>
          <View style={styles.main1}>

              <RNPickerSelect
                items={Data}
                style={{
                  inputAndroid: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  inputIOS: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
                }}
                value={Data}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Active', value: null }}
                Icon={() => (
                  <Image style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
            </View>

          </View>
           <View style={[styles.card1,{marginTop:20}]}>
             <View style={styles.bottom}>
              <View style={styles.bottomV} >
               <Text style={styles.textB}>ADD</Text>
               <Text style={styles.textC}>PHOTO</Text>
              </View>
              <View style={styles.bottomV} >
               <Text style={styles.textB}>SELECT</Text>
               <Text style={styles.textC}>TEMPLATE</Text>
              </View>
             </View>

           </View>
           <View style={{alignItems:'center',marginBottom:30}}>
           <Text style={{fontSize:13,color:'grey',}}>Upload banner in 0000(H) * 0000(W) Dimention</Text>
           </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 90, }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Mycustomer')}
            style={styles.button}>
            <Text style={styles.textbt}>{'Save'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar />
      <Buttom />
    </View>
  );
};
export default Addcollection;

Data = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
]
import React, { useEffect } from 'react';
import { View, Text, Image ,TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Login = () => {
    const navigation = useNavigation()
   
    return (
        <View style={styles.container}>
            
            <View style={{backgroundColor:'#052a47',paddingVertical:50,alignItems:'center',
             borderBottomEndRadius:100,borderBottomStartRadius:100
           }}> 
            <Image style={{marginTop:40}}
                source={require('../../../assets/ol.png')} /> 
              
                </View>
                <View style={styles.card}> 
            <View style={styles.view}>
            
                <View style={styles.main}>
              <Text style={styles.text}>Login</Text>
              
              </View>
              <View style={{borderBottomWidth:1,marginHorizontal:270,marginLeft:12}}/>
              <View style={styles.input}>
             
              <Image
                        style={styles.image}
                        source={require('../../../assets/phone.png')}
                      />
             
                  <TextInput style={styles.input1}
                    placeholder='Enter the number'
                    
                   />
              </View>
              
            
              <TouchableOpacity style={{backgroundColor:'pink',alignItems:'center',borderRadius:45,
              justifyContent:'center',marginTop:20,marginHorizontal:45,paddingVertical:20}}
               onPress={()=>navigation.navigate('Addcategory')}
              >

               <Text>GENERATE OTP</Text>
              </TouchableOpacity>

               
              <Image
                        style={{marginTop:10,marginBottom:-20}}
                        source={require('../../../assets/oloc.png')}
                      />
              </View>
            </View> 
        </View>
    )
}
export default Login;
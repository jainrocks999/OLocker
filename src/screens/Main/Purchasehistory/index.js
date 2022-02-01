import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../Component/StatusBar';
import styles from './styles';
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
                    {'Purchase History'}
                </Text>

                <View style={{ width: '15%' }} />
                <TouchableOpacity onPress={()=>navigation.navigate('Chat')} >
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
                <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                    <Text style={styles.Text1}>
                    11 items purchased
                    </Text>
                </View>
               <View style={styles.main}>
                <View style={styles.main1}></View>
                <View>
                    <Text style={styles.textB}>ITEM ID KJHYUY86H</Text>
                    <Text style={styles.textC}>Purchase date 01-03-2020</Text>
                </View>
                <View>
                    <Text style={styles.textB}>{'₹ 32000 '}
                   
                    </Text>
                </View>
               </View>
               <View style={[styles.main,{marginTop:20}]}>
                <View style={styles.main1}></View>
                <View>
                    <Text style={styles.textB}>ITEM ID LKU839840</Text>
                    <Text style={styles.textC}>Purchase date 01-03-2020</Text>
                </View>
                <View>
                    <Text style={styles.textB}>{'₹ 122000 '}
                   
                    </Text>
                </View>
               </View>
            </ScrollView>
            <StatusBar />
            <Bottum />
        </View>
    );
};
export default Messagebox;

Data = [
    {
        label: 'ITEM ID KJHYUY86H', value: 'Purchase date 01-03-2020',

        Item: '- Last replied on 07 Sep, 2020'
    },
    {
        label: 'ITEM ID LKU839840', value: 'Purchase date 01-03-2020',
        Item: '- Last replied on 07 Sep, 2020'
    },

]
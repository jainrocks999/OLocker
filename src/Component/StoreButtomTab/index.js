import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const BottomTab = () => {
  const navigation = useNavigation();

  const renderHome = () => {
    return (
      <View style={styles.container}>
        <View style={{width: 30}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/For.png')}
          />
        </View>
        {/* <Text style={[styles.text, {marginTop: 0}]}>{'HOME'}</Text> */}
      </View>
    );
  };

  const renderBank = () => {
    return (
      <View style={styles.container}>
        <View style={{width: 30}}>
        <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/Lay.png')}
          />
        </View>
        {/* <Text style={styles.text}>{'BANK HOLIDAY'}</Text> */}
      </View>
    );
  };
  const renderKnowledge = () => {
    return (
      <View style={styles.container}>
        <View style={{width: 30}}>
        <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/Sh.png')}
          />
        </View>
        {/* <Text style={styles.text}>{'KNOWLEDGE CE...'}</Text> */}
      </View>
    );
  };
  const renderTrending = () => {
    return (
      <View style={styles.container}>
        <View style={{width: 30}}>
        <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/Sh.png')}
          />
        </View>
        {/* <Text style={styles.text}>{'TRENDING'}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity
        delayPressIn={0}
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        {renderHome()}
      </TouchableOpacity>

      <TouchableOpacity
        delayPressIn={0}
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('BankHoliday');
        }}>
        {renderBank()}
      </TouchableOpacity>

      <TouchableOpacity
        delayPressIn={0}
        style={styles.bottomTabContainer}
        onPress={() => navigation.navigate('KnowledgeCenter')}>
        {renderKnowledge()}
      </TouchableOpacity>

      <TouchableOpacity
        delayPressIn={0}
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Trending');
        }}>
        {renderTrending()}
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

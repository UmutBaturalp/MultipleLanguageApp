import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings = props => {
  const {t, i18n} = useTranslation();
  const {navigation} = props;
  const [language, setLanguage] = useState('tr');
  const saveLanguage = async language => {
    try {
      await AsyncStorage.setItem('language', language);
      i18n.changeLanguage(language);
      setLanguage(language);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Go to Home</Text>
        <Text>{i18n.language}</Text>
        <TouchableOpacity onPress={() => saveLanguage('en')}>
          <Text>Change Language EN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveLanguage('tr')}>
          <Text>Change Language TR</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

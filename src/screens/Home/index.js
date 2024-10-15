import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = props => {
  const {t, i18n} = useTranslation();
  const {navigation} = props;

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('language');
        if (savedLanguage !== null) {
          i18n.changeLanguage(savedLanguage);
          console.log('saved language : ', savedLanguage);
        }
      } catch (e) {
        console.log(e);
      }
    };

    loadLanguage();
    console.log(i18n.language);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Text>Go to Settings</Text>
        <Text>{t('welcome')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

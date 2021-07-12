import React, {ReactNode} from 'react';
import {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../Common/Header';

/** Tab1 */
const Tab2: React.VFC = () => {
  const navigation = useNavigation();
  const right: ReactNode = useMemo(() => {
    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          navigation.navigate('Stack2');
        }}>
        <Text>Fuga</Text>
      </TouchableOpacity>
    );
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <Header title="Tab2" right={right} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#8ec6ff',
        }}>
        <Text style={{textAlign: 'center'}}>This Screen is Tab2.</Text>
      </View>
    </View>
  );
};

export default Tab2;

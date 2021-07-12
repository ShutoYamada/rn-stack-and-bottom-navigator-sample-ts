import React, {ReactNode} from 'react';
import {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../Common/Header';

/** Tab1 */
const Tab1: React.VFC = () => {
  const navigation = useNavigation();
  const right: ReactNode = useMemo(() => {
    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          navigation.navigate('Stack1');
        }}>
        <Text>Hoge</Text>
      </TouchableOpacity>
    );
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <Header title="Tab1" right={right} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#c9ff93',
        }}>
        <Text style={{textAlign: 'center'}}>This Screen is Tab1.</Text>
      </View>
    </View>
  );
};

export default Tab1;

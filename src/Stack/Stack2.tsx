import React, {ReactNode} from 'react';
import {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../Common/Header';

/** Stack2 */
const Stack2: React.VFC = () => {
  const navigation = useNavigation();
  const left: ReactNode = useMemo(() => {
    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>戻る</Text>
      </TouchableOpacity>
    );
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <Header title="Stack2" left={left} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#cc99ff',
        }}>
        <Text style={{textAlign: 'center'}}>This Screen is Stack2.</Text>
      </View>
    </View>
  );
};

export default Stack2;

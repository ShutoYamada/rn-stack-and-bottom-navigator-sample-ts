import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  /** ヘッダに表示するタイトル */
  title: string;
  /** ヘッダ左側の要素 */
  left?: React.ReactNode;
  /** ヘッダ右側の要素 */
  right?: React.ReactNode;
};

/**
 * オリジナルのヘッダコンポーネント
 * @param props
 * @returns
 */
const Header: React.VFC<Props> = props => {
  const {title, left, right} = props;
  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{flex: 0.25}}>{left}</View>
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          alignItems: 'center',
        }}>
        {title ?? ''}
      </Text>
      <View style={{flex: 0.25}}>{right}</View>
    </View>
  );
};

export default Header;

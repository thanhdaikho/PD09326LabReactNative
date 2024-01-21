import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Alert,
  RefreshControl,
  StatusBar,
  StatusBarStyle,
} from 'react-native';
import data from '../../../data';
import FlatListItem from '../../components/FlatListItem';

const Index = () => {
  const [barStyle, setBarStyle] = useState<StatusBarStyle>('light-content');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setBarStyle('dark-content');
    if (barStyle === 'dark-content') {
      setBarStyle('light-content');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} backgroundColor={'transparent'} />
      <FlatList
        data={data}
        renderItem={({ item }) => <FlatListItem item={item} />}
        keyExtractor={(item) => item.email}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});

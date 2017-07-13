import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  FlatList,
  StyleSheet,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CarDetail from './CarDetail';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ITSC CARS',
  };
  render() {
    const data = [
      { id: 0, name: 'Sheraton Bus', Route: 'From Sheraton To Doki ', Timing: 'morning at 8AM / Afternoon at 4PM', Driver_Name: 'Mohsen said', status: Math.random() > 0.5 ? 'On' : 'off' },
      { id: 1, name: 'Giza Bus', Route: 'From Giza To Doki', Timing: 'morning at 8AM / Afternoon at 4PM', Driver_Name: 'Mohsen said', status: Math.random() > 0.5 ? 'On' : 'off' },
      { id: 2, name: 'Shobra Bus', Route: 'From Shobra To Doki', Timing: 'morning at 8AM / Afternoon at 4PM', Driver_Name: 'Mohsen said', status: Math.random() > 0.5 ? 'On' : 'off' },
      { id: 3, name: 'Helwan Bus', Route: 'From Helwan To Doki', Timing: 'morning at 8AM / Afternoon at 4PM', Driver_Name: 'Mohsen said', status: Math.random() > 0.5 ? 'On' : 'off' }
    ];

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={(item) => {
            return (
              <View key={item.item.id}>
                <Text>{item.item.name}</Text>
                 <Text>{item.item.status}</Text>
                <Button
                  onPress={() => navigate('CarDetail', { data: item })}
                  title="Car Details"
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 70,
    height: 44,
  },
});
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  CarDetail: { screen: CarDetail }
});


AppRegistry.registerComponent('itsc_team', () => SimpleApp);





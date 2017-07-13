import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class CarDetail extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: 'Bus Details',
  });
  
render() {

    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text>The Name {params.data.item.name}</Text>

        <Text> The Route : {params.data.item.Route}</Text>

        <Text> The Timing is {params.data.item.Timing}</Text>

        <Text> Driver Name : {params.data.item.Driver_Name}</Text>

        <Text> Status is : {params.data.item.status}</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   
  },
  item: {
    padding: 10,
    fontSize: 70,
    height: 44,
  },
});
export default CarDetail;

import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    View,
    FlatList, Text,TouchableHighlight,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
const HomeScreen = ({ navigation }) => {
    goToNextScreen = (name) => {
        const newData = {user:name}
        navigation.navigate('Details', newData)
    }
   
    var jsonData = [
        { "image": 1, "name": "MAry" },
        { "image": 2, "name": "Vineeth" },
        { "image": 2, "name": "Vineesh" }
    ];
    const users = jsonData.map(function (item) {
        return {
            img: item.image,
            usr: item.name
        };
    });
    return (
        <View style={styles.body}>
            <FlatList data={users}
              renderItem={({item}) => {
                return(
                  <TouchableHighlight onPress={() => goToNextScreen(item.usr)}>
                       <Text style={styles.listitem}>{item.usr}</Text>
                  </TouchableHighlight>
                )
              }
            }
            ></FlatList>
        </View>

    );
};

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    listitem: {
        padding: 27,
        color: Colors.dark,
        fontSize: 12,
        paddingRight: 12,
        textAlign: 'center',
    },


});
export default HomeScreen;
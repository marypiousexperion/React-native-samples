import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    View,
     Text,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
const DetailsScreen = ({ navigation,route }) => {
    const {user} = route.params
    return (
        <View style={styles.body}>
          <Text >{JSON.stringify(user)}</Text>
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
export default DetailsScreen;
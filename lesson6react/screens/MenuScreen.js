import React from "react";
import { View,Text,StyleSheet,Button,TouchableOpacity } from "react-native-web";

const MenuScreen = (props) =>{
    return(
        <View>
            <Text style={StyleSheet.text}>
                Welcome To Menu Screen

            </Text>
                <Button
                    title="Go to List Screen"
                    color="green"
                    onPress={() => props.navigation.navigate('List')}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        textAlign: 'center',
        marginVertical:20,
        fontSize:20
    }
});
export default MenuScreen;
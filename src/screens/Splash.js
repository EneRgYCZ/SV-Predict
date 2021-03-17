import React, { useRef } from 'react'
import {
    View,
    Image,
    Animated,
    StyleSheet,
} from 'react-native'

const Splash = ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver : false
    }).start();

    setTimeout(() =>{
        navigation.navigate('Main');
    }, 1500)

    return (

        <Animated.View style={[styles.Alignment, {opacity: fadeAnim} ]}>
            <Image
                source={require('../images/logo.png')}
                style={{ width: 400, borderRadius: 10, height: 400 }}
            />
      </Animated.View>
    );
};

const styles = StyleSheet.create({
    Alignment : {
        flex : 1,
        justifyContent : 'center',
        alignContent : 'center',
        alignItems : 'center'
    }
});

export default Splash;
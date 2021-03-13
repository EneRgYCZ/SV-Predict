import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import firebase from 'firebase'
import { AntDesign } from '@expo/vector-icons'; 

const GraphVisualization = ({ navigation }) => {

    const Title = navigation.getParam('id');

    return (
        <View style = {styles.Main}>
            <TouchableOpacity onPress={() => navigation.navigate('Main', {id : Title})}>
                <AntDesign name='back' size = {40} />
            </TouchableOpacity>
            <View style = {styles.header}>
                <Text style = {styles.TitleText}>
                    {Title}
                </Text>
                <Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header : {
        flex : 1,
        alignSelf : 'center'
    }, 

    Main : {
        paddingTop: 60,
    }, 

    TitleText : {
        fontSize : 35,
        fontWeight: 'bold',
    }
});

export default GraphVisualization;
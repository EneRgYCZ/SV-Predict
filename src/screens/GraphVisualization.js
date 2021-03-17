import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const data = []; 

const GraphVisualization = ({ navigation }) => {

    const Title = navigation.getParam('id');
    const number = Math.floor(Math.random() * 99999);  

    data.push ([Title, number])

    return (
        <View style = {styles.Main}>
            <TouchableOpacity onPress={() => navigation.navigate('Main', { data : data })}>
                <AntDesign name='back' size = {40} />
            </TouchableOpacity>
            <View style = {styles.header}>
                <Text style = {styles.TitleText}>
                    {Title}
                </Text>
                <Text>
                    {number}
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
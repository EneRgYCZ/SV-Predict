import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Form = ({ navigation }) => {



    return(
        <View style = {{ paddingHorizontal : 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('GraphVisualization')}>
                <View
                    style={{
                        backgroundColor: "#FEFEFE",
                        height: 200,
                        width: 190,
                        borderRadius: 15,
                        padding: 5,
                    }}
                >
                    <Image
                        source={require("../images/3.jpg")}
                        style={{ width: 180, borderRadius: 10, height: 130 }}
                    />
                    <View
                        style={{ flexDirection: "row", width: 150, alignItems: "center" }}
                    >
                        <View
                            style={{ paddingHorizontal: 5, paddingVertical: 5 }}
                        >
                            <Text
                                style={{ fontSize: 11, color: "#a2a2db", fontWeight: 'bold' }}
                            >
                                3 kile banane
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    }, 

    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }, 

    header : {
        paddingLeft : 10,
        paddingTop: 60,
    },

    button: {
        paddingTop: 30,
    }
});

export default Form;
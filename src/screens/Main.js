import React, { useState , Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import Form from '../components/Form';
import firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler';

const Main = ({ navigation }) => {

    const data  = navigation.getParam('data');

    const onItemSelect = item => {
        console.log('item', item);
    };

    const firebaseConfig = {
        apiKey: "AIzaSyA5iz6HxbTYj1hoNM8Vz2rLOi2oz-GLmjU",
        authDomain: "sv-predict.firebaseapp.com",
        projectId: "sv-predict",
        storageBucket: "sv-predict.appspot.com",
        messagingSenderId: "37721500847",
        appId: "1:37721500847:web:01291220b4c9c9e198f85a",
        measurementId: "G-NLFRW9NHEB"
    };

    if (!firebase.apps.length)
    {
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <>
            <ImageBackground
                source={require("../images/back.png")}
                style={{ width: "100%", height: "100%" }}
            >
                <View style={styles.MainHeader}>
                </View>

                <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
                    <Text style = {styles.GreetingText}>
                        Hello
                    </Text>

                    <Text style = {styles.GreetingSubtext}>
                        Welcome To SV-Predict 
                    </Text>

                    <View style={styles.SearchView}>
                        <Image
                            source={require("../images/search.png")}
                            style={{ height: 19, width: 14 }}
                        />
                        <TextInput
                            placeholder = "Search"
                            style={{ paddingHorizontal: 20, fontSize: 15, color: "#6e0dff" }}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.bottom}
                        onPress={() => navigation.navigate('GraphForm')}
                    >
                        <AntDesign name='pluscircle' size={55} />
                    </TouchableOpacity>

                    <Text style={styles.Recomanded}>
                        Recents
                    </Text>

                </View>

                <FlatList
                    data={data}
                    horizontal={true}
                    keyExtractor={data => data.number}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Form

                            />
                        );
                    }}
                />

            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create ({
    MainHeader : {
        paddingTop : 20,
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        paddingHorizontal: 10,
    },

    GreetingText : {
        fontSize: 40,
        color: "#522289",
        fontWeight : 'bold',
    },

    GreetingSubtext : {
        fontSize: 15,
        paddingVertical: 10,
        paddingRight: 80,
        lineHeight: 22,
        color: "#a2a2db",
    },

    SearchView : {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 40,
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 30,
    },

    DirectionButton : {
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 66,
        borderRadius: 50,
        backgroundColor: "#ff5c83",
        marginHorizontal: 22,
    },

    NavigationButtonView : {
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 66,
        borderRadius: 50,
        backgroundColor: "#5facdb",
    },

    DirectionButtonSubView : {
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 66,
        borderRadius: 50,
        backgroundColor: "#bb32fe",
        marginLeft: 22,
    },

    Recomanded : {
        color: "#FFF",
        marginTop: 50,
        fontSize: 17,
        paddingBottom : 15,
    },

    MainTab: { 
        marginHorizontal: -40, 
        marginTop: 30,
    },

    Tab : {
        backgroundColor: "#FEFEFE",
        height: 170,
        width: 190,
        borderRadius: 15,
        padding: 5,
    },

    SubTab : {
        flexDirection: "row",
        width: 150,
        alignItems: "center",
    },

    SubTextView : {
        paddingHorizontal: 5,
        paddingVertical: 5,
    },

    BoxText : {
        fontSize: 11,
        color: "#a2a2db",
    },

    bottom: {
        flex: 1,
        paddingVertical : 15,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent: "flex-start"
    }

});

export default Main;
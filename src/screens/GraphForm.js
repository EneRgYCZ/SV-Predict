import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import firebase from 'firebase'
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const GraphForm = ({ navigation }) => {

    const selectFile = async () => {
        const file = await DocumentPicker.getDocumentAsync();
    };

    const [title, setTitle] = useState('');

    const saveToDatabase = () => {
        firebase.database().ref('/Form')
            .push({ title })
    }

    return (
        <ImageBackground
            source={require("../images/back3.png")}
            style={{ width: "100%", height: "100%" }}
        >
        <View style = {styles.Main}>

            <TouchableOpacity onPress = {() => navigation.navigate('Main')}>
                <AntDesign name='back' size={40} />
            </TouchableOpacity>
            
            <View style = { styles.Header}>
                <Text style={styles.label}>Enter Title:</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <Text style={styles.label}>Load data:</Text>
            </View>
            <View style = {{ paddingTop : 60 }}>
                <TouchableOpacity onPress={() => selectFile()}>
                    <FontAwesome5 name='file-import' size={50} style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('GraphVisualization', { id: title}, saveToDatabase() )}>
                    <Text style={styles.TextButton}>Predict</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1.5,
        borderColor: 'blue',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        borderRadius: 40,
        height : 40,
        color: "#6e0dff",
        paddingHorizontal : 40
    },

    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        alignSelf : 'center'
    },

    Main: {
        justifyContent : 'center',
        paddingTop: 60,
    },

    Header : {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 60,
        paddingHorizontal : 40,
    },

    TextButton : {
        fontSize : 40,
        alignSelf : 'center',
        paddingVertical : 70,
        fontWeight : 'bold'
    }
});

export default GraphForm;
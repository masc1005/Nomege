import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from 'react-native';
import Style from './home-style';
import logo from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import SearchController from '../../Controller/SearchController';


export default function Home({ navigation }) {
    const [name, setName] = useState('');
    const [year, setYear] = useState(0);

    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.body}>
                <Image source={logo} style={{ fillRule: 'evenodd', width: '70%', height: '15%', alignItems: 'center' }} />
                <TextInput placeholder='Digite seu nome (Sem espaço)' onChangeText={(name) => { setName(name); }} placeholderTextColor='#fff' style={Style.input} />
                <TextInput keyboardType='numeric' placeholder='Qual o seu ano de nascimento?' onChangeText={(year) => { setYear(year); }} placeholderTextColor='#fff' style={Style.input} />
                <TouchableOpacity style={Style.button} onPress={() => { SearchController(name, year, navigation); }}>
                    <Text style={Style.buttonText}>
                        Buscar <Feather name="search" color='#2fba' size={17} />
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
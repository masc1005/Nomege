import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import Style from './search-style';
import logo from '../../assets/logo.png';


export default function Search(navigation) {
    const [description, setDescription] = useState('');
    useEffect(() => {
        async function getDescription() {
            setDescription(await AsyncStorage.getItem('description'));
        }

        getDescription();
    }, []);

    return (
        <View style={Style.container}>
            <View style={Style.header}>
                <Image source={logo} style={Style.img} />
            </View>
            <View style={Style.bod}>
                <Text style={Style.text}>{description}</Text>
            </View>
        </View>
    );
}
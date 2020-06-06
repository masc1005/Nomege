import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20afb5',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 20,
    },  
    img: {
        width: 175,
        height: 45,
        paddingLeft: 100
        
    },
    seta: {
        paddingRight: 100
    },  
    bod:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'justify',
        paddingLeft: 75,
        paddingRight: 75
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: '40%',
        textAlign: "justify"
    },

});

export default Style;
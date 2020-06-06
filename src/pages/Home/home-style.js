import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20afb5',
        alignItems: 'center',
        paddingTop: 50,
    },

    textHeader: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: '15%'
    },

    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 24
    },

    input: {
        color: '#fff',
        borderBottomColor: '#fff',
        marginTop: '10%',
        borderBottomWidth: 2,
        width: '75%',
        height: '7%'
    },
    
    buttonText: {
       color: '#20afb5',
       textTransform: 'uppercase',
       fontWeight: 'bold' 
    },

    button: {
        backgroundColor: '#ffffff',
        marginTop: '5%',
        width: '30%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});

export default Style;
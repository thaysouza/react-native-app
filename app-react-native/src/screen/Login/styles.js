import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    fundo: {
        width: '100%',
        height: '150%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#962bff'
    },
    titulo:{
        color: "black",
        fontSize: 15,
        fontWeight: 'bold',

    },
    input: {
        backgroundColor: "white",
        width: "80%",
        margin: 15,
        padding: 5,
        paddingLeft: 5,
        borderBottomColor: '#ae78e3',
        borderBottomWidth: 2,
        marginBottom: 30
    
    },
    btn:{
        marginTop: 10,
        borderRadius: 10,
        height: 50,
        width: 300,
        backgroundColor: "#f5cb42",
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    fundoCard: {
        width: 350,
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 5,
       
    },
    img:{
        width: 120,
        height: 120, 
    }
})

export default styles
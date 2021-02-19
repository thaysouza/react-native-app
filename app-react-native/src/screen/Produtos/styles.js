import { StyleSheet } from 'react-native'

const css = StyleSheet.create({
     sair:{
      textAlign: 'center',
      margin: 5,
      width: 60,
      padding: 10,
      borderRadius:5 ,
      backgroundColor: "white",
     },
     textosair:{
      fontSize: 15,  
      fontWeight: 'bold',
    
     },
    fundo:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#962bff',
      
      },
      card:{
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        
      },
      cardlivro:{
        padding:20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor: '#e0e0e0',  
       width:260,
       height:350,
       borderBottomColor: 'white',
       borderBottomWidth: 8,
      },
      h1: {
        fontSize: 25,
        color:'white'
      
      },
      nome:{
        fontSize: 20,
        color: '#80cbc4'
      },
      img: {
        width: 150,
        height:180,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      btn:{
        textAlign: 'center',
        margin: 5,
        width: 100,
        padding: 10,
        borderRadius:5 ,
        backgroundColor: "#80cbc4",
        
        
      },
      texto:{
        fontSize: 10,  
        fontWeight: 'bold',
        color: "#263238",
      
      }
    
    
    })

export default css
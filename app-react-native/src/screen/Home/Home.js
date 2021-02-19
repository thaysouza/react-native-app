import React from 'react';
import { View, Text, StatusBar, StyleSheet, 
  Image, ImageBackground,Button, TouchableOpacity, 
  ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 



import Fundo from '../../../assets/leitura.png';
{/*const image = { uri: "https://reactjs.org/logo-og.png" };*/}

function Home({navigation}){

    function linklogin(){
        navigation.navigate("Login")
    }
  return(

     <ScrollView >
      <StatusBar />

      <ImageBackground style={css.fundo} >
      <Text style={css.h1}>Bem vindo à Livraria</Text>
      <Text style={css.nome}>Violleta</Text>
      <Image source={Fundo} style={css.img} />

      <TouchableOpacity style={css.btn}  onPress={linklogin} >
      <Text style={css.texto}>Acessar</Text>

      {/* <Icon name="planet" size={30} color="red"/>*/}
      </TouchableOpacity>
       

       {/*cria um botão na tela  para direcionar para outra
       <Button  
         title="Perfil"
         onPress={linkPerfil}      
       />*/}


    

      </ImageBackground>

    </ScrollView>
 
  )
}

const css = StyleSheet.create({
 
  fundo:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: "white"

  },
  h1: {
    fontSize: 20,
  
  },
  nome:{
    fontSize: 60,
    color: '#80cbc4'
  },
  img: {
    width: 300,
    height:260,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  btn:{
    textAlign: 'center',
    margin: 20,
    width: 300,
    padding: 20,
    borderRadius:5 ,
    backgroundColor: "#80cbc4",
    
    
  },
  texto:{
    fontSize: 40, 
    fontWeight: 'bold',
    color: "#263238",
  
  }


})

export default Home;
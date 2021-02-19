import React from "react";
import { Text, View, ImageBackground, 
TextInput,Alert, TouchableOpacity, Image } from "react-native";

import styles from './styles'

import Fundo from '../../../assets/livro.png'

const apiUsuario = {
  id: 1,
  email: "thay@teste.com",
  senha: "123"
}

export default function Login({navigation}) {
  
  function linkHome(){
    navigation.navigate("Home")
}

  function autenticacao(){
     //featch
    if (apiUsuario.email === usuario && apiUsuario.senha === senha){
      navigation.navigate("Produtos");
    }else {
      alert("Email ou senha inválido")
    }
  } 

  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View>
        <ImageBackground style={styles.fundo}>
          <View style={styles.fundoCard}>
            <View>
                <Image source={Fundo} style={styles.img} />
            </View>

            <TextInput 
            placeholder="Email"
            style={styles.input}
            value={usuario}
            onChangeText={(text)=> setUsuario(text)}
             />

             
            <TextInput
            placeholder="Senha" 
            secureTextEntry={true} 
            style={styles.input} 
            value={senha}
            onChangeText={(text)=> setSenha(text)}
            />




            <TouchableOpacity style={styles.btn}
            onPress={autenticacao}
            >
              <Text style={styles.texto}>
               Entrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            onPress={linkHome}
            >
              <Text style={styles.texto}>
               Voltar
              </Text>
            </TouchableOpacity>


        

          </View>
        </ImageBackground>
    </View>
  );
}
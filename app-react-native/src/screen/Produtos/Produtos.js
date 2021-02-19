import React from 'react';
import { View, Text, StatusBar, StyleSheet, 
  Image, ImageBackground,Button, TouchableOpacity, 
  ScrollView, TextInput} from 'react-native';
 
  import css from './styles'


import Livro from '../../../assets/livro2.jpg';
import Livro2 from '../../../assets/livro3.jpg';
import Livro3 from '../../../assets/Livro4.jpg';
import Livro4 from '../../../assets/livro5.jpg';
import Livro5 from '../../../assets/livro6.jpg';
import Livro6 from '../../../assets/livro7.jpg';

function Produtos({navigation}){

  function linkHome(){
      navigation.navigate("Home")
  }
  return(

     <ScrollView >
      <StatusBar />
      <ImageBackground style={css.fundo} >
      <TouchableOpacity style={css.sair} onPress={linkHome}>
      <Text style={css.textosair}>Sair</Text>
      </TouchableOpacity>
      <Text style={css.h1}>Livros na Promoção</Text>
      <View style={css.card}>
      
      
      <View style={css.cardlivro}>
      <Image source={Livro} style={css.img} />
      <Text style={css.nome}>Como eu era antes de você</Text>
      <TouchableOpacity style={css.btn} >
      <Text style={css.texto}>Comprar</Text>
      </TouchableOpacity>
      </View>


      <View style={css.cardlivro}>
      <Image source={Livro2} style={css.img} />
      <Text style={css.nome}>O morro dos ventos uivantes</Text>
      <TouchableOpacity style={css.btn} >
      <Text style={css.texto}>Comprar</Text>
      </TouchableOpacity>
      </View>


      <View style={css.cardlivro}>
      <Image source={Livro3} style={css.img} />
      <Text style={css.nome}>Outlander</Text>
      <TouchableOpacity style={css.btn} >
      <Text style={css.texto}>Comprar</Text>
      </TouchableOpacity>
      </View>


      <View style={css.cardlivro}>
      <Image source={Livro4} style={css.img} />
      <Text style={css.nome}>Coraline</Text>
      <TouchableOpacity style={css.btn} >
      <Text style={css.texto}>Comprar</Text>
      </TouchableOpacity>
      </View>


      
      <View style={css.cardlivro}>
      <Image source={Livro5} style={css.img} />
      <Text style={css.nome}>Harry Potter</Text>
      <TouchableOpacity style={css.btn} >
      <Text style={css.texto}>Comprar</Text>
      </TouchableOpacity>
      </View>


      
      <View style={css.cardlivro}>
      <Image source={Livro6} style={css.img} />
      <Text style={css.nome}>Harry Potter</Text>
      <TouchableOpacity style={css.btn} >
      <Text style={css.texto}>Comprar</Text>
      </TouchableOpacity>
      </View>

       
      </View>
      </ImageBackground>

    </ScrollView>
 
  )
}



export default Produtos;
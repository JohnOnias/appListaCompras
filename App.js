import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Modal, Button, Pressable} from 'react-native';
import { useState } from 'react';
import { cores } from './src/constants/tema';
import Navbar from './src/components/navbar/Navbar';
import ListaVazia from './src/components/addItem/ListaVazia';




export default function App() {


const [quantidade, setQuantidade] = useState(1);
const [showModal, setShowModal] = useState(false);

const [item, setItem] = useState({
    id: Date.now(),
    nome: '',
    quantidade: '',
    tipo: '',
});
const [itens, setItens] = useState([]);

const aumentar = () => {
  setQuantidade(quantidade + 1);
};

const diminuir = () => {
  if (quantidade > 1) {
    setQuantidade(quantidade - 1);
  }
};

  return (

    <View style={styles.container}>

      <Navbar />

      <FlatList 

        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemLista}> 
          <Text>{item.nome}</Text><View> PESO </View> <View> X </View>     </View>
        )}
        ListEmptyComponent={<ListaVazia />}
        />


          
            <View
            style={styles.containerInput}
            > 

                  

                  
                  <View style={styles.viewInput}>


                        <TextInput 

                          style={styles.input}
                          placeholderTextColor = {cores.texto2}
                          placeholder="Novo Item..."
                          value={item.nome}
                          onChangeText={(text) => setItem({ ...item, nome: text })}
                        
                          />



                  {  !showModal && (<Pressable style={styles.plusButton}
                          onPress={() => setShowModal(true)}>

                          <Text style={{fontSize: 30, textAlign: 'center', color: cores.texto2}}>
                            +
                          </Text>

                    </Pressable>
                  )} 
                         
                         

                         {  showModal && (
                          
                          <Pressable style={styles.plusButton}
                                    onPress = {() => {
                                        setItens([...itens, item]);
                                        setItem({ id: Date.now(), nome: '', quantidade: quantidade, tipo: ''});
                                      }}
                          >



                              <Text style={{fontSize: 30, textAlign: 'center', color: cores.texto2}}>

                                +

                              </Text>

                          </Pressable>

                      )} 


                  </View>




                             {/*mdal antimacaco,*/}
      { showModal && (

        <View

         style={styles.conteinerModal}
          
        >
     
          

            {/* quantidade de itens */}

              <View  style={styles.containerQuantidade}>
                    <Pressable onPress={diminuir}>
                      <Text style={styles.plusMin}>
                        -
                      </Text>
                      </Pressable>

                            <Text style={styles.plusMin}> 
                                {quantidade}
                            </Text>


                        <Pressable onPress={aumentar}>

                      <Text style={styles.plusMin}>
                        +
                      </Text>

                    </Pressable>

              </View>

      
          </View>


      
      )}
                  

                



            </View>
            
      
      
      
       
        
    </View>

  );
}



const styles = StyleSheet.create({

    container: {

    height: '80%',
    width: '100%',
    backgroundColor: cores.fundo,

  },

  containerInput: {


    backgroundColor: cores.superficie,
    flexDirection: 'collum',
    justifyContent: 'space-between',
    fontSize: 20,
    width: '80%',
    borderWidth: 5,
    borderColor: cores.borda,
    borderRadius: 5,
    marginBottom: 20,
    padding: 0,
    margin: 'auto'



  },


  containerQuantidade: {

    flexDirection: 'row',
    height: 44,
    width: 135,
    margin: 10
  
  },

  itemLista: {

    
    height: 74,
    width: '100%',
    backgroundColor: cores.superficie,
    padding: 15


  },


  conteinerModal: {

      backgroundColor: cores.superficie2,
      height: 50,
      width: 80,
      justifyContent: 'space-between'

  },


  plusButton: {


        color: cores.texto2,
        height: 50,
        width: 50,
        backgroundColor: cores.superficie2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10


  },

  viewInput: {

      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',



  },

   input: {

    color: cores.texto,
    fontSize: 20,
    padding: 10,
    borderWidth: 5,
    borderColor: cores.borda,
    marginLeft: 10,

  },
  
  plusMin: {
    height: 44,
    width: 44,
    backgroundColor: cores.superficie2,
    fontSize: 20,
    textAlign: 'center',
    color: cores.texto2,
    margin: 2


  }



});



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Modal, Button, Pressable } from 'react-native';
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
            <Text>{item.nome}</Text> <View> X </View>     </View>
        )}
        ListEmptyComponent={<ListaVazia />}
      />



      <View
        style={styles.containerInput}
      >




        <View style={styles.viewInput}>


          <TextInput

            style={styles.input}
            placeholderTextColor={cores.texto2}
            placeholder="Novo Item..."
            value={item.nome}
            onChangeText={(text) => setItem({ ...item, nome: text })}

          />



          {!showModal && (<Pressable style={styles.plusButton}
            onPress={() => setShowModal(true)}>

            <Text style={{ fontSize: 30, textAlign: 'center', color: cores.texto2 }}>
              +
            </Text>

          </Pressable>
          )}



          {showModal && (

            <Pressable style={styles.plusButton}
              onPress={() => {
                setItens([...itens, item]);
                setItem({ id: Date.now(), nome: '', quantidade: quantidade, tipo: '' });
              }}
            >



              <Text style={{ fontSize: 30, textAlign: 'center', color: cores.texto2 }}>

                +

              </Text>

            </Pressable>

          )}


        </View>




        {/*mdal antimacaco,*/}

        {showModal && (

          <View

            style={styles.conteinerModal}

          >



            {/* quantidade de itens */}

           
                    <View style={styles.containerQuantidade}>


                          <Pressable onPress={diminuir}>
                            <Text style={styles.plusMin}>
                              -
                            </Text>
                          </Pressable>

                          <Pressable>

                            <Text style={styles.plusMin}>

                              {quantidade}

                            </Text>
                          </Pressable>
                          <Pressable onPress={aumentar}>

                            <Text style={styles.plusMin}>
                              +
                            </Text>

                          </Pressable>


                </View>
              
                <View style={styles.unidades}>
                        <Text>
                          un
                        </Text>
                </View>
                 <View style={styles.unidades}>
                        <Text>
                          kg
                        </Text>
                </View>
                 <View style={styles.unidades}>
                        <Text>
                          cx
                        </Text>
                </View>
                 <View style={styles.unidades}>
                        <Text>
                          pct
                        </Text>
                </View>

          </View>



        )}






      </View>






    </View>

  );
}



const styles = StyleSheet.create({
  unidades:{
    backgroundColor: cores.superficie2,
    height: 44,
    width: 44, 
    justifyContent: 'center',
    alignItems: 'center',
    color: cores.texto,
    borderRadius: 11,





  },
  container: {

    height: '80%',
    width: '100%',
    backgroundColor: cores.fundo,

  },

  containerInput: {


    backgroundColor: cores.superficie,
    flexDirection: 'collum',
    justifyContent: 'space-evenly',
    fontSize: 20,
    width: '90%',
    borderWidth: 5,
    borderColor: cores.borda,
    borderRadius: 5,
    marginBottom: 20,
    padding: 0,
    margin: 'auto'



  },


  containerQuantidade: {
    backgroundColor: cores.superficie2,
    flexDirection: 'row',
    height: 44,
    width: 135,

    borderRadius: 8,
    alignItems: 'center',

  },



  itemLista: {


    height: 74,
    width: '100%',
    backgroundColor: cores.superficie,
    padding: 15,
    color: cores.texto



  },


  conteinerModal: {

    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    margin: 'auto',
    justifyContent: 'space-evenly',

  },


  plusButton: {

    color: cores.texto2,
    height: 50,
    width: 50,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cores.superficie2


  },

  viewInput: {

    flexDirection: 'row',
    width: '100%',

    gap: 14


  },

  input: {
    fontSize: 20,
    padding: 10,

  },

  plusMin: {
    height: 44,
    width: 44,
    fontSize: 20,
    textAlign: 'center',
    color: cores.texto2,
    alignContent: 'center'


  }



});



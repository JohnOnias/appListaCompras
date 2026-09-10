import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Modal, Button} from 'react-native';
import { useState } from 'react';
import { cores } from './src/constants/tema';
import Navbar from './src/components/navbar/Navbar';
import ListaVazia from './src/components/addItem/ListaVazia';



export default function App() {

const [showModal, setShowModal] = useState(false);

const [item, setItem] = useState({
    id: Date.now(),
    nome: '',
    quantidade: '',
    preco: ''
});
const [itens, setItens] = useState([]);

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

      <Button 
      style={styles.button}
      title="Adicionar Item"
      onPress={() => setShowModal(true)}
      /> 
       
    
      
      
      
      
                {/*mdal antimacaco,*/}
        <Modal
          visible={showModal}
          animationType="slide"
          style={styles.modal}
        >
          {console.log(showModal)}
          <View>
            <TextInput
              placeholder="Nome"
              value={item.nome}
              onChangeText={(text) => setItem({ ...item, nome: text })}

            
            />
            <TextInput
            placeholder="Quantidade"
            value={item.quantidade}
            onChangeText={(text) => setItem({ ...item, quantidade: text })}


            />
              <TextInput
            placeholder="Preço"
            value={item.preco}
            onChangeText={(text) => setItem({ ...item, preco: text })} />
        

          </View>


          <Button

            title="Adicionar à Lista"
            onPress={() => {
              setItens([...itens, item]);
              setItem({ id: Date.now(), nome: '', quantidade: '', preco: '' });
              setShowModal(false);
            }}
          
          />


        </Modal>
        
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#6d74ec',
  },

  button: {
    backgroundColor: '#f80e0e',
    fontSize: 20,
    padding: 10,
    height: 50,
    width: 200,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  itemLista: {
    height: 74,
    width: 100,
    backgroundColor: '#ffff',
    padding: 15

  },

  modal: {
      backgroundColor: cores.superficie,
      height: 50,
      width: "100%"
  }
});



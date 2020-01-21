import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen = () => {
const friends = [
  {name: 'João', age: '4'},
  {name: 'Daniel', age: '42'},
  {name: 'Johnathan', age: '38'},
  {name: 'Norma', age: '37'},
  {name: 'Michele', age: '37'},
  {name: 'Germano', age: '39'},
  {name: 'Thiago', age: '37'},
  {name: 'Elane', age: '36'},
  {name: 'Jordana', age: '32'}
]

  return (
    <View>
      <Text>Lista de Amigos!</Text>
      <Text></Text>
      <FlatList 
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Idade {item.age}</Text>
        }} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5
  }
})

export default ListScreen
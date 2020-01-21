import React from 'react'
import {ScrollView, StyleSheet, Text} from 'react-native'
import ImageDetail from './components/ImageDetail'

const MemeScreen = () => {
  return <ScrollView vertical={true}>
    <Text style={styles.textStyle}>Tela de Memes (Faltou Evaldo)</Text>
    <Text></Text>
    <ImageDetail title="Cadu" imageSource={require('../../assets/cadu.jpg')} />
    <ImageDetail title="Daniel" imageSource={require('../../assets/daniel.jpg')} />
    <ImageDetail title="Caio" imageSource={require('../../assets/caio.jpg')} />
    <ImageDetail title="JJ" imageSource={require('../../assets/jj.jpg')} />
  </ScrollView>
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24
  }
})

export default MemeScreen
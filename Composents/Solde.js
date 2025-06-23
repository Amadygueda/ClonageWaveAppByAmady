import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Solde() {

  const [vuesolde, setVuesolde] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.millionaire}>
  
        {vuesolde ? "227.514.148" : "***********"}
      </Text>
      <Text style={styles.cfa}>F</Text>


      <TouchableOpacity
        style={styles.BoutonRegalage}
        onPress={() => setVuesolde(!vuesolde)}
      >

        <Image
          source={
            vuesolde
              ? require('../assets/images/cachervue.png')
              : require('../assets/images/ouvert.png')
          }
          style={styles.ImageOeil}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
ImageOeil: {
  height: 25,
  width: 25,
  resizeMode: 'contain',
  resizeMode: 'contain'
},
  millionaire: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'normal',
    fontFamily: 'Poppins-Bold',
  },
  cfa: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'normal',
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
  },
 
});
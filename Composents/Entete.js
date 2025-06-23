
import { StyleSheet, Text, View ,Image,TouchableOpacity, Modal,} from 'react-native';
import { useState } from 'react';
export default function Entete() {
  const[vue,setvue]=useState(false)
  function evenementclique(){
    setvue(true)
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.BoutonRegalage}  onPress={evenementclique} >
         <Image
        source={require('../assets/images/image.png')}
       style={styles.ImageReglage}
        />
        </TouchableOpacity>

      
          <Modal visible={vue}  animationType='slide' style={styles.modalpere} transparent={true}>
            <View style={styles.modalfils} >
             
          <TouchableOpacity style={styles.boutonx} onPress={()=>setvue(false)} >
            <Image
        source={require('../assets/images/x.png')}
       style={styles.x}
        />
             <Text style={styles.titretexte}>Paramètres</Text>
             <Text style={styles.textesaisie}> Paramètres désactivés par respect de la propriété Wave.  </Text>
             <Text style={styles.monsignature}> Amady Gueda Badji</Text> 
          </TouchableOpacity>
            </View>
           
            
          </Modal>

        </View>
      

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#4B4DED',
    width:100
  },
  ImageReglage:{
    width:50,
    height:50,
    tintColor:'white',
    borderRadius:50
  },
  BoutonRegalage:{
  borderRadius:100,
  backgroundColor:'#4B4DED',
  width:50,
  height:50,
  marginTop:'1%',
  marginLeft:'2%',
  alignItems:'center',
  justifyContent:'center'
  },
  x:{
    height:12,
    width:12,
    position:'absolute',
    left:150,
    top:10
  },
 modalpere:{
  width:150,
  height:200,


  },
  modalfils:{
    backgroundColor:'white',
    width:180,
  height:150,
    marginLeft:100,
    marginTop:500,
    borderWidth:0.8,
    borderRadius:25,
    borderColor:'grey',
    textAlign:'center'

  },
  titretexte:{
    fontSize:17,
    fontWeight:'500',
    textAlign:'center',
    marginTop:16
  },
  textesaisie:{
    color:'grey',
    textAlign:' center',
    fontSize:12,
   margin:10
  },
  monsignature:{
    fontSize:10,
    marginLeft:70,
    marginTop:15
  }
});

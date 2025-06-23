
import { StyleSheet, Text, View ,Image,TouchableOpacity,Modal} from 'react-native';
import { useState } from 'react';
export default function Entete() {
  const[vue,setvue]=useState(false)
  function evenementclique(){
    setvue(true)
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.carte}>
            <View style={styles.pereQRcode}>
                <Image
                    source={require('../assets/images/Qrcpde.png')}
                   style={styles.ImageQR1}
                    />
                    <TouchableOpacity style={styles.BoutonScanner} onPress={evenementclique}>
                        <Image
                    source={require('../assets/images/photo.png')}
                    style={styles.ImageAppareiPhoto}
                    />
                    <Text  style={styles.TexteScanner}>Scanner</Text>
                    </TouchableOpacity>

            </View>
            
            
             <Image
                    source={require('../assets/images/logo.png')}
                   style={styles.ImageWave}
                    />
                    <Modal visible={vue}  animationType='slide' style={styles.modalpere} transparent={true}>
                                <View style={styles.modalfils} >
                                 
                              <TouchableOpacity style={styles.boutonx} onPress={()=>setvue(false)} >
                                <Image
                            source={require('../assets/images/x.png')}
                           style={styles.x}
                            />
                                 <Text style={styles.titretexte}>Scanner QR Code</Text>
                                 <Text style={styles.textesaisie}>Fonction désactivée par respect de la propriété Wave.</Text>
                                 <Text style={styles.monsignature}>Amady Gueda Badji</Text>
                              </TouchableOpacity>
                                </View>
                               
                                
                              </Modal>
                    

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:160,
        left:35,
        zIndex:1

    },
  carte: {
    width:310,
    height:170,
    borderRadius:9,
    backgroundColor:'#00CFFF',
    marginLeft:15,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    
 
  },ImageWave:{
    width:49,
    height:69,
    position:'absolute',
    top:95,
    left:"79%",

  },
  ImageQR1:{
    height:95,
    width:92
  },
pereQRcode:{
    backgroundColor:'white',
    width:140,
    height:150,borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
},
ImageAppareiPhoto:{
    height:20,
    width:20
},BoutonScanner:{
    flexDirection:'row',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'

},
TexteScanner:{
    marginLeft:5
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

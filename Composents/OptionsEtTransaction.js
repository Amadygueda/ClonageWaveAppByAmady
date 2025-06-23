import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import { useState } from 'react';

export default function OptionsEtTransactions() {

  const [vueTransfert, setVueTransfert] = useState(false);
  const [vuePaiement, setVuePaiement] = useState(false);
  const [vueCredit, setVueCredit] = useState(false);
  const [vueBanque, setVueBanque] = useState(false);
    const [motantRecevoir, setMotant] = useState(0);

  const Transaction = [
    { id: '1', Titre: 'Retrait', Dates: '22 Juin 2025 à 22h24', Montant: '-275000F' },
    { id: '2', Titre: 'Dépôt', Dates: '21 Juin 2025 à 15h10', Montant: '150000F' },
    { id: '3', Titre: 'Retrait', Dates: '20 Juin 2025 à 09h30', Montant: '-50000F' },
    { id: '4', Titre: 'Dépôt', Dates: '19 Juin 2025 à 18h45', Montant: '200000F' },
    { id: '5', Titre: 'Retrait', Dates: '18 Juin 2025 à 12h00', Montant: '-125000F' },
    { id: '6', Titre: 'Dépôt', Dates: '17 Juin 2025 à 08h15', Montant: '80000F' },
    { id: '7', Titre: 'Retrait', Dates: '16 Juin 2025 à 20h05', Montant: '-30000F' },
    { id: '8', Titre: 'Dépôt', Dates: '15 Juin 2025 à 11h50', Montant: '45000F' },
    { id: '9', Titre: 'Retrait', Dates: '14 Juin 2025 à 14h30', Montant: '-60000F' },
    { id: '10', Titre: 'Dépôt', Dates: '13 Juin 2025 à 10h20', Montant: '120000F' },
    { id: '11', Titre: 'Retrait', Dates: '12 Juin 2025 à 19h40', Montant: '-95000F' },
    { id: '12', Titre: 'Dépôt', Dates: '11 Juin 2025 à 07h55', Montant: '70000F' },
    { id: '13', Titre: 'Retrait', Dates: '10 Juin 2025 à 16h00', Montant: '-110000F' },
    { id: '14', Titre: 'Dépôt', Dates: '09 Juin 2025 à 13h35', Montant: '50000F' },
    { id: '15', Titre: 'Retrait', Dates: '08 Juin 2025 à 21h10', Montant: '-80000F' },
  ];
 function montantsasie(numero){
  setMotant(numero)
 }
  return (
    <View style={styles.container}>

      <View style={styles.option}>
        <View style={styles.Tranfert}>
          <TouchableOpacity style={styles.BoutonTransfert} onPress={() => setVueTransfert(true)}>
            <Image source={require('../assets/images/Transfert.png')} style={styles.LogoOption} />
          </TouchableOpacity>
          <Text style={styles.Soustitre}>Transfert</Text>
        </View>

        <View style={styles.Tranfert}>
          <TouchableOpacity style={styles.BoutonPaiement} onPress={() => setVuePaiement(true)}>
            <Image source={require('../assets/images/paiement.png')} style={styles.LogoOption} />
          </TouchableOpacity>
          <Text style={styles.Soustitre}>Paiement</Text>
        </View>

        <View style={styles.Tranfert}>
          <TouchableOpacity style={styles.BoutonCredit} onPress={() => setVueCredit(true)}>
            <Image source={require('../assets/images/credit.png')} style={styles.LogoOption} />
          </TouchableOpacity>
          <Text style={styles.Soustitre}>Crédit</Text>
        </View>

        <View style={styles.Tranfert}>
          <TouchableOpacity style={styles.BoutonBanque} onPress={() => setVueBanque(true)}>
            <Image source={require('../assets/images/Banque.png')} style={styles.LogoOption} />
          </TouchableOpacity>
          <Text style={styles.Soustitre}>Banque</Text>
        </View>
      </View>

      <FlatList
        data={Transaction}
        renderItem={({ item }) => (
          <View style={styles.ContenerParentPiemenet}>
            <View>
              <Text style={styles.Memestyle}>{item.Titre}</Text>
              <Text style={styles.datesenvoyer}>{item.Dates}</Text>
            </View>
            <Text style={styles.Memestyle}>{item.Montant}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <Modal visible={vueTransfert} animationType='slide' transparent={true}>
        <View style={styles.modalfils1}>
          <TouchableOpacity style={styles.boutonx} onPress={() => setVueTransfert(false)}>
            <Image source={require('../assets/images/fleche-droite.png')} style={styles.x1} />
          </TouchableOpacity>
          <Text style={styles.titretexte1}>Envoyer des l'argent</Text>
         <View style={styles.ParentsEnvoyer}>
         <Text style={styles.a}>A</Text>
            <View style={styles.contact} >
            <TextInput  style={styles.nom}/>
            <TextInput  style={styles.numero}/>
            </View>

            <View style={styles.envoyer} >
            <Text style={styles.TitreE} >Montant Envoyer</Text>
            <TextInput style={styles.Montant} keyboardType='numeric' onChangeText={montantsasie}/>
            </View>

            <View style={styles.envoyer} >
            <Text style={styles.TitreE}>Montant Recu</Text>
            <Text style={styles.Montant}>{Math.round(motantRecevoir*0.99)}</Text>
            </View>
         <TouchableOpacity style={styles.btnenvoyer}>
            <Text style={styles.donne}>Envoyer</Text>
         </TouchableOpacity>
         </View>


    
        </View>
      </Modal>

      <Modal visible={vuePaiement} animationType='slide' transparent={true}>
        <View style={styles.modalfils}>
          <TouchableOpacity style={styles.boutonx} onPress={() => setVuePaiement(false)}>
            <Image source={require('../assets/images/fleche-droite.png')} style={styles.x} />
          </TouchableOpacity>
          <Text style={styles.titretexte}>Paiement</Text>
          <Text style={styles.textesaisie}>Option désactivée pour respecter la propriété Wave.</Text>
          <Text style={styles.monsignature}>Amady Gueda Badji</Text>
        </View>
      </Modal>

      <Modal visible={vueCredit} animationType='slide' transparent={true}>
        <View style={styles.modalfils}>
          <TouchableOpacity style={styles.boutonx} onPress={() => setVueCredit(false)}>
            <Image source={require('../assets/images/fleche-droite.png')} style={styles.x} />
          </TouchableOpacity>
          <Text style={styles.titretexte}>Crédit</Text>
          <Text style={styles.textesaisie}>Option désactivée pour respecter la propriété Wave.</Text>
          <Text style={styles.monsignature}>Amady Gueda Badji</Text>
        </View>
      </Modal>

      <Modal visible={vueBanque} animationType='slide' transparent={true}>
        <View style={styles.modalfils}>
          <TouchableOpacity style={styles.boutonx} onPress={() => setVueBanque(false)}>
            <Image source={require('../assets/images/x.png')} style={styles.x} />
          </TouchableOpacity>
          <Text style={styles.titretexte}>Banque</Text>
          <Text style={styles.textesaisie}>Option désactivée pour respecter la propriété Wave.</Text>
          <Text style={styles.monsignature}>Amady Gueda Badji</Text>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 120,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    height: '100%',
  },
  LogoOption: {
    height: 49,
    width: 49,
  },
  option: {
    flexDirection: 'row',
    marginTop: 80,
    justifyContent: 'space-around',
    borderBottomWidth: 10,
    borderBottomColor: 'rgba(142, 142, 147, 0.19)',
    paddingBottom: 17,
  },
  Tranfert: {
    alignItems: 'center',
  },
  BoutonTransfert: {
    backgroundColor: 'rgba(75, 77, 237, 0.2)',
    height: 58,
    width: 58,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoutonPaiement: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    height: 58,
    width: 58,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoutonCredit: {
    backgroundColor: 'rgba(0, 207, 255, 0.2)',
    height: 58,
    width: 58,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoutonBanque: {
    backgroundColor: 'rgba(255, 105, 180, 0.2)',
    height: 58,
    width: 58,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Soustitre: {
    fontWeight: '600',
  },
  ContenerParentPiemenet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 15,
  },
  Memestyle: {
    color: "#4B4DED",
    fontWeight: '700',
  },
  datesenvoyer: {
    color: 'grey',
    marginTop: 8,
  },
  x: {
    height: 12,
    width: 12,
    position: 'absolute',
    left: 150,
    top: 10,
  },
  modalfils: {
    backgroundColor: 'white',
    width: 180,
    height: 150,
    marginLeft: 100,
    marginTop: 500,
    borderWidth: 0.8,
    borderRadius: 25,
    borderColor: 'grey',
    textAlign: 'center',
  },
  titretexte: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 16,
  },
  textesaisie: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 12,
    margin: 10,
  },
  monsignature: {
    fontSize: 10,
    marginLeft: 70,
    marginTop: 15,
  },
modalfils1:{
    height:"100%",
    width:'100%',
    backgroundColor:'white'
},
x1:{
    position:'absolute',
    left :10,
    top:58.5,
    height:50,
    width:50
},titretexte1:{
    position:'absolute',
    top:69,
    left:120,
    fontSize:20,
    textAlign:"center"
},
ParentsEnvoyer:{
    marginTop:125,
    height:395
},
a:{
    color:'grey',
    marginLeft:15,
    marginTop:15
},
contact:{
    borderBottomWidth:1,
    borderColor:'rgba(142, 142, 147, 0.2)',
    marginLeft:15,
    marginRight:25,
    paddingBottom:5
},
numero:{
    color:'grey'
},
envoyer:{
    marginTop:35,
    marginLeft:15,
    borderColor:'rgba(0, 207, 255, 1)',
    borderBottomWidth:1,
      marginRight:25,
},
TitreE:{
    color:'rgba(0, 207, 255, 1)'
},
btnenvoyer:{
    marginTop:100,
    justifyContent:'center',
    alignItems:'center',
    width:280,
    height:45,
    backgroundColor:'rgba(0, 207, 255, 0.8)',
    marginLeft:60,
    marginRight:80,
    borderRadius:20
},
donne:{
    color:'white',fontWeight:'500',fontSize:23
}
});
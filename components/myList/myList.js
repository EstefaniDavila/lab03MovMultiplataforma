import React,{Component} from "react";
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity} from "react-native";

export default class App extends Component{
    constructor(props){   
        super(props)
        this.state = {
            lista: [
                {
                  nombre:'Lamborghini Veneno',
                  img: 'https://www.infobae.com/new-resizer/POXjTEZ8AJcUGMSgiK4QMaLS4cc=/768x432/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/A3BI3TM255DVPJSIO2DKMUGJA4',
                  descrip: 'USD 4,5 millones.',
                },
                {
                  nombre:'Koenigsegg One',
                  img: 'https://www.infobae.com/new-resizer/ymKLJhowQUeYifAqXXv-PrCkGvU=/768x432/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/I66QYBKKFBGZFDJ3L2OVUJCKGI',
                  descrip: 'USD 3,7 millones.',
                },
                {
                  nombre:'Lykan Hypersport',
                  img: 'https://www.infobae.com/new-resizer/RaD6q4gDzTHydFOQ1ATdbOD9Qh0=/768x432/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/UD6JJK5C45EBHICAKEMMRSWMKY',
                  descrip: 'USD 3,5 millones.',
                },
                {
                  nombre:'Bugatti Chiron',
                  img: 'https://www.infobae.com/new-resizer/o-9E91ogMURwe5f_S1_d7oFPMX4=/768x432/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ND7OXWPVLNEBVKUKUUGITPFHCE',
                  descrip: 'USD 2,6 millones.',
                },
                {
                  nombre:'Pagani Huayra BC',
                  img: 'https://www.infobae.com/new-resizer/9P1ywjifUx9G1talokt7-5KjM2o=/768x432/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/3DH4S7D32BETJCOHZY63YJMAFA',
                  descrip: 'USD 4,5 millones.',
                },
            ]
        }
    }

    items = ({item}) => (
        <TouchableOpacity>
            <View style={styles.contenedor}>
                <Image style={styles.imagen} source={{uri: item.img}}/>
                <View>
                  <Text style={styles.titulo}>{item.nombre}</Text>
                  <Text style={styles.descripcion}>{item.descrip}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                  data= {this.state.lista}
                  renderItem={this.items}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      marginTop: 20,
    },

    contenedor: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 5,
      justifyContent: 'flex-start',
      margin: 5,
    },

    titulo: {
      marginLeft: 20,
      fontSize:15,
    },

    descripcion: {
      marginLeft: 20,
      marginTop: 5,
      fontSize:13,
    },

    imagen: {
      width: 125, 
      height:100, 
    }

});


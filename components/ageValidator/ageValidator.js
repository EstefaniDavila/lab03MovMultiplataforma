import React, {Component} from "react";
import { View, TextInput, Text} from "react-native"

class AgeValidator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
        };
    }
    onChange(text){
        let texto = '';
        let numeros = '0123456789';

        for (var i=0; i < text.length; i++){
            if (numeros.indexOf(text[i]) > -1){
                texto = texto + text[i];
            }
            else{
                alert ("Ingresar valores numericos")
            }
        }
        if (text >= 18) {
            this.setState({textValue: 'Es mayor de edad'});
        } else {
            this.setState({textValue: 'Es menor de edad'});
        }
    };

    render(){
        return (
            <View>
              <TextInput 
                style={{height: 40, borderColor:'gray', borderWidth: 1}}
                placeholder=" Ingresar edad"
                keyboardType='numeric'
                onChangeText={text => this.onChange(text)}
              />
              <Text>{this.state.textValue}</Text>
            </View>
        );
    }
}

export default AgeValidator;
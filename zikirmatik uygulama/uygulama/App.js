import React, { Component } from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';

export default class  extends Component {


        state ={
            number : 0,
        };
    onPressArttir=() =>{
        this.setState({
            number : ++this.state.number,
        })
};
    onPressAzalt = () =>{
        this.setState({
            number : --this.state.number,
        })
    };





  render() {
    return (
        <View style = {styles.container}>

            <Image style={{width:'100%',height:220,marginBottom:'5%'}}
                   resizeMode={"contain"}
            source={{uri:'https://www.turkstyleshop.com/10243-large_default/harfli-sikma-kehribar-tesbih-925-ayar-gumus.jpg'}}/>

            <Text style={styles.baslik}>Çekilen Zikir Sayısı</Text>
            <Text style={styles.yazi}>{this.state.number}</Text>
                <View style={styles.butonlar}>

                 <Button

                   title='Arttır'
                   onPress={this.onPressArttir}
                 />

                <Button
                title ='Azalt'
                onPress={this.onPressAzalt}
                 />
             </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
      backgroundColor: '#94ebcd',
  },
    yazi:{

      fontSize:44,
    },
  butonlar:{
      flexDirection:'row',
  },
baslik:{
      fontSize: 20,
},


});
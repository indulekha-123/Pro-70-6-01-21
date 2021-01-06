import React from 'react';
import { StyleSheet, Text, View,TextInput,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'; 
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.Component{
    render (){
        return(
        <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
           Story Hub
        </Text>
    
                       <TextInput 
                            style={styles.inputBox}
                            placeholder="Story Title"
                    />
    
    
                    <TextInput 
                            style={styles.inputBox}
                            placeholder="Author"
                    />
                        <TextInput 
                            style={styles.inputBox}
                            placeholder="Write your story here"
                    />
    
    
    
    
    
    
    <TouchableOpacity 
           onPress={this.nextScreen}>
            <Text style = {styles.button}>Submit</Text>
            </TouchableOpacity>
    
    </View>
    
      )  }}

      const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        
        },
   
        inputBox:{
            width:200,
            height:40,
            borderWidth:1.5,
            borderRightWidth:0,
            fontSize:20
        }

        })
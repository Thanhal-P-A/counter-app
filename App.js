import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={count:0}
    this.dec=this.dec.bind(this)   
    this.reset=this.reset.bind(this)
    this.inc=this.inc.bind(this)
  }
  dec(){
    if (this.state.count>0){
      this.setState({
        count: this.state.count-1
      })
    }
  }
  inc(){
    this.setState({
      count: this.state.count+1
    })
  }
  reset(){
    this.setState({
      count:0
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewCount}>
          <Text style={styles.textCount}>
            {this.state.count}
          </Text>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.inc} onPress={this.dec}>
            <Text style={styles.textInc}>
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dec} onPress={this.inc}>
            <Text style={styles.textDec}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewReset}>
          <TouchableOpacity style={styles.reset} onPress={this.reset}>
            <Text style={styles.textReset}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewCount:{
    flex:5,
    alignItems:'center',
    justifyContent:'center'
  },
  viewButton:{
    flex:3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  viewReset:{
    flex:2,
    alignItems:'center',
    justifyContent:'center'
  },
  textCount:{
    fontSize:140,
    color:'#00bbb0'
  },
  inc:{
    alignItems:'center',
    justifyContent:'space-around',
    height:80,
    width:80,
    borderRadius:20,
    borderWidth:2,
    borderColor:'#00bbb0',
  },
  dec:{
    alignItems:'center',
    justifyContent:'space-around',
    height:80,
    width:80,
    borderRadius:20,
    borderWidth:2,
    borderColor:'#00bbb0',
  },
  reset:{
    alignItems:'center',
    justifyContent:'center',
    height:80,
    width:140,
  },
  textInc:{
    fontSize:70,
    color:'grey',
  },
  textDec:{
    fontSize:70,
    color:'grey',
  },
  textReset:{
    fontSize:25,
    color:'white'
  },
});

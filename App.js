import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';
import pic from './images/pic.jpeg'

export class Flex_Box1 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"yellow"}}>
        <View style={{flex:1,backgroundColor:"red"}}></View>
        <View style={{flex:2,backgroundColor:"blue"}}></View>
        <View style={{flex:3,backgroundColor:"green"}}></View>
      </View>
    )
  }
}
export class Flex_Box2 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"yellow",flexDirection:"row"}}>
        <View style={{flex:1,backgroundColor:"red"}}></View>
        <View style={{flex:2,backgroundColor:"blue"}}></View>
        <View style={{flex:3,backgroundColor:"green"}}></View>
      </View>
    )
  }
}
export class Flex_Box3 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"yellow",flexDirection:"column-reverse"}}>
        <View style={{flex:1,backgroundColor:"red"}}></View>
        <View style={{flex:2,backgroundColor:"blue"}}></View>
        <View style={{flex:3,backgroundColor:"green"}}></View>
      </View>
    )
  }
}
export class Flex_Box4 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"yellow",flexDirection:"row-reverse"}}>
        <View style={{flex:1,backgroundColor:"red"}}></View>
        <View style={{flex:2,backgroundColor:"blue"}}></View>
        <View style={{flex:3,backgroundColor:"green"}}></View>
      </View>
    )
  }
}
export class Flex_Box5 extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:"yellow",flexDirection:"column-reverse"}}>
          <View style={{backgroundColor:"red",width:50,height:50}}></View>
          <View style={{backgroundColor:"blue",width:50,height:50}}></View>
          <View style={{backgroundColor:"green",width:50,height:50}}></View>
        </View>
        <View style={{flex:1,backgroundColor:"pink",flexDirection:"column"}}>
          <View style={{backgroundColor:"red",width:50,height:50}}></View>
          <View style={{backgroundColor:"blue",width:50,height:50}}></View>
          <View style={{backgroundColor:"green",width:50,height:50}}></View>
        </View>
        <View style={{flex:1,backgroundColor:"orange",flexDirection:"row-reverse"}}>
          <View style={{backgroundColor:"red",width:50,height:50}}></View>
          <View style={{backgroundColor:"blue",width:50,height:50}}></View>
          <View style={{backgroundColor:"green",width:50,height:50}}></View>
        </View>
        <View style={{flex:1,backgroundColor:"purple",flexDirection:"row"}}>
          <View style={{backgroundColor:"red",width:50,height:50}}></View>
          <View style={{backgroundColor:"blue",width:50,height:50}}></View>
          <View style={{backgroundColor:"green",width:50,height:50}}></View>
        </View>
      </View>
    )
  }
}
export class Flex_Box6 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"skyblue",justifyContent:"center",alignItems:"baseline"}}>{/* base line has no effect */}
        <View style={{backgroundColor:"red",width:100,height:100}}></View>
        <View style={{backgroundColor:"blue",width:100,height:100}}></View>
        <View style={{backgroundColor:"green",width:100,height:100}}></View>
      </View>
    )
  }
}
export class Flex_Box7 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"skyblue",justifyContent:"space-between",}}>
        <View style={{backgroundColor:"red",width:100,height:100}}></View>
        <View style={{backgroundColor:"blue",width:100,height:100}}></View>
        <View style={{backgroundColor:"green",width:100,height:100}}></View>
      </View>
    )
  }
}
export class Flex_Box8 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"skyblue",justifyContent:"space-around",alignItems:"flex-start"}}>{/* align items has no effect */}
        <View style={{backgroundColor:"red",width:100,height:100}}></View>
        <View style={{backgroundColor:"blue",width:100,height:100}}></View>
        <View style={{backgroundColor:"green",width:100,height:100}}></View>
      </View>
    )
  }
}
export class Flex_Box9 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"skyblue",justifyContent:"flex-end",alignItems:"flex-end"}}>
        <View style={{backgroundColor:"red",width:100,height:100}}></View>
        <View style={{backgroundColor:"blue",width:100,height:100}}></View>
        <View style={{backgroundColor:"green",width:100,height:100}}></View>
      </View>
    )
  }
}
export class Flex_Box10 extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"skyblue",justifyContent:"space-evenly",alignItems:"center"}}>
        <View style={{backgroundColor:"red",height:100,alignSelf:"stretch"}}></View>
        <View style={{backgroundColor:"blue",width:100,height:100,alignSelf:"flex-end"}}></View>
        <View style={{backgroundColor:"green",width:100,height:100,alignSelf:"flex-start"}}></View>
      </View>
    )
  }
}
export class Flex_Box_home_page extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"skyblue",justifyContent:"flex-start",alignItems:"stretch"}}>
        <View style={{flex:1,backgroundColor:"yellow"}}><Text>HEADER</Text></View>
        <View style={{flex:1,backgroundColor:"orange"}}><Text>LOGO IMAGE</Text></View>
        <View style={{flex:5,backgroundColor:"pink",flexDirection:"row"}}>
          <View style={{flex:1,backgroundColor:"pink"}}><Text>LEFT SIDEBAR</Text></View>
          <View style={{flex:4,backgroundColor:"white"}}><Text>CONTENT</Text></View>
          <View style={{flex:1,backgroundColor:"lightgreen"}}><Text>RIGHT SIDEBAR</Text></View>
        </View>
        <View style={{flex:1,backgroundColor:"skyblue"}}><Text>FOOTER</Text></View>
      </View>
    )
  }
}
export class Flex_Box_calculator extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"skyblue",justifyContent:"flex-start",alignItems:"stretch"}}>
        <View style={{flex:1,backgroundColor:"white"}}></View>
        <View style={{flex:2,backgroundColor:"black",flexDirection:"row"}}>
          <View style={{flex:3,backgroundColor:"grey",flexDirection:"column"}}>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
            </View>
            <View style={{flex:0.02,backgroundColor:"black"}}></View>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
            </View>
            <View style={{flex:0.02,backgroundColor:"black"}}></View>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
            </View>
            <View style={{flex:0.02,backgroundColor:"black"}}></View>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
              <View style={{flex:0.02,flexDirection:"row",backgroundColor:"black"}}></View>
              <View style={{flex:1,flexDirection:"row",backgroundColor:"grey"}}></View>
            </View>
          </View>
          <View style={{flex:1,backgroundColor:"black",flexDirection:"column"}}>
          < View style={{flex:1,flexDirection:"row",backgroundColor:"black"}}></View>
            <View style={{flex:0.02,flexDirection:"row",backgroundColor:"grey"}}></View>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"black"}}></View>
            <View style={{flex:0.02,flexDirection:"row",backgroundColor:"grey"}}></View>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"black"}}></View>
            <View style={{flex:0.02,flexDirection:"row",backgroundColor:"grey"}}></View>
            <View style={{flex:1,flexDirection:"row",backgroundColor:"black"}}></View>
          </View>
        </View>
      </View>
    )
  }
}
export class Text_Input extends Component{
  constructor(){
    super()
    this.state={
      input_value:"",
      current_event:"null",
      // key_pressed:""
    }
  }
  render(){
    return(
      <View>
        <Text>Enter Your name</Text>
        <TextInput 
        allowFontScaling={true} 
        autoCapitalize="words" 
        autoCompleteType="off" // no effect
        autoCorrect={true}
        autoFocus={false}
        blurOnSubmit={true} // not submitting
        caretHidden={false} //hides cursor
        contextMenuHidden={true} // not using any context menu
        defaultValue="ali imran" // will not work as value us set after it
        disableFullscreenUI={false} // works in landscape
        // importantForAutoFill="auto" //not working
        numberOfLines={3} //not working
        // editable={false}
        multiline={true} 
        placeholder="Enter Name Here"
        placeholderTextColor="red" 
        style={styles.input} 
        value={this.state.input_value} 
        onBlur={()=>{this.setState({current_event:"OnBlur"})}}
        onChange={()=>{this.setState({current_event:"OnChange"})}}
        onFocus={()=>{this.setState({current_event:"OnFocus"})}}
        onScroll={()=>{this.setState({current_event:"OnScroll"})}}
        // onKeyPress={(key)=>{this.setState({key_pressed:key})}}
        onChangeText={
          (text)=>{
            this.setState({input_value:text})
            // this.setState({current_event:"Ontext Change"})
        }}
        returnKeyType="next" // ->| will be return key
        selectionColor="pink"
        selectTextOnFocus={true}
        spellCheck={false} //not working
        underlineColorAndroid="blue"
        />
        <Text>Hello! {this.state.input_value} </Text>
        <Text>Event! {this.state.current_event} </Text>
        <TextInput style={styles.input} placeholder="Enter Number" keyboardType="number-pad" />
        <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true}/>
      </View>
    )
  }
}
export class Basics extends Component{
  constructor(){
    super()
    this.state={
      smile:"KEEP SMILE"
    }
  }
  componentDidMount(){
    setInterval(
      ()=>{
        this.setState((previous_state)=>{
          if(previous_state.smile=="KEEP SMILE"){
            return {smile:""}
          }
          else{
            return {smile:"KEEP SMILE"}
          }
        })
      },1000
    )
  }
  render(){
    return(
      <View>
        <Text>Hello! {this.props.name}</Text>
        <Image source={pic}></Image>
        <Text>{this.state.smile}</Text>
      </View>
    )
  }
}
export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        {/* <Text_Input /> */}
        {/* <Flex_Box1 /> */}
        {/* <Flex_Box2/> */}
        {/* <Flex_Box3 /> */}
        {/* <Flex_Box4/> */}
        {/* <Flex_Box5/> */}
        {/* <Flex_Box10/> */}
        {/* <Flex_Box_calculator/> */}
        <Basics name="Moon"/>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  input:{
    height:50,
    backgroundColor:"yellow",
    borderWidth:2,
    borderColor:"red",
  }
})
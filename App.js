/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import OptionsMenu from "react-native-options-menu";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-options-menu";
import { createAppContainer,HeaderBackButton } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StepIndicator from 'react-native-step-indicator';
//import images from 'res/images'
const MoreIcon = require("./op1.png");
const MoreIcon1 = require("./back.png");

 const label1 = ["Stare Maesto","MeuPark St"];
  const label2 = ["Old Town St","Central park"];
   const label3 = ["WayWay ipsum","Birgham subway St"];
 const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:3,
  separatorStrokeWidth: 1,
  //currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  //stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#999999',
  stepIndicatorFinishedColor: '#fe7013',
  //stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#999999',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 20,
  stepIndicatorLabelCurrentColor: '#999999',
  //stepIndicatorLabelFinishedColor: '#ffffff',
  //stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: '#999999'
}
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ProfileText: "My Profile",
      Data: [],
      loading : true,
      currentPosition: 0
    }
  }
  async componentDidMount() {
       //Have a try and catch block for catching errors.
       try {
           //Assign the promise unresolved first then get the data using the json method.
           const RadiusApiCall = await fetch('https://gist.githubusercontent.com/iranjith4/522d5b466560e91b8ebab54743f2d0fc/raw/7b108e4aaac287c6c3fdf93c3343dd1c62d24faf/radius-mobile-intern.json');
           const Radius = await RadiusApiCall.json();
           this.setState({Data: Radius.data , loading: false});
       } catch(err) {
           console.log("Error fetching data-----------", err);
       }
   }
  static navigationOptions = ({navigation}) => {
  return{
    headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('A')}}/>)
 }
}
  render(){
    return(
       <View style={styles.container}>
            <View style={styles.result}>
            /*  <OptionsMenu
          button={MoreIcon}
          buttonStyle={{ width:43 ,height: 25, margin: 10.5, resizeMode: "contain" ,  }}
          destructiveIndex={10}
          options={["Edit", "Delete", "Cancel"]}
           />
          <OptionsMenu
      button={MoreIcon1}
      buttonStyle={{ width:43 ,height: 25, margin: 10.5, resizeMode: "contain" }}
      destructiveIndex={10}
      actions={[this.editPost, this.deletePost]}/> */
              <Text style={styles.resultText}>{this.state.ProfileText}</Text>
              <Image style={styles.image} source={require('./user.png')} />
              <Text style={{ color:'white', marginRight: 130 , marginTop: 40,fontSize:15}}> Christopher Shelton </Text>
              <Text style={{ color:'#989898', marginRight: 165 , marginTop: 10}}> Krakow, Poland </Text>
              <View style={{ flexDirection:'row',justifyContent: 'space-between' ,padding: 50,paddingRight:190,marginLeft:-20 }} >
               <Text >
                <Text style={styles.RIDEText}>RIDES  </Text>
                <Text style={styles.CRIDEText}>FREE RIDES </Text>
                <Text style={styles.CreditText}>CREDITS </Text>
              </Text>
              </View>
            </View>
            <View style={styles.BlankCon}>
            <Text style={{ color:'white' ,  marginLeft: 10 , fontSize:15}}>Past trips </Text>
            <Text style={{ color:'#ff6500' ,  marginLeft: 180}}>See All </Text>
            </View>
            <ScrollView style={{ marginHorizontal: 5 }} contentContainerStyle={styles.container} >
            <View style={styles.FCon}>
               <View style={styles.stepIndicator}>
            <StepIndicator direction='vertical' stepCount= {4}
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={label1}
          />
            </View>
              <Text style={styles.calcuationsText}>Total:</Text>
                <Text style={{ fontSize: 30 ,color:'white',marginRight: 250}}>$16</Text>
                <Text style={styles.TravelTimeText}>Travel Time:1hr 35min</Text>
            </View>
            <View style={{flex:0.1}}/>
            <View style={styles.SCon}>
             <View style={styles.stepIndicator}>
            <StepIndicator direction='vertical' stepCount= {4}
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={label2}
          />
          </View>
              <Text style={styles.calcuationsText}>Total:</Text>
                <Text style={{ fontSize: 30 ,color:'white',marginRight: 250}}>$23</Text>
                <Text style={styles.TravelTimeText}>Travel Time:1hr 35min</Text>
            </View>
            <View style={{flex:0.1}}/>
            <View style={styles.TCon}>
             <View style={styles.stepIndicator}>
            <StepIndicator direction='vertical' stepCount= '4'
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={label3}
          />
           </View>
              <Text style={styles.calcuationsText}>Total:</Text>
                <Text style={{ fontSize: 30 ,color:'white',marginRight: 250}}>$5</Text>
              <Text style={styles.TravelTimeText}>Travel Time:35min</Text>
            </View>
            <View style={{flex:0.1}}/>
            </ScrollView>
        </View>
    );
  }
}

const styles =StyleSheet.create({
   container:{
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#08072F', //#001540
      justifyContent: 'space-around',
   },
   result:{
     flex: 0.7,
     backgroundColor: '#222045',alignItems:'flex-end',  borderBottomEndRadius:30,borderBottomStartRadius:30,
   },
   stepIndicator: {
   marginVertical:20,
   paddingHorizontal:10
 },
   FCon: {
     flex: 0.7,
     //height: 25,
     marginLeft: 10,
     marginRight: 10,
     backgroundColor: '#222045',
     alignItems:'flex-end',
     borderTopEndRadius:12,
     borderTopStartRadius:12,
     borderBottomEndRadius:12,
     borderBottomStartRadius:12,
   },
   SCon: {
     flex: 0.7,
    // height: 45,
    marginLeft: 10,
    marginRight: 10,
     backgroundColor: '#222045',
     alignItems:'flex-end',
     borderTopEndRadius:12,
     borderTopStartRadius:12,
     borderBottomEndRadius:12,
     borderBottomStartRadius:12,
   },
   TCon: {
     flex: 0.7,
     //height: 45,
     marginLeft: 10,
     marginRight: 10,
     backgroundColor: '#222045',
     alignItems:'flex-end',
     borderTopEndRadius:12,
     borderTopStartRadius:12,
     borderBottomEndRadius:12,
     borderBottomStartRadius:12,
   },
   BlankCon: {
     flex: 0.15,
     flexDirection: 'row',
    alignItems: 'center',
     justifyContent: 'space-around',
   },
   RIDEText:
   {
     fontSize:13,
     color: '#989898',
  //  alignContent: 'flex-start',
    //whitespace: 'nowrap',
   },
   CRIDEText:
   {
     fontSize:13,
     color: '#989898',
    // alignItems: 'flex-start'
   },
   CreditText:
   {
     fontSize:13,
     color: '#989898',

     //alignItems: 'flex-start',
   },
   calcuationsText:{
     fontSize: 15,
     color:'#989898',
     marginRight: 250,
     marginTop:10
   },
   TravelTimeText:{
     fontSize: 13,
     color:'#989898',
     marginRight: 180,
     marginBottom:15
   },
   resultText:{
     fontSize: 20,
     marginTop: 1,
     fontWeight:'normal',
     //fontStyle:'italic',
     color:'white',
     alignSelf: 'center',
    textAlign: 'center',
    //textAlignVertical: 'bottom'
   },
   image: {
   marginTop: 70,
   width: 60,
   height: 60,
   position: 'absolute', left: 20,
   resizeMode: 'contain',
  }
  })

/*const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step two</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
}); */

//export default App;

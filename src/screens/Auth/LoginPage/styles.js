import { Platform, StyleSheet } from "react-native";
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f7f7f7'

},
view:{
  paddingHorizontal:0,
  paddingVertical:20,
  borderWidth:1,
  //alignItems:'center',
  justifyContent:'center',
  borderTopLeftRadius:5,
  //borderTopEndRadius:500,
  borderTopRightRadius:500

},
main:{
    marginTop:0,
 marginLeft:13,
 paddingHorizontal:-5,
 
    
},
text:{
    fontSize:20,
   // marginTop:-100,
   

},
card: {
   // shadowColor: 'black',
     shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 0 },
     elevation: 2,
   // borderRadius: 10,
    //backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    //marginTop: 10,
    //borderWidth: 1,
  },
  image: {
    width: 34,
    height: 34,
    marginLeft:-10
  },
  input1: {
    
    marginLeft: 0,
    paddingVertical: 10,
    
    //color: colors.textColor,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    borderBottomWidth:0.5,
    width:'80%',
    marginLeft:20,
    
    
  },
})
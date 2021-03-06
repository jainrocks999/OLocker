import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#032e63',
        //alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        paddingVertical: 20,
    },
    container1: {
        flex: 1,
        backgroundColor: '#f0eeee'

    },


    Text1:
    {
       fontWeight: '400',
       color: 'grey',
        fontSize: 16
    },
    card:
    {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 25,
        //paddingHorizontal: 5,
        paddingVertical: 0,
        borderWidth: 0.2

    },
    card1:
    {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 6,
        backgroundColor: '#f0eeef',
        marginBottom: 0,
        paddingHorizontal: 35,
        paddingVertical: 25,
        marginHorizontal: 11,
        marginBottom: 20


    },
    img: {
        height: 25,
        width: 25,
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 25,
        marginTop: 17,
        fontWeight:'700'
    },
    main: {
       flexDirection: 'row',
       //alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:'#e9056b',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10
    },
    main2: {
        flexDirection: 'row',
        //alignItems:'center',
         justifyContent: 'space-between',
         paddingHorizontal: 20,
         paddingVertical:20,
         backgroundColor:'#918f90',
         borderTopLeftRadius: 10,
         borderTopRightRadius:10
     },
    main1: {
      flexDirection:'row',
      
      justifyContent:'space-between',
        backgroundColor: '#ffffff',
        paddingHorizontal:20,
        borderRadius:10,
       paddingVertical:0
        
       
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    bottomV: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100, width: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5
    },
    textB: {
        fontSize: 23,
        color: 'grey',
        fontWeight: '500',
        marginTop: 5
    },
    textC: {
        fontSize: 15,
        color: 'grey',
        fontWeight: '500',
        marginLeft: 17
    },
    button: {

        backgroundColor: '#e9056b',
        paddingVertical: 12,
        borderRadius: 40,
         paddingHorizontal:35,
    },
    textbt: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600'
    },
    rnimg:{
        marginLeft: 2,
        width: 20,
        height: 13,
        marginTop: Platform.OS == 'android' ? 14 : 4,
        //tintColor:'grey'
      },
      Flatlist: {
        //flexDirection: 'row',
       // alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 0 },
        elevation: 5,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 10,
        

    }

})


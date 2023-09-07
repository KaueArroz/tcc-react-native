import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      paddingVertical: 10,
      alignItems: 'center',
    },
    
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      margin: 'auto'
    },
    
    menu: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
      paddingRight: 10,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 20,
    },

    menuItem: {
      flex: 1,
      alignItems: 'center',
    },

    menuText: {
      color: 'black',
      textAlign: 'center',
      fontSize: 12,
      fontFamily: 'Montserrat_400Regular',
    },

  });

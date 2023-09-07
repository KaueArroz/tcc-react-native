import { StyleSheet } from "react-native";

export default StyleSheet.create({

    footerContainer: {
      flex: 1,
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      marginTop: 10,
      paddingTop: 20,
      paddingHorizontal: 30
    },

    footerSection: {
      marginTop: 10,
      marginBottom: 30,
    },

    titleFooter: {
      fontFamily: 'Montserrat_700Bold',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8
    },

    icon: {
      fontSize: 20,
      color: '#000',
      textAlign: 'center',
      paddingVertical: 8,
    },
    
    textFooter: {
      fontFamily: 'Montserrat_400Regular',
      fontSize: 16,
      textAlign: 'center',
      paddingLeft: 5
    },  

    copy: {
      fontFamily: 'Montserrat_400Regular',
      fontSize: 16,
      textAlign: "center",
      marginBottom: 20
    }
  });

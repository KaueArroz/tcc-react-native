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
  
    imgPrincipal: {
      width: 360,
      height: 195,
      resizeMode: 'contain',
    },
  
    /* estilo da lista */
  
    topicList: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    topicItem: {
      fontFamily: 'Montserrat_400Regular',
      fontSize: 16,
      marginVertical: 10,
      textAlign: 'center',
      fontWeight: '600',
    },
  
    /* titulo */
  
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      marginVertical: 30,
      fontFamily: 'Montserrat_400Regular',
    },
  
    /* estilo card */
    card: {
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      margin: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    cardImage: {
      width: 360,
      height: 195,
      resizeMode: 'cover',
    },

    cardContent: {
      padding: 10,
      backgroundColor: 'white',
    },

    cardTitle: {
      fontFamily: 'Montserrat_400Regular',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },

    cardDescription: {
      fontFamily: 'Montserrat_400Regular',
      fontSize: 14,
    },
  
    cardImageFeed: {
      width: 360,
      height: 495,
      resizeMode: 'cover',
      marginVertical: 20
    },

  });

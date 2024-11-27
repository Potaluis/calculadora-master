import { StyleSheet } from 'react-native';


const aplicacion = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:  'center',
      justifyContent: 'flex-end',
      paddingBottom:20,
    },
    fila: {
      flexDirection: 'row',
      justifyContent: "space-around",
      marginBottom:16,
      paddingHorizontal:10,
      width: '100%',
    },
  });

  export default aplicacion;
import { Text, type TextProps, StyleSheet } from 'react-native';

interface Props extends TextProps {};

export const Pantalla = ({children, ...rest}:Props) => {
  return (
    <Text style={styles.pantallaPrincipal} {...rest}>
        {children}
    </Text>
  )
}

export const Pantalla2 = ({children, ...rest}:Props) => {
  return (
    <Text style={styles.pantallaPrincipal2} {...rest}>
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        backgroundColor: "#2388ff",
        height: '14%',
        borderRadius: 20,
        color: "white"
    },
    pantallaPrincipal2: {
      fontSize: 20,
      opacity: 0.5,
      textAlign: 'right',
      fontWeight:400,
      width: '90%',
  },
  });

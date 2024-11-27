import { Pressable, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Vibration } from "react-native";
import estilos from "../estilos/botones"

interface Props {
    label: string,
    estilo: StyleProp<ViewStyle>,
    backgroundColor: string,
    color: string,
    onPress?: () => void;
}

//NoFunciona vibración
export const BotonOperacion = ({label, estilo, backgroundColor, color, onPress}:Props) => {
    return (
        <Pressable onPressIn={()=> Vibration.vibrate()}> 
            <Text 
                style={[estilos.boton, estilo, {backgroundColor}, {color}]}
                onPress={onPress}>{label}</Text>
                
        </Pressable>
    )
};



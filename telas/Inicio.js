import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
    return (
        <View style={styles.fundo}>
            <ImageBackground source={require('../misc/fundoinicio.png')} resizeMode='cover' style={styles.imagem}>
                <Text style={styles.texto}>SpikeeRush</Text>
                <View style={styles.posicionarbotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.botaotexto}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
    },
    imagem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        position: 'absolute',
        color: '#5271FF',
        lineHeight: 100,
        fontFamily: 'Poppins',
        fontSize: 48,
        fontWeight: '800',
    },
    posicionarbotao: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    botao: {
        borderWidth: 2,
        borderColor: '#5271FF',
        borderRadius: 5,
        padding: 15,
        width: 200,
        marginBottom: 20,
    },
    botaotexto: {
        fontFamily: 'Poppins',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '400',
        color: '#5271FF'
    }
});
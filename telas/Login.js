import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    return (
        <View style={styles.fundo}>
            <ImageBackground source={require('../misc/fundoapp.png')} resizeMode='cover' style={styles.imagem}>
                <Text style={styles.titulologin}>Fazer Login</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Quiz')}>
                        <Text style={styles.botaotexto}>Entrar</Text>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    titulologin: {
        fontFamily: 'Poppins',
        fontSize: 36,
        fontWeight: '600',
        color: '#3081D0'
    },
    inputContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    label: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '600',
        color: '#000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        width: 200,
        padding: 10,
        fontFamily: 'Poppins',
        fontSize: 12,
        borderRadius: 10,
        marginBottom: 10,
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
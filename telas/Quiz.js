import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';

export default function Login() {
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const perguntas = [
        {
            texto: 'Qual é a altura oficial da rede de vôlei masculina?',
            opcoes: [
                { texto: 'A) 150 cm', respostaCorreta: false },
                { texto: 'B) 330 cm', respostaCorreta: false },
                { texto: 'C) 330 cm', respostaCorreta: true },
                { texto: 'D) 224 cm', respostaCorreta: false },
            ],
        },
        {
            texto: 'Qual a altura oficial da rede de vôlei masculina?',
            opcoes: [
                { texto: 'A) 240 cm', respostaCorreta: false },
                { texto: 'B) 233 cm', respostaCorreta: false },
                { texto: 'C) 243 cm', respostaCorreta: true },
                { texto: 'D) 150 cm', respostaCorreta: false },
            ],
        },
        {
            texto: 'Quantas posições (quantidade de jogadores) tem em um time com os reservas?',
            opcoes: [
                { texto: 'A) 5', respostaCorreta: false },
                { texto: 'B) 12', respostaCorreta: true },
                { texto: 'C) 7', respostaCorreta: false },
                { texto: 'D) 8', respostaCorreta: false },
            ],
        },
        {
            texto: 'Qual é a pontuação máxima que uma equipe pode alcançar em um set de vôlei em um campeonato?',
            opcoes: [
                { texto: 'A) 15 pontos', respostaCorreta: false },
                { texto: 'B) 21 pontos', respostaCorreta: false },
                { texto: 'C) 25 pontos', respostaCorreta: true },
                { texto: 'D) 30 pontos', respostaCorreta: false },
            ],
        },
        {
            texto: 'Qual é a distância entre a linha de ataque e a linha de fundo em uma quadra de vôlei oficial?',
            opcoes: [
                { texto: 'A) 2 metros', respostaCorreta: false },
                { texto: 'B) 3 metros', respostaCorreta: true },
                { texto: 'C) 4 metros', respostaCorreta: false },
                { texto: 'D) 5 metros', respostaCorreta: false },
            ],
        },
    ];

    const handleResposta = (respostaCorreta) => {
        if (respostaCorreta) {
            setPontuacao(pontuacao + 1);
        }
        proximaPergunta();
    };

    const proximaPergunta = () => {
        if (perguntaAtual < perguntas.length - 1) {
            setPerguntaAtual(perguntaAtual + 1);
        } else {
            setMostrarResultado(true);
        }
    };

    const reiniciarQuiz = () => {
        setPerguntaAtual(0);
        setPontuacao(0);
        setMostrarResultado(false);
    };

    const renderizarPerguntaAtual = () => {
        const pergunta = perguntas[perguntaAtual];
        return (
            <View>
                <Text style={styles.textoPergunta}>{pergunta.texto}</Text>
                {renderizarOpcoes(pergunta.opcoes)}
                <TouchableOpacity style={styles.botaoProximaPergunta} onPress={proximaPergunta}>
                    <Text style={styles.textoBotaoProximaPergunta}>Próxima Pergunta</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderizarOpcoes = (opcoes) => {
        return opcoes.map((opcao, index) => (
            <TouchableOpacity key={index} style={styles.opcao} onPress={() => handleResposta(opcao.respostaCorreta)}>
                <Text>{opcao.texto}</Text>
            </TouchableOpacity>
        ));
    };

    const renderizarResultado = () => {
        return (
            <View>
                <Text style={styles.textoResultado}>Você acertou {pontuacao} de {perguntas.length} perguntas!</Text>
                <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarQuiz}>
                    <Text style={styles.textoBotaoReiniciar}>Tentar Novamente</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.fundo}>
            <StatusBar hidden={true} />
            <ImageBackground source={require('../misc/fundoapp.png')} resizeMode='cover' style={styles.imagem}>
                <View style={styles.fundoquiz}>
                    {mostrarResultado ? renderizarResultado() : renderizarPerguntaAtual()}
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    fundoquiz: {
        width: '90%',
        height: '90%',
        backgroundColor: '#B5F0DBAF',
        borderRadius: 10,
        padding: 10,
    },
    textoPergunta: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    opcao: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
    },
    botaoProximaPergunta: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    textoBotaoProximaPergunta: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoResultado: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    botaoReiniciar: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    textoBotaoReiniciar: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
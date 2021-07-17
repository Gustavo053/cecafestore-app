import React, { useState } from 'react';
import api from '../api/api';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Login() {
    const navigation = useNavigation();

    const [isFocus1, setIsFocus1] = useState(false);
    const [isFilled1, setIsFilled1] = useState(false);
    const [name1, setName1] = useState<string>();

    const [isFocus2, setIsFocus2] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);
    const [name2, setName2] = useState<string>();

    function handleRegister() {
        navigation.navigate('FormCredentialsFuncionario');
    }

    function handleFocus1() {
        setIsFocus1(true);
    }

    function handleBlur1() {
        setIsFocus1(false);
    }

    function handleInputChange1(value: string) {
        setIsFilled1(!!value);
        setName1(value);
    }

    function handleFocus2() {
        setIsFocus2(true);
    }

    function handleBlur2() {
        setIsFocus2(false);
    }

    function handleInputChange2(value: string) {
        setIsFilled2(!!value);
        setName2(value);
    }

    async function handleSubmit() {
        const response = await api.get('/produto');

        console.log(response.data);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.title}>Faça o login no sistema</Text>
                        <TextInput
                            style={[styles.input, (isFocus1 || isFilled1) && { borderColor: '#5cd65c' }]}
                            placeholder="Insira o login"
                            onFocus={handleFocus1}
                            onBlur={handleBlur1}
                            onChangeText={handleInputChange1}
                        >
                        </TextInput>
                        <TextInput
                            secureTextEntry
                            style={[styles.input, (isFocus2 || isFilled2) && { borderColor: '#5cd65c' }]}
                            placeholder="Insira a senha"
                            onFocus={handleFocus2}
                            onBlur={handleBlur2}
                            onChangeText={handleInputChange2}
                        >
                        </TextInput>
                        <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                            <Button title="Entrar" activeOpacity={0.7} onPress={handleSubmit} />
                            <TouchableOpacity activeOpacity={0.7} onPress={handleRegister}>
                                <Text style={styles.link}>Ainda não possui conta? {'\n'} Criei uma clicando aqui</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        lineHeight: 30,
        textAlign: 'center'
    },

    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    content: {
        flex: 1,
        width: '100%'
    },

    input: {
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        borderBottomWidth: 1,
        width: '100%',
        textAlign: 'left'
    },

    link: {
        marginTop: 20,
        color: '#737373'
    },
});
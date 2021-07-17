import React, { useState } from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    TextInput,
    Text,
    ScrollView
} from 'react-native';

import { MaskedTextInput } from 'react-native-mask-text'
import { Button } from '../../components/Button';
import api from '../../api/api';
import { useNavigation } from "@react-navigation/native";

export function FormAddressProdutor({ route }: any) {
    const navigation = useNavigation();

    const [isFocus1, setIsFocus1] = useState(false);
    const [isFilled1, setIsFilled1] = useState(false);
    const [name1, setName1] = useState<string>();

    const [isFocus2, setIsFocus2] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);
    const [name2, setName2] = useState<string>();

    const [isFocus3, setIsFocus3] = useState(false);
    const [isFilled3, setIsFilled3] = useState(false);
    const [name3, setName3] = useState<string>();

    const [isFocus4, setIsFocus4] = useState(false);
    const [isFilled4, setIsFilled4] = useState(false);
    const [name4, setName4] = useState<string>();

    const [isFocus5, setIsFocus5] = useState(false);
    const [isFilled5, setIsFilled5] = useState(false);
    const [name5, setName5] = useState<string>();

    const [isFocus6, setIsFocus6] = useState(false);
    const [isFilled6, setIsFilled6] = useState(false);
    const [name6, setName6] = useState<string>();

    async function handleSubmit() {
        await api.post('/produtor', {
            login: route.params?.login,
            senha: route.params?.senha,
            nome: route.params?.nome,
            contato: route.params?.contato,
            cpf: route.params?.cpf,
            endereco: {
                numero: name1,
                bairro: name2,
                cidade: name3,
                cep: name4,
                estado: name5,
                complemento: name5
            }
        });

        navigation.navigate('Login');
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

    function handleFocus3() {
        setIsFocus3(true);
    }

    function handleBlur3() {
        setIsFocus3(false);
    }

    function handleInputChange3(value: string) {
        setIsFilled3(!!value);
        setName3(value);
    }

    function handleFocus4() {
        setIsFocus4(true);
    }

    function handleBlur4() {
        setIsFocus4(false);
    }

    function handleInputChange4(value: string) {
        setIsFilled4(!!value);
        setName4(value);
    }

    function handleFocus5() {
        setIsFocus4(true);
    }

    function handleBlur5() {
        setIsFocus4(false);
    }

    function handleInputChange5(value: string) {
        setIsFilled5(!!value);
        setName5(value);
    }

    function handleFocus6() {
        setIsFocus4(true);
    }

    function handleBlur6() {
        setIsFocus4(false);
    }

    function handleInputChange6(value: string) {
        setIsFilled6(!!value);
        setName6(value);
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <Text style={styles.title}>Endereço do produtor</Text>
                            <TextInput
                                style={[styles.input, (isFocus1 || isFilled1) && { borderColor: '#5cd65c' }]}
                                placeholder="Número"
                                onFocus={handleFocus1}
                                onBlur={handleBlur1}
                                onChangeText={handleInputChange1}
                                keyboardType='numeric'
                            >
                            </TextInput>
                            <TextInput
                                style={[styles.input, (isFocus2 || isFilled2) && { borderColor: '#5cd65c' }]}
                                placeholder="Bairro"
                                onFocus={handleFocus2}
                                onBlur={handleBlur2}
                                onChangeText={handleInputChange2}
                            >
                            </TextInput>
                            <TextInput
                                style={[styles.input, (isFocus3 || isFilled3) && { borderColor: '#5cd65c' }]}
                                placeholder="Cidade"
                                onFocus={handleFocus3}
                                onBlur={handleBlur3}
                                onChangeText={handleInputChange3}
                            >
                            </TextInput>
                            <MaskedTextInput
                                style={[
                                    styles.input,
                                    (isFocus4 || isFilled4) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="CEP"
                                onFocus={handleFocus4}
                                onBlur={handleBlur4}
                                onChangeText={handleInputChange4}
                                mask={"99.999-999"}
                                keyboardType="numeric"
                            ></MaskedTextInput>
                            <TextInput
                                style={[styles.input, (isFocus5 || isFilled5) && { borderColor: '#5cd65c' }]}
                                placeholder="Estado"
                                onFocus={handleFocus5}
                                onBlur={handleBlur5}
                                onChangeText={handleInputChange5}
                            >
                            </TextInput>
                            <TextInput
                                style={[styles.input, (isFocus6 || isFilled6) && { borderColor: '#5cd65c' }]}
                                placeholder="Complemento"
                                onFocus={handleFocus6}
                                onBlur={handleBlur6}
                                onChangeText={handleInputChange6}
                            >
                            </TextInput>
                            <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                                <Button title="Cadastrar" activeOpacity={0.7} onPress={handleSubmit} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: '30%',
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
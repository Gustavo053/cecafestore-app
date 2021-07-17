import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
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
    Text,
} from "react-native";

import { MaskedTextInput } from 'react-native-mask-text';

import { Button } from "../../components/Button";
import api from "../../api/api";

export function FormPersonalFuncionario({ route }: any) {
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

    const [date, setDate] = useState("2021-08-22");

    async function handleSubmit() {
        await api.post("/funcionario", {
            login: route.params?.login,
            senha: route.params?.senha,
            nome: name1,
            matricula: name2,
            cpf: name3,
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

    function handleDate(data: string) {
        console.log(new Date(data));
        console.log(typeof new Date(data));

        // return new Date(data);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.title}>Dados do funcionário</Text>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocus1 || isFilled1) && { borderColor: "#5cd65c" },
                            ]}
                            placeholder="Insira seu nome completo"
                            onFocus={handleFocus1}
                            onBlur={handleBlur1}
                            onChangeText={handleInputChange1}
                        ></TextInput>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocus2 || isFilled2) && { borderColor: "#5cd65c" },
                            ]}
                            placeholder="Nova matricula"
                            onFocus={handleFocus2}
                            onBlur={handleBlur2}
                            onChangeText={handleInputChange2}
                        ></TextInput>
                        <MaskedTextInput
                            style={[
                                styles.input,
                                (isFocus3 || isFilled3) && { borderColor: "#5cd65c" },
                            ]}
                            placeholder="CPF"
                            onFocus={handleFocus3}
                            onBlur={handleBlur3}
                            onChangeText={handleInputChange3}
                            mask={"999.999.999-99"}
                            keyboardType="numeric"
                        ></MaskedTextInput>
                        <View
                            style={{ alignItems: "center", justifyContent: "space-around" }}
                        >
                            <Button
                                title="Cadastrar"
                                activeOpacity={0.7}
                                onPress={handleSubmit}
                            />
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
        textAlign: "center",
    },

    container: {
        flex: 1,
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
    },

    content: {
        flex: 1,
        width: "100%",
    },

    input: {
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        borderBottomWidth: 1,
        width: "100%",
        textAlign: "left",
    },

    link: {
        marginTop: 20,
        color: "#737373",
    },

    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
});

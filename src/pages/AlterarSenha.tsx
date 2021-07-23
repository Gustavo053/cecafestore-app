import React, { useState } from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    TouchableWithoutFeedback,
    View,
    TextInput,
    Text,
    StyleSheet
} from 'react-native'

import { MaskedTextInput } from 'react-native-mask-text';
import { Button } from '../components/Button';

export function AlterarSenha() {
    const [isFocusCpf, setIsFocusCpf] = useState(false);
    const [isFilledCpf, setIsFilledCpf] = useState(false);
    const [cpf, setCpf] = useState<string>();

    const [isFocusPassword, setIsFocusPassword] = useState(false);
    const [isFilledPassword, setIsFilledPassword] = useState(false);
    const [password, setPassword] = useState<string>();

    const [isFocusNewPassword, setIsFocusNewPassword] = useState(false);
    const [isFilledNewPassword, setIsFilledNewPassword] = useState(false);
    const [newPassword, setNewPassword] = useState<string>();

    const [isFocusNewPasswordConfirm, setIsFocusNewPasswordConfirm] = useState(false);
    const [isFilledNewPasswordConfirm, setIsFilledNewPasswordConfirm] = useState(false);
    const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>();

    function handleFocusCpf() {
        setIsFocusCpf(true);
    }

    function handleBlurCpf() {
        setIsFocusCpf(false);
    }

    function handleInputChangeCpf(value: string) {
        setIsFilledCpf(!!value);
        setCpf(value);
    }

    function handleFocusPassword() {
        setIsFocusPassword(true);
    }

    function handleBlurPassword() {
        setIsFocusPassword(false);
    }

    function handleInputChangePassword(value: string) {
        setIsFilledPassword(!!value);
        setPassword(value);
    }

    function handleFocusNewPassword() {
        setIsFocusNewPassword(true);
    }

    function handleBlurNewPassword() {
        setIsFocusNewPassword(false);
    }

    function handleInputChangeNewPassword(value: string) {
        setIsFilledNewPassword(!!value);
        setNewPassword(value);
    }

    function handleFocusNewPasswordConfirm() {
        setIsFocusNewPasswordConfirm(true);
    }

    function handleBlurNewPasswordConfirm() {
        setIsFocusNewPasswordConfirm(false);
    }

    function handleInputChangeNewPasswordConfirm(value: string) {
        setIsFilledNewPasswordConfirm(!!value);
        setNewPasswordConfirm(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.title}>Alterar senha do usuário</Text>
                        <MaskedTextInput
                            style={[
                                styles.input,
                                (isFocusCpf || isFilledCpf) && { borderColor: "#5cd65c" },
                            ]}
                            placeholder="CPF"
                            onFocus={handleFocusCpf}
                            onBlur={handleBlurCpf}
                            onChangeText={handleInputChangeCpf}
                            mask={"999.999.999-99"}
                            keyboardType="numeric"
                        ></MaskedTextInput>
                        <TextInput
                            secureTextEntry
                            style={[
                                styles.input,
                                (isFocusPassword || isFilledPassword) && { borderColor: "#5cd65c" },
                            ]}
                            placeholder="Insira a sua senha atual"
                            onFocus={handleFocusPassword}
                            onBlur={handleBlurPassword}
                            onChangeText={handleInputChangePassword}
                        >
                        </TextInput>
                        <TextInput
                            secureTextEntry
                            style={[
                                styles.input,
                                (isFocusNewPassword || isFilledNewPassword) && { borderColor: "#5cd65c" },
                            ]}
                            placeholder="Insira a sua nova senha"
                            onFocus={handleFocusNewPassword}
                            onBlur={handleBlurNewPassword}
                            onChangeText={handleInputChangeNewPassword}
                        >
                        </TextInput>
                        <TextInput
                            secureTextEntry
                            style={[
                                styles.input,
                                (isFocusNewPasswordConfirm || isFilledNewPasswordConfirm) && { borderColor: "#5cd65c" },
                            ]}
                            placeholder="Confirme a sua nova senha"
                            onFocus={handleFocusNewPasswordConfirm}
                            onBlur={handleBlurNewPasswordConfirm}
                            onChangeText={handleInputChangeNewPasswordConfirm}
                        >
                        </TextInput>
                        <Button title="Alterar senha" />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    title: {
        marginTop: '30%',
        fontSize: 25,
        lineHeight: 30,
        textAlign: 'center'
    },

    input: {
        fontSize: 18,
        marginTop: 40,
        padding: 10,
        borderBottomWidth: 1,
        width: '100%',
        textAlign: 'left'
    },
});
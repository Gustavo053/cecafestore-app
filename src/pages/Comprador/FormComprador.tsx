import React, {useState} from "react";
import {Text,
        View, 
        StyleSheet, 
        TextInput, 
        TouchableWithoutFeedback, 
        Keyboard, 
        SafeAreaView, 
        KeyboardAvoidingView,
        Platform,
        ScrollView
} from "react-native";

import api from "../../api/api";
import { MaskedTextInput } from 'react-native-mask-text';
import { Button } from "../../components/Button";

export function FormComprador(){
    const [isFocusNome, setIsFocusNome] = useState(false);
    const [isFilledNome, setIsFilledNome] = useState(false);
    const [nome, setNome] = useState<string>();
    const [nomeError, setNomeError] = useState<string>(" ");

    const [isFocusContato, setIsFocusContato] = useState(false);
    const [isFilledContato, setIsFilledContato] = useState(false);
    const [contato, setContato] = useState<string>();
    const [contatoError, setContatoError] = useState<string>(" ");

    const [isFocusCpf, setIsFocusCpf] = useState(false);
    const [isFilledCpf, setIsFilledCpf] = useState(false);
    const [cpf, setCpf] = useState<string>();
    const [cpfError, setCpfError] = useState<string>(" ");

    const [isFocusEstado, setIsFocusEstado] = useState(false);
    const [isFilledEstado, setIsFilledEstado] = useState(false);
    const [estado, setEstado] = useState<string>();
    const [estadoError, setEstadoError] = useState<string>(" ");

    const [isFocusCidade, setIsFocusCidade] = useState(false);
    const [isFilledCidade, setIsFilledCidade] = useState(false);
    const [cidade, setCidade] = useState<string>();
    const [cidadeError, setCidadeError] = useState<string>(" ");

    const [isFocusBairro, setIsFocusBairro] = useState(false);
    const [isFilledBairro, setIsFilledBairro] = useState(false);
    const [bairro, setBairro] = useState<string>();
    const [bairroError, setBairroError] = useState<string>(" ");

    const [isFocusNumero, setIsFocusNumero] = useState(false);
    const [isFilledNumero, setIsFilledNumero] = useState(false);
    const [numero, setNumero] = useState<string>();
    const [numeroError, setNumeroError] = useState<string>(" ");

    const [isFocusCep, setIsFocusCep] = useState(false);
    const [isFilledCep, setIsFilledCep] = useState(false);
    const [cep, setCep] = useState<string>();
    const [cepError, setCepError] = useState<string>(" ");

    const [isFocusComplemento, setIsFocusComplemento] = useState(false);
    const [isFilledComplemento, setIsFilledComplemento] = useState(false);
    const [complemento, setComplemento] = useState<string>();

    const [isFocusLogin, setIsFocusLogin] = useState(false);
    const [isFilledLogin, setIsFilledLogin] = useState(false);
    const [login, setLogin] = useState<string>();
    const [loginError, setLoginError] = useState<string>(" ");

    const [isFocusSenha, setIsFocusSenha] = useState(false);
    const [isFilledSenha, setIsFilledSenha] = useState(false);
    const [senha, setSenha] = useState<string>();
    const [senhaError, setSenhaError] = useState<string>(" ");

    const [submitError, setSubmitError] = useState<string>("");

    async function handleSubmit() {
        if (nomeError == "" && contatoError == "" && cpfError == "" && loginError == "" && senhaError == "" && numeroError == "" && bairroError == "" && cidadeError == "" && cepError == "" && estadoError == "") {
            setSubmitError("");

            await api.post("/comprador", {
                login: login,
                senha: senha,
                nome: nome,
                contato: contato,
                cpf: cpf,
                endereco: {
                    numero: numero,
                    bairro: bairro,
                    cidade: cidade,
                    cep: cep,
                    estado: estado,
                    complemento: complemento
                },
            });
        } else {
            setSubmitError("Preencha todos os campos");
        }
        
    }

    function handleFocusNome() {
        setIsFocusNome(true);
    }

    function handleBlurNome() {
        setIsFocusNome(false);

        if (nome == "" || nome == null || nome == undefined){
            setNomeError("Campo obrigatório");
        } else {
            setNomeError("");
        }
    }

    function handleInputChangeNome(value: string) {
        setIsFilledNome(!!value);
        setNome(value);
    }

    function handleFocusContato() {
        setIsFocusContato(true);
    }

    function handleBlurContato() {
        setIsFocusContato(false);

        if (contato == "" || contato == null || contato == undefined){
            setContatoError("Campo obrigatório");
        } else {
            setContatoError("");
        }
    }

    function handleInputChangeContato(value: string) {
        setIsFilledContato(!!value);
        setContato(value);
    }

    function handleFocusCpf() {
        setIsFocusCpf(true);
    }

    function handleBlurCpf() {
        setIsFocusCpf(false);

        if (cpf == "" || cpf == null || cpf == undefined){
            setCpfError("Campo obrigatório");
        } else {
            setCpfError("");
        }
    }

    function handleInputChangeCpf(value: string) {
        setIsFilledCpf(!!value);
        setCpf(value);
    }

    function handleFocusEstado() {
        setIsFocusEstado(true);
    }

    function handleBlurEstado() {
        setIsFocusEstado(false);

        if (estado == "" || estado == null || estado == undefined){
            setEstadoError("Campo obrigatório");
        } else {
            setEstadoError("");
        }
    }

    function handleInputChangeEstado(value: string) {
        setIsFilledEstado(!!value);
        setEstado(value);
    }

    function handleFocusCidade() {
        setIsFocusCidade(true);
    }

    function handleBlurCidade() {
        setIsFocusCidade(false);

        if (cidade == "" || cidade == null || cidade == undefined){
            setCidadeError("Campo obrigatório");
        } else {
            setCidadeError("");
        }
    }

    function handleInputChangeCidade(value: string) {
        setIsFilledCidade(!!value);
        setCidade(value);
    }

    function handleFocusBairro() {
        setIsFocusBairro(true);
    }

    function handleBlurBairro() {
        setIsFocusBairro(false);

        if (bairro == "" || bairro == null || bairro == undefined){
            setBairroError("Campo obrigatório");
        } else {
            setBairroError("");
        }
    }

    function handleInputChangeBairro(value: string) {
        setIsFilledBairro(!!value);
        setBairro(value);
    }

    function handleFocusNumero() {
        setIsFocusNumero(true);
    }

    function handleBlurNumero() {
        setIsFocusNumero(false);

        if (numero == "" || numero == null || numero == undefined){
            setNumeroError("Campo obrigatório");
        } else {
            setNumeroError("");
        }
    }

    function handleInputChangeNumero(value: string) {
        setIsFilledNumero(!!value);
        setNumero(value);
    }

    function handleFocusCep() {
        setIsFocusCep(true);
    }

    function handleBlurCep() {
        setIsFocusCep(false);

        if (cep == "" || cep == null || cep == undefined){
            setCepError("Campo obrigatório");
        } else {
            setCepError("");
        }
    }

    function handleInputChangeCep(value: string) {
        setIsFilledCep(!!value);
        setCep(value);
    }

    function handleFocusComplemento() {
        setIsFocusComplemento(true);
    }

    function handleBlurComplemento() {
        setIsFocusComplemento(false);
    }

    function handleInputChangeComplemento(value: string) {
        setIsFilledComplemento(!!value);
        setComplemento(value);
    }

    function handleFocusLogin() {
        setIsFocusLogin(true);
    }

    function handleBlurLogin() {
        setIsFocusLogin(false);

        if (login == "" || login == null || login == undefined){
            setLoginError("Campo obrigatório");
        } else {
            setLoginError("");
        }
    }

    function handleInputChangeLogin(value: string) {
        setIsFilledLogin(!!value);
        setLogin(value);
    }

    function handleFocusSenha() {
        setIsFocusSenha(true);
    }

    function handleBlurSenha() {
        setIsFocusSenha(false);

        if (senha == "" || senha == null || senha == undefined){
            setSenhaError("Campo obrigatório");
        } else {
            setSenhaError("");
        }
    }

    function handleInputChangeSenha(value: string) {
        setIsFilledSenha(!!value);
        setSenha(value);
    }

    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <Text style={styles.title}>Cadastro do Comprador</Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusNome || isFilledNome) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Nome"
                                onFocus={handleFocusNome}
                                onBlur={handleBlurNome}
                                onChangeText={handleInputChangeNome}
                            ></TextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {nomeError}
                            </Text>
                            <MaskedTextInput
                                style={[
                                    styles.input,
                                    (isFocusContato || isFilledContato) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Contato"
                                onFocus={handleFocusContato}
                                onBlur={handleBlurContato}
                                onChangeText={handleInputChangeContato}
                                mask={"(99) 9 9999-9999"}
                                keyboardType="numeric"
                            ></MaskedTextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {contatoError}
                            </Text>
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
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {cpfError}
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusEstado || isFilledEstado) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Estado"
                                onFocus={handleFocusEstado}
                                onBlur={handleBlurEstado}
                                onChangeText={handleInputChangeEstado}
                            ></TextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {estadoError}
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusCidade || isFilledCidade) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Cidade"
                                onFocus={handleFocusCidade}
                                onBlur={handleBlurCidade}
                                onChangeText={handleInputChangeCidade}
                            ></TextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {cidadeError}
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusBairro || isFilledBairro) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Bairro"
                                onFocus={handleFocusBairro}
                                onBlur={handleBlurBairro}
                                onChangeText={handleInputChangeBairro}
                            ></TextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {bairroError}
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusNumero || isFilledNumero) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Número"
                                onFocus={handleFocusNumero}
                                onBlur={handleBlurNumero}
                                onChangeText={handleInputChangeNumero}
                                keyboardType="numeric"
                            ></TextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {numeroError}
                            </Text>
                            <MaskedTextInput
                                style={[
                                    styles.input,
                                    (isFocusCep || isFilledCep) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="CEP"
                                onFocus={handleFocusCep}
                                onBlur={handleBlurCep}
                                onChangeText={handleInputChangeCep}
                                mask={"99999-999"}
                                keyboardType="numeric"
                            ></MaskedTextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {cepError}
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusComplemento || isFilledComplemento) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Complemento"
                                onFocus={handleFocusComplemento}
                                onBlur={handleBlurComplemento}
                                onChangeText={handleInputChangeComplemento}
                            ></TextInput>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusLogin || isFilledLogin) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Login"
                                onFocus={handleFocusLogin}
                                onBlur={handleBlurLogin}
                                onChangeText={handleInputChangeLogin}
                            ></TextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {loginError}
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusSenha || isFilledSenha) && { borderColor: "#5cd65c" },
                                ]}
                                placeholder="Senha"
                                onFocus={handleFocusSenha}
                                onBlur={handleBlurSenha}
                                onChangeText={handleInputChangeSenha}
                            ></TextInput>
                            <Text style={{ color: "tomato", alignSelf: "center" }}>
                                {senhaError}
                            </Text>
                            <View
                                style={{ alignItems: "center", justifyContent: "space-around", marginBottom: 30 }}
                            >
                                <Button
                                        title="Cadastrar"
                                        activeOpacity={0.7}
                                        onPress={handleSubmit}
                                />
                            </View>
                            <Text style={{ color: "tomato", alignSelf: "center", marginBottom: 30 }}>
                                {submitError}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
    },

    title: {
        fontSize: 25,
        lineHeight: 30,
        textAlign: "center",
        marginTop: 60
    },

    input: {
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        borderBottomWidth: 1,
        width: "100%",
        textAlign: "center",
    },

    scrollView: {
        width: "100%"
    }
});
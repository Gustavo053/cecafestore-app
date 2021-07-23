import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export function HomeProdutor() {
    const navigation = useNavigation();

    function handleProductRegister() {
        navigation.navigate('FormProduto');
    }

    function handleProducts() {
        navigation.navigate('ListProduto');
    }

    function changePassword() {
        navigation.navigate('AlterarSenha');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.fotoPerfil}>
                    <Image style={{
                        width: '100%',
                        height: '100%'
                    }} source={require('../../assets/produtor.png')} />
                </View>
                <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 25 }}>
                    Nome do produtor
                </Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }} />
                <TouchableOpacity style={[styles.button, styles.marginTop50]} activeOpacity={0.7} onPress={handleProductRegister}>
                    <Text style={styles.textButton}>Cadastrar um novo produto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleProducts}>
                    <Text style={styles.textButton}>Produtos cadastrados</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ textAlign: 'center', color: '#737373', marginTop: 40, fontSize: 16 }} onPress={changePassword}>Alterar senha</Text>
                </TouchableOpacity>
            </View>
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

    fotoPerfil: {
        height: 200,
        borderStyle: 'solid',
        borderColor: '#5cd65c',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10
    },

    textButton: {
        textAlign: 'center',
        padding: 20,
        fontSize: 18,
        color: 'white'
    },

    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        height: 56,
        borderRadius: 16,
        backgroundColor: '#5cd65c',
        marginTop: 15
    },

    marginTop50: {
        marginTop: 50
    }
});
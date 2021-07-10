import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    Text
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 20,
        color: 'white'
    },

    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 56,
        borderRadius: 16,
        backgroundColor: '#5cd65c',
        marginTop: 50
    },
});
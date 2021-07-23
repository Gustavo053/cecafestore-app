import { useNavigation } from '@react-navigation/native';
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
	ImageBackground,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-ui-lib';
import api from '../../api/api';
import { Picker } from '@react-native-picker/picker';

const plusIcon = require('../../../assets/icons/plusSmall.png');
const image = require('../../../assets/frutas.jpg');

export function FormProduto() {
	const navigation = useNavigation();

	const [isFocus1, setIsFocus1] = useState(false);
	const [isFilled1, setIsFilled1] = useState(false);
	const [name1, setName1] = useState<string>();
	const [name1Error, setName1Error] = useState<string>('');

	const [isFocus2, setIsFocus2] = useState(false);
	const [isFilled2, setIsFilled2] = useState(false);
	const [name2, setName2] = useState<string>();
	const [name2Error, setName2Error] = useState<string>('');

	const [isFocus3, setIsFocus3] = useState(false);
	const [isFilled3, setIsFilled3] = useState(false);
	const [name3, setName3] = useState<string>();
	const [name3Error, setName3Error] = useState<string>('');

	const [date, setDate] = useState('2021-08-22');
	const [submitError, setSubmitError] = useState<string>('');

	const [categoria, setCategoria] = useState();

	async function handleSubmit() {
		if (name1Error == '' && name2Error == '' && name3Error == '') {
			setSubmitError('');
			await api.post('/produto', {
				nome: name1,
				categoria: name2,
				qtdCaixa: name3,
				dataValidade: Date.parse(date),
			});

			navigation.navigate('ListProduto');
		} else {
			setSubmitError('Preencha todos os campos');
		}
	}

	function goToListProduto() {
		navigation.navigate('ListProduto');
	}

	function handleFocus1() {
		setIsFocus1(true);
	}

	function handleBlur1() {
		setIsFocus1(false);

		if (name1 == '' || name1 == null || name1 == undefined) {
			setName1Error('Campo obrigatório');
		} else {
			setName1Error('');
		}
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
		if (name2 == '' || name2 == null || name2 == undefined) {
			setName2Error('Campo obrigatório');
		} else {
			setName2Error('');
		}
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

		if (name3 == '' || name3 == null || name3 == undefined) {
			setName3Error('Campo obrigatório');
		} else {
			setName3Error('');
		}
	}

	function handleInputChange3(value: string) {
		setIsFilled3(!!value);
		setName3(value);
	}

	return (
		<ImageBackground source={image} resizeMode='cover' style={styles.image}>
			<SafeAreaView style={styles.container}>
				<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View>
							<Text style={styles.title}>Cadastro de produto</Text>
							<ScrollView>
								<TextInput
									style={[styles.input, (isFocus1 || isFilled1) && { borderColor: '#5cd65c' }]}
									placeholder='Nome do produto'
									onFocus={handleFocus1}
									onBlur={handleBlur1}
									onChangeText={handleInputChange1}
								></TextInput>
								<Text style={{ color: 'tomato', alignSelf: 'center' }}>{name1Error}</Text>
								<Text style={styles.inputHint}>Categoria do produto</Text>
								<Picker
									style={styles.select}
									selectedValue={categoria}
									onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
								>
									<Picker.Item label='Fruta' value='fruta' />
									<Picker.Item label='Grão' value='grao' />
									<Picker.Item label='Verdura' value='verdura' />
									<Picker.Item label='Legume' value='legume' />
									<Picker.Item label='Hortaliça' value='hortaliça' />
								</Picker>
								<Text style={{ color: 'tomato', alignSelf: 'center' }}>{name2Error}</Text>
								<TextInput
									style={[styles.input, (isFocus2 || isFilled2) && { borderColor: '#5cd65c' }]}
									placeholder='Caixas disponíveis'
									onFocus={handleFocus3}
									onBlur={handleBlur3}
									onChangeText={handleInputChange3}
									keyboardType='numeric'
								></TextInput>
								<Text style={{ color: 'tomato', alignSelf: 'center' }}>{name3Error}</Text>
								<DatePicker
									style={styles.datePickerStyle}
									date={date}
									mode='date'
									placeholder='Data de validade'
									format='YYYY-MM-DD'
									confirmBtnText='Confirm'
									cancelBtnText='Cancel'
									customStyles={{
										dateIcon: {
											position: 'absolute',
											left: 0,
											top: 4,
											marginLeft: 0,
										},
										dateInput: {
											marginLeft: 36,
										},
									}}
									onDateChange={(date) => {
										setDate(date);
									}}
								/>
								<View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
									{/* <Button  title='Cadastrar' activeOpacity={0.7} onPress={handleSubmit} /> */}

									<Button
										backgroundColor='#30B650'
										label='Cadastrar'
										labelStyle={{ fontWeight: '900' }}
										style={{ marginBottom: 20, marginTop: 20 }}
										iconSource={plusIcon}
										enableShadow
										borderRadius={10}
										onPress={handleSubmit}
									/>
									<Text style={{ color: 'tomato', alignSelf: 'center' }}>{submitError}</Text>
									{/* <Button title='Listar produtos' onPress={goToListProduto} /> */}
								</View>
							</ScrollView>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		lineHeight: 30,
		textAlign: 'center',
		marginTop: 80,
		color: '#598234',
		fontFamily: 'Roboto-Black',
	},

	image: {
		flex: 1,
		justifyContent: 'center',
	},

	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
	},

	content: {
		flex: 1,
		width: '100%',
	},

	input: {
		fontSize: 18,
		marginTop: 50,
		padding: 10,
		borderBottomWidth: 1,
		color: '#598234',
		width: '100%',
		textAlign: 'center',
		fontFamily: 'Roboto-Black',
	},

	link: {
		marginTop: 20,
		color: '#737373',
	},

	inputHint: {
		fontSize: 18,
		marginTop: 10,
		padding: 10,
		color: 'black',
		width: '100%',
		textAlign: 'center',
	},

	select: {
		fontSize: 15,
		color: '#598234',
		width: '100%',
	},

	datePickerStyle: {
		width: 200,
		marginTop: 20,
	},
});

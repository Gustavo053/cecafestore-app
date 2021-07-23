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
import { MaskedTextInput } from 'react-native-mask-text';

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

	const [isFocus4, setIsFocus4] = useState(false);
	const [isFilled4, setIsFilled4] = useState(false);
	const [name4, setName4] = useState<string>('0,00');
	const [name4Error, setName4Error] = useState<string>('');

	const [date, setDate] = useState('2021-08-22');
	const [submitError, setSubmitError] = useState<string>('');

	const [categoria, setCategoria] = useState<string>('fruta');
	const [unidadeMedida, setUnidadeMedida] = useState<string>('quilo');

	async function handleSubmit() {
		console.log('nome:', name1);
		console.log('categoria:', categoria);
		console.log('quantidade:', name3);
		console.log('unidadeMedida:', unidadeMedida);
		console.log('preco:', name4.split('$')[1]);

		if (name1Error == '' && name3Error == '' && name4Error == '' && categoria != '' && unidadeMedida != '') {
			setSubmitError('');
			await api
				.post('/produto', {
					nome: name1,
					categoria: categoria,
					quantidade: name3,
					unidadeMedida: unidadeMedida,
					preco: name4.split('$')[1],
					dataValidade: Date.parse(date),
				})
				.then((res) => {
					console.log(res);

					goToListProduto();
				})
				.catch((error) => {
					console.log(error);
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

	function handleFocus4() {
		setIsFocus4(true);
	}

	function handleBlur4() {
		setIsFocus4(false);

		if (name3 == '' || name3 == null || name3 == undefined) {
			setName4Error('Campo obrigatório');
		} else {
			setName4Error('');
		}
	}

	function handleInputChange4(value: string) {
		setIsFilled4(!!value);
		setName4(value);
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
								<View style={styles.container}>
									<View style={styles.row}>
										<Text style={styles.inputHint}>Categoria do produto: </Text>
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
									</View>
								</View>
								<View style={styles.container}>
									<View style={styles.row}>
										<Text style={styles.inputHint}>Unidade de medida: </Text>
										<Picker
											style={styles.select}
											selectedValue={unidadeMedida}
											onValueChange={(itemValue, itemIndex) => {
												setUnidadeMedida(itemValue);
												console.log('i-', itemValue);
												console.log(unidadeMedida);
											}}
										>
											<Picker.Item label='Quilo' value='quilo' />
											<Picker.Item label='Unidade' value='unidade' />
											<Picker.Item label='Arroba' value='arroba' />
											<Picker.Item label='Tonelada' value='tonelada' />
										</Picker>
									</View>
								</View>
								<View style={styles.container}>
									<View style={styles.row}>
										<Text style={styles.inputHint}>Quantidade: </Text>
										<TextInput
											style={[(isFocus3 || isFilled3) && { borderColor: '#5cd65c' }]}
											placeholder='Quantidade'
											onFocus={handleFocus3}
											onBlur={handleBlur3}
											onChangeText={handleInputChange3}
											keyboardType='numeric'
										></TextInput>
										<Text style={(styles.fullWidth, { color: 'tomato', alignSelf: 'center' })}>
											{name3Error}
										</Text>
									</View>
								</View>
								<View style={styles.viewPreco}>
									<Text style={styles.inputHint2}>Preço por medida</Text>
									<MaskedTextInput
										type='currency'
										options={{
											prefix: 'R$',
											decimalSeparator: ',',
											groupSeparator: '.',
											precision: 2,
										}}
										style={[
											styles.inputPreco,
											(isFocus4 || isFilled4) && { borderColor: '#5cd65c' },
										]}
										placeholder='Preço'
										onFocus={handleFocus4}
										onBlur={handleBlur4}
										onChangeText={handleInputChange4}
										keyboardType='numeric'
									/>
									<Text style={(styles.fullWidth, { color: 'tomato', alignSelf: 'center' })}>
										{name3Error}
									</Text>
								</View>
								<View style={styles.viewPreco}>
									<Text style={styles.inputHint2}>Validade</Text>
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
								</View>

								<View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
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
									<Button label='Listar produtos' onPress={goToListProduto} />
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
	},

	image: {
		flex: 1,
		justifyContent: 'center',
	},

	row: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '90%',
		backgroundColor: '#dbdbdb',
		flexWrap: 'wrap',
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
		marginTop: 20,
		padding: 10,
		borderBottomWidth: 1,
		color: '#598234',
		width: '100%',
		textAlign: 'center',
	},

	link: {
		marginTop: 20,
		color: '#737373',
	},

	inputHint: {
		fontSize: 18,
		color: 'black',
		backgroundColor: '#dbdbdb',
		padding: 10,
		width: '50%',
	},

	inputPreco: {
		width: '50%',
		fontSize: 18,
		marginTop: 20,
		padding: 10,
		borderBottomWidth: 1,
		color: 'black',
	},

	fullWidth: {
		width: '100%',
	},

	viewPreco: {
		flex: 1,
		flexDirection: 'row',
	},

	select: {
		fontSize: 15,
		color: '#000000',
		width: '50%',
		backgroundColor: '#dbdbdb',
		padding: 10,
	},

	inputHint2: {
		fontSize: 20,
		color: 'black',
		padding: 10,
		width: '50%',
		marginStart: 10,
		marginTop: 20,
	},

	datePickerStyle: {
		marginTop: 20,
	},
});

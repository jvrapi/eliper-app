import { FormikErrors } from 'formik';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, TextInputProps, View, TextInput } from 'react-native';
import { colors } from '../../../assets/styles';

interface Props extends TextInputProps {
	password?: boolean;
	errors?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
	label: string;
	icon?: JSX.Element;
}

const InputComponent: React.FC<Props> = ({ password, errors, label, icon, ...props }) => {
	const textInputRef = useRef<TextInput>(null);

	useEffect(() => {
		textInputRef.current?.setNativeProps({
			style: input,
		});
	}, [password]);

	function renderLabel() {
		if (errors) {
			return errors as string;
		}
		return label;
	}
	const { container, input } = styles(errors);
	return (
		<View style={container}>
			{icon}

			<TextInput
				ref={textInputRef}
				style={input}
				placeholder={renderLabel()}
				secureTextEntry={password}
				placeholderTextColor='#8e8e8e'
				{...props}
			/>
		</View>
	);
};

const styles = (errors?: string | string[] | FormikErrors<any> | FormikErrors<any>[]) =>
	StyleSheet.create({
		container: {
			width: '100%',
			height: 60,
			flexDirection: 'row',
			borderRadius: 30,
			paddingHorizontal: 15,
			alignItems: 'center',
			marginBottom: 15,
			borderColor: errors ? colors.danger : '#000000',
			borderStyle: 'solid',
			borderWidth: 2,
			backgroundColor: colors.white,
		},
		input: {
			flex: 1,
			fontSize: 15,
			marginLeft: 10,
			fontFamily: 'Poppins-Regular',
		},
	});

export default InputComponent;

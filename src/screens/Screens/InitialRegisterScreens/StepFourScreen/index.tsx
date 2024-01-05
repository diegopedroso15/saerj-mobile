import React, { useState } from 'react'
import { ButtonV1, InputV1, ModalV1, SwitchV1, TextV1 } from "../../../../components/Molecules";
import { ScreenStepsContainerV1 } from "../../../../components/Organisms/ScreenStepsContainerV1";
import { useForm, Controller } from 'react-hook-form';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const StepFourScreen = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const { navigate } = navigation;

    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setIsVisible(true)
        // navigate('StepFour'); // Home Dashboard
    };

    type field = {
        name: string;
        label: string;
        placeholder: string;
        type: "number" | "text";
        rules: object;
        isText?: boolean;
        text?: string;
        isLink?: boolean;
        linkOnPress?: () => void;
    }

    const fields: Array<field> = [
        { name: 'nomeCompletoTitular', label: 'Nome completo (Titular)', placeholder: 'Nome completo (Titular)', type: 'text', rules: { required: true } },
        { name: 'agencia', label: 'Agência', placeholder: 'Agência', type: 'number', rules: { required: true } },
        { name: 'numeroConta', label: 'Número da conta', placeholder: 'Número da conta', type: 'number', rules: { required: true } },
        { name: 'banco', label: 'Banco', placeholder: 'Banco', type: 'text', rules: { required: true } },
        { name: 'tipo', label: 'Tipo', placeholder: 'Tipo', type: 'text', rules: { required: true } },
    ];

    const fieldsPhysicalPerson: Array<field> = [
        { name: 'cpf', label: 'CPF', placeholder: 'CPF', type: 'text', rules: { required: true } },
        { name: 'telefone', label: 'Telefone', placeholder: 'Telefone', type: 'text', rules: { required: true } },
        { name: 'cep', label: 'CEP', placeholder: 'CEP', type: 'text', rules: { required: true } },
        { name: 'endereco', label: 'Endereço', placeholder: 'Endereço', type: 'text', rules: { required: true } },
    ];

    type ActStyle = "primary" | "secondary" | "cancel";

    type ActType = Array<{
        label: string;
        onPress: () => void;
        ActStyle: ActStyle;
        disabled?: boolean;
    }>;

    const actions: ActType = [
        {
            label: 'Cancelar',
            ActStyle: 'cancel',
            onPress: () => console.log("Cancel Pressed"),
        },
        {
            label: 'Aceitar',
            ActStyle: 'primary',
            onPress: () => console.log("Cancel Pressed"),
        },
    ];

    return (
        <ScreenStepsContainerV1 title="Dados bancários" description="Informe o titular e os dados bancários necessários" step={4}>
            <View style={styles.formContainer}>
                {fields.map((field, index) => (
                    <Controller
                        key={index}
                        control={control}
                        rules={field.rules}
                        render={({ field: { onChange, onBlur, value } }) => (
                            field.isLink ?
                                <TouchableOpacity onPress={field.linkOnPress}>
                                    <TextV1 color='blue' type='text'>{field.text}</TextV1>
                                </TouchableOpacity>
                                :
                                field.isText ?
                                    <TextV1 type='text'>{field.text}</TextV1>
                                    :
                                    <InputV1
                                        placeholder={field.placeholder}
                                        type={field.type}
                                        onTextChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        error={!!errors[field.name]}
                                    />
                        )}
                        name={field.name}
                        defaultValue=""
                    />
                ))}
                <SwitchV1 isActive={isActive} setIsActive={setIsActive} text='Pessoa física?'></SwitchV1>
                {
                    isActive &&
                    fieldsPhysicalPerson.map((field, index) => (
                        <Controller
                            key={index}
                            control={control}
                            rules={field.rules}
                            render={({ field: { onChange, onBlur, value } }) => (
                                field.isLink ?
                                    <TouchableOpacity onPress={field.linkOnPress}>
                                        <TextV1 color='blue' type='text'>{field.text}</TextV1>
                                    </TouchableOpacity>
                                    :
                                    field.isText ?
                                        <TextV1 type='text'>{field.text}</TextV1>
                                        :
                                        <InputV1
                                            placeholder={field.placeholder}
                                            type={field.type}
                                            onTextChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            error={!!errors[field.name]}
                                        />
                            )}
                            name={field.name}
                            defaultValue=""
                        />
                    ))
                }
            </View>
            <View style={styles.actionsContainer}>
                <ButtonV1 type="primary" width="half" outline onPress={() => navigation.goBack()}>Anterior</ButtonV1>
                <ButtonV1 type="primary" width="half" onPress={handleSubmit(onSubmit)}>Próximo</ButtonV1>
            </View>
            <ModalV1 actions={actions} isVisible={isVisible} setIsVisible={setIsVisible} message='Clicando em “Aceitar” você declara que concorda com nossos termos e condições.' title='Termos e condições' ></ModalV1>
        </ScreenStepsContainerV1>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        paddingVertical: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formContainer: {
        gap: 16
    }
})

export default StepFourScreen;
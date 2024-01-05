import React from 'react'
import { ButtonV1, InputV1, TextV1 } from "../../../../components/Molecules";
import { ScreenStepsContainerV1 } from "../../../../components/Organisms/ScreenStepsContainerV1";
import { useForm, Controller } from 'react-hook-form';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const StepOneScreen = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const { navigate } = navigation;

    const onSubmit = (data) => {
        console.log(data);
        navigate('StepTwo');
    };

    const fields: Array<{
        name: string;
        label: string;
        placeholder: string;
        type: "number" | "text";
        rules: object;
        isText?: boolean;
        text?: string;
        isLink?: boolean;
        linkOnPress?: () => void;
    }> = [
            { name: 'cnpj', label: 'CPNJ', placeholder: 'CNPJ', type: 'text', rules: { required: true } },
            { name: '', label: '', placeholder: '', type: 'text', rules: {}, isText: true, text: 'Não tenho CNPJ', isLink: true, linkOnPress: () => navigate('WithoutCNPJ') },
            { name: 'razaoSocial', label: 'Razão Social', placeholder: 'Razão Social', type: 'text', rules: { required: true } },
            { name: 'especialidade', label: 'Especialidade', placeholder: 'Especialidade', type: 'text', rules: { required: true } },
            { name: '', label: '', placeholder: '', type: 'text', rules: {}, isText: true, text: 'Informações que serão exibidas no app:', isLink: false, linkOnPress: () => null },
            { name: 'nomeLoja', label: 'Nome da loja', placeholder: 'Nome da loja', type: 'text', rules: { required: true } },
            { name: 'telLoja', label: 'Telefone ou celular da loja', placeholder: 'Telefone ou celular da loja', type: 'text', rules: { required: true } },
            { name: 'descricao', label: 'Descrição da loja', placeholder: 'Descrição da loja', type: 'text', rules: { required: true } },
        ];

    return (
        <ScreenStepsContainerV1 title="Informações da Loja" description="Preencha todas as informações da loja" step={1}>
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
            </View>
            <View style={styles.actionsContainer}>
                <ButtonV1 type="primary" width="full" onPress={handleSubmit(onSubmit)}>Próximo</ButtonV1>
            </View>
        </ScreenStepsContainerV1>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        paddingVertical: 16
    },
    formContainer: {
        gap: 16
    }
})

export default StepOneScreen;
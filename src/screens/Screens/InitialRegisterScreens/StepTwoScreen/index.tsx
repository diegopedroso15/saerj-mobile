import React from 'react'
import { ButtonV1, InputV1, TextV1 } from "../../../../components/Molecules";
import { ScreenStepsContainerV1 } from "../../../../components/Organisms/ScreenStepsContainerV1";
import { useForm, Controller } from 'react-hook-form';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const StepTwoScreen = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const { navigate } = navigation;

    const onSubmit = (data) => {
        console.log(data);
        navigate('StepThree');
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
            { name: 'cep', label: 'CEP', placeholder: 'CEP', type: 'text', rules: { required: true } },
            { name: '', label: '', placeholder: '', type: 'text', rules: {}, isText: true, text: 'Descubra seu CEP', isLink: true, linkOnPress: () => navigate('WithoutCNPJ') },
            { name: 'cidade', label: 'Cidade', placeholder: 'Cidade', type: 'text', rules: { required: true } },
            { name: 'estado', label: 'Estado', placeholder: 'Estado', type: 'text', rules: { required: true } },
            { name: 'bairro', label: 'Bairro', placeholder: 'Bairro', type: 'text', rules: { required: true } },
            { name: 'numero', label: 'Número', placeholder: 'Número', type: 'number', rules: { required: true } },
            { name: 'complemento', label: 'Complemento (Opcional)', placeholder: 'Complemento (Opcional)', type: 'text', rules: { required: false } },
            { name: 'observacoes', label: 'Observações (Opcional)', placeholder: 'Observações (Opcional)', type: 'text', rules: { required: false } },
        ];

    return (
        <ScreenStepsContainerV1 title="Endereço da Loja" description="Preencha todas as informações de endereço da sua loja" step={2}>
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
                <ButtonV1 type="primary" width="half" outline onPress={() => navigation.goBack()}>Anterior</ButtonV1>
                <ButtonV1 type="primary" width="half" onPress={handleSubmit(onSubmit)}>Próximo</ButtonV1>
            </View>
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

export default StepTwoScreen;
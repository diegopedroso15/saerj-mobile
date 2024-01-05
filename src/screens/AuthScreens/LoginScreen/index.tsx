import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ScreenAuthContainerV1 } from '../../../components/Organisms/ScreenAuthContainerV1';
import { ButtonV1, InputV1 } from '../../../components/Molecules';

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScreenAuthContainerV1 title="Entrar">
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputV1
            placeholder="E-mail"
            type="text"
            onTextChange={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors.email}
          />
        )}
        name="email"
        defaultValue=""
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputV1
            placeholder="Senha"
            type="text"
            isPassword
            onTextChange={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors.senha}
          />
        )}
        name="senha"
        defaultValue=""
      />
      <ButtonV1
        type="primary"
        width="full"
        onPress={handleSubmit(onSubmit)}
      >
        Entrar
      </ButtonV1>
      <ButtonV1 type="primary" width="full" outline onPress={() => navigation.navigate('Register')}>
        Não tenho conta
      </ButtonV1>
    </ScreenAuthContainerV1>
  );
};

export default LoginScreen;
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ScreenAuthContainerV1 } from '../../../components/Organisms/ScreenAuthContainerV1';
import { ButtonV1, InputV1, TextV1 } from '../../../components/Molecules';
// import StepIndicator from '../../../components/Molecules/StepIndicator';

const IntroAuthScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleNavigateLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <ScreenAuthContainerV1 title="" isIntroScreen>
      <ButtonV1
        type="primary"
        width="full"
        onPress={() => navigation.navigate('Login')}
      >
        Entrar
      </ButtonV1>
      <ButtonV1 type="primary" width="full" outline onPress={() => navigation.navigate('Register')}>
        Criar conta
      </ButtonV1>
      {/* <TextV1 type='text' align='center'>
        OU
      </TextV1>
      <ButtonV1 type="primary" width="full" outline onPress={() => navigation.navigate('Login')}>
        Entrar com Google
      </ButtonV1> */}
    </ScreenAuthContainerV1>
  );
};

export default IntroAuthScreen;
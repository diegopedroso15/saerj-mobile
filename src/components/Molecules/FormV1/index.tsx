import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./styles";
import { color } from "../../../themes/theme";
import { InputV1 } from "../InputV1";
import { ButtonV1 } from "../ButtonV1";

type inputType = "number" | "text";
type ButtonType = "primary" | "secondary" | "cancel";
type ButtonWidth = "full" | "half";

type fieldsType = Array<{
  label: string;
  type: inputType;
  icon?: React.ReactElement;
  disabled?: boolean;
  isPassword?: boolean;
}>;

type buttonsType = Array<{
  type: ButtonType;
  children: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  outline?: boolean;
  onPress?: () => void;
}>;

interface FormV1Props {
  fields: fieldsType;
  buttons: buttonsType;
  buttonsWidth: ButtonWidth;
}

interface ClientData {
  Nome: string;
  Pais: string;
  CEP: string;
  Numero: string;
  Complemento: string;
  Telefone: string;
  TelefoneResidencial: string;
  Email: string;
  Comprovante: string;
}

export const FormV1: React.FC<FormV1Props> = ({
  fields,
  buttons,
  buttonsWidth,
}) => {

  const [clientData, setClientData] = useState<ClientData>({
    Nome: "",
    Pais: "",
    CEP: "",
    Numero: "",
    Complemento: "",
    Telefone: "",
    TelefoneResidencial: "",
    Email: "",
    Comprovante: "",
  });

  const fakeClientData: ClientData  = {
    Nome: "João da Silva",
    Pais: "Brasil",
    CEP: "12345678",
    Numero: "123",
    Complemento: "Casa",
    Telefone: "",
    TelefoneResidencial: "",
    Email: "",
    Comprovante: "",
  };
  
  useEffect(() => {
    // Aqui você pode fazer uma chamada à API real
    // Por enquanto, estamos usando dados mocados
    setClientData(fakeClientData);
  }, []);

  return (
    <View style={styles.container}>
      {fields.map((field, index) => (
        <View key={index}>
          <InputV1
            placeholder={field.label}
            type={field.type}
            icon={field.icon}
            disabled={field.disabled}
            isPassword={field.isPassword}
            value={clientData[field.label] === "" ? undefined : clientData[field.label]}
          />
        </View>
      ))}

      <View style={buttonsWidth === "half" ? styles.buttonsRow : {}}>
        {buttons.map((button, index) => (
          <ButtonV1
            key={index}
            type={button.type}
            width={buttonsWidth}
            children={button.children}
            disabled={button.disabled}
            outline={button.outline}
            onPress={button.onPress}
          />
        ))}
      </View>
    </View>
  );
};

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const HeaderV1 = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20, borderBottomColor: "#000", borderBottomWidth: 2}}>
      <Image
        source={require("./logoexemplo.png")} // Substitua pelo caminho do seu logo
        style={{ width: 50, height: 50, marginTop: 30}}
      />
      <TouchableOpacity onPress={() => console.log("Menu Pressionado")}>
        <Text style={{paddingTop: 30}}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderV1;

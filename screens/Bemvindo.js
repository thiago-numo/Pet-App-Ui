import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Bemvindo = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                   

                    <Image
                        source={require("../assets/mulher1.png")}
                        style={{
                            width: 182.03,
                            height: 180,
                            borderRadius: 20,
                            position: "absolute",
                            top: 150,
                            left: 150
                        ,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                               
                            ]
                            
                        }}
                    />

                    <Image
                        source={require("../assets/homem1.png")}
                        style={{
                            height: 218.15,
                            width: 180,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: -20,
                            
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                               
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Pet Care </Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Seja bem-vindo!</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Seu app para cadastro de consultas e vacinas.</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>Agora na palma da sua mão.</Text>
                    </View>

                    <Button
                        title="Cadastre-se"
                        onPress={() => navigation.navigate("Cadastrese")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                            
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Já possui uma conta ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Entre</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Bemvindo
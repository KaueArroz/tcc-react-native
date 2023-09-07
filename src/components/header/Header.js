import { View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default function Header() {

    return(
        <View>
            {/* Logo */}
            <Image
                source={require('../../assets/LogoTccPng.png')}
                style={styles.logo}
            />
            {/* Menu */}
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Produtos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Como Comprar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Trocas e Devoluções</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Perguntas Frequentes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
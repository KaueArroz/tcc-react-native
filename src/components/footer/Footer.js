import { View, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from "../footer/styles";

export default function Footer() {

    return(
        <View style={styles.footerContainer}>

        <View style={styles.footerSection}>
          <Text style={styles.titleFooter}>Formas de pagamento</Text>
          <View>
            <Ionicons name="card" style={styles.icon}>
              <Text style={styles.textFooter}>Cartão</Text>
            </Ionicons>
            
            <Ionicons name="phone-portrait-outline" style={styles.icon}>
              <Text style={styles.textFooter}>PIX</Text>
            </Ionicons>

            <FontAwesome5 name="money-bill" style={styles.icon}>
              <Text style={styles.textFooter}>Dinheiro</Text>
            </FontAwesome5>
          </View>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.titleFooter}>Formas de envio</Text>
          <View>
            <FontAwesome5 name="box" style={styles.icon}>
              <Text style={styles.textFooter}>Correios</Text>
            </FontAwesome5>

            <FontAwesome5 name="shipping-fast" style={styles.icon}>
              <Text style={styles.textFooter}>Entrega Expressa</Text>
            </FontAwesome5> 

            <Ionicons name="ios-home-sharp" style={styles.icon}>
              <Text style={styles.textFooter}>Entregas Físicas</Text>
            </Ionicons>
          </View>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.titleFooter}>Contato</Text>
          <View>
            <FontAwesome5 name="phone-alt" style={styles.icon}>
              <Text style={styles.textFooter}>4002-8922</Text>
            </FontAwesome5>

            <FontAwesome5 name="phone-alt" style={styles.icon}>
              <Text style={styles.textFooter}>4002-8922</Text>
            </FontAwesome5>

            <FontAwesome5 name="envelope" style={styles.icon}>
              <Text style={styles.textFooter}>foreich@suporte.com</Text>
            </FontAwesome5>
          </View>
        </View>

        <Text style={styles.copy}>&copy; Todos os direitos reservados | Feito com ❤️ por ForEich LTDA</Text>
      </View>
    )
}
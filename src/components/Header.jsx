import { Text, View, StyleSheet, Image } from "react-native";
import jcjLogo from '../../assets/JC_Jenson_Logo.png';
import cartLogo from '../../assets/cart.png';
import { colors } from '../global/colors';
import Constants from 'expo-constants';

function Header ({title}) {
    return (
        <View style={styles.header}>
            <Text style = {{fontSize : 20}}>{title}</Text>
            <Image source={jcjLogo} /> 
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        gap: 8, 
        alignItems: 'center',
        backgroundColor: colors.header,
        paddingTop: Constants.statusBarHeight,
    },
});
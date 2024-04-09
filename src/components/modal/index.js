import { Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import * as Clipboard from 'expo-clipboard'
import useStorage from "../../hooks/useStorage"

export function ModalPassword({password, handleClose}){

    const {saveItem, } = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem('@pass', password)
        alert('Senha copiada!')
        handleClose();
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Teste Modal</Text>
                <Pressable style={styles.innerPassword} onPress={handleCopyPassword}>
                    <Text style={styles.passwordText}>{password}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={ handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    content:{
        backgroundColor:'#FFF',
        width: '85%',
        paddingTop: '3%',
        paddingBottom: '3%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 16,

    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '2%'
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: '90%',
        paddingTop: '2%',
        paddingBottom: '2%',
        borderRadius: 16,

    },
    passwordText:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        padding: '2%',
    },
    buttonArea:{
        flexDirection: 'row',
        width: '90%',
        marginTop: '2%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        flex:1,
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '2%',
        borderRadius: 16,
        padding: '3%',
    },
    buttonSave:{
        backgroundColor: '#394de9'

    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    buttonSaveText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
})
import {useState, useEffect} from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import {SafeAreaView} from 'react-native-safe-area-context'
import {useIsFocused} from '@react-navigation/native' 
import useStorage from '../../hooks/useStorage'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const {getItem} = useStorage();
    
    useEffect(()=>{
        async function loadPasswords(){
            const passwords = await getItem('@pass')
            console.log(passwords)
        }
        loadPasswords();
    },[focused])
    return (
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{flex:1,paddingTop:'2%'}}
                    data={listPasswords}
                    keyExtractor={(item)=> String(item)}
                    renderItem={({item})=><Text>{item}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor: '#392de9',
        padding: '5%',
    },
    title:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
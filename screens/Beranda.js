import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,} from 'react-native';
import FormCari from '../components/FormCari';

const Beranda = (props) => {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.sectionTitle}>Kapalzy</Text>
        <FormCari/>
        </View>
        
        );
}

export default Beranda;


const styles = StyleSheet.create({
    sectionTitle: {
        color: '#00579C',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
      },
  });
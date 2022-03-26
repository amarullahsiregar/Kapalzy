import React from 'react';
import { SafeAreaView, Text, View, StatusBar, useColorScheme } from 'react-native';
import Tiket from '../components/tiketCard';

const Pesanan = ({navigation}) => {
    
    const isDarkMode = useColorScheme() === 'dark';
    const container = {
        backgroundColor: isDarkMode ? '#1e1e1e' : '#f2f2f2',
        marginTop: StatusBar.currentHeight,
        alignItems: 'center',
    }
    return (
        <SafeAreaView style={container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Tiket
            asal='Bakauheni'
            tujuan='Merak'
            hari='Kamis'
            tanggal='20/05/2020'
            pukul='08.00'
            layanan='Eksekutif'
            usia='Dewasa'
            jumlah='1'
            harga='65.000'
            />
        </SafeAreaView>);
};

export default Pesanan;
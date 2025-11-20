import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoiamF5ZGV2MTIzNzgiLCJhIjoiY21pNzZuMjU1MDZsMzJqczdiNjlndmNyZyJ9.BPmuHGrDkIlH8h4MaPXc-g');

const MapboxHome = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
            </View>
        </View>
    );
}

export default MapboxHome;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: '100%',
        width: '100%',
    },
    map: {
        flex: 1
    }
});
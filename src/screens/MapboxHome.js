import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';


const MapboxHome = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    style={styles.map}
                    styleURL={Mapbox.StyleURL.SatelliteStreet}
                />
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
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView, Camera, MarkerView } from '@maplibre/maplibre-react-native';

const BANGALORE = [77.5946, 12.9716];

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                <Camera
                    zoomLevel={14}
                    centerCoordinate={BANGALORE}
                />

                <MarkerView coordinate={BANGALORE}>
                    <View style={styles.marker}>
                        <Text style={styles.markerText}>You</Text>
                    </View>
                </MarkerView>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
    marker: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        backgroundColor: 'red',
    },
    markerText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

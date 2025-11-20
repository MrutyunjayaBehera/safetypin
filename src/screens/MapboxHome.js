import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import useMapboxHome from '../hooks/useMapboxHome';
import usePermissions from '../hooks/usePermissions';


Mapbox.setAccessToken('pk.eyJ1IjoiamF5ZGV2MTIzNzgiLCJhIjoiY21pNzh6bzdvMDdoYTJtc2hmZTl5a3RvYyJ9.woplZcxHhV5nzCtl0nHi5g');

const MapboxHome = () => {

    usePermissions();

    const {
        markedCoord = [],
        handleMapTap = () => { }
    } = useMapboxHome();

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    style={styles.map}
                    styleURL={Mapbox.StyleURL.Street}
                    // controls 
                    rotateEnabled={false}
                    compassEnabled={true}
                    compassViewPosition={3}
                    logoEnabled={false}
                    attributionEnabled={false}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    pitchEnabled={false}
                    // events
                    onPress={handleMapTap}
                    onLongPress={(e) => console.log("Long tap:", e.geometry)}
                    onCameraChanged={(e) => console.log("Camera:", e.properties)}
                >
                    <Mapbox.Camera
                        zoomLevel={8}
                        centerCoordinate={[85.384933, 20.819277]} // [longitude, latitude]
                        // for user's own location
                        followUserLocation={false}
                    // followUserMode='normal'
                    />
                    <Mapbox.UserLocation
                        visible={true}
                        showsUserHeadingIndicator={true}
                        androidRenderMode="gps"
                    />
                    {markedCoord.length ? (
                        <Mapbox.PointAnnotation
                            id="dropped-marker"
                            coordinate={markedCoord}
                        />
                    ) : null}
                </Mapbox.MapView>
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
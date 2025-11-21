import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import useMapboxHome from '../hooks/useMapboxHome';
import usePermissions from '../hooks/usePermissions';
import Modal from '../components/Modal';
import AddIssueForm from '../components/Form';
import FilterBar from '../components/FilterBar';
import { DUMMY_REPORTS } from '../constants/DUMMY_REPORT';
import { INCIDENT_TYPES_CONFIG } from '../constants/INCIDENT_TYPES';


Mapbox.setAccessToken('pk.eyJ1IjoiamF5ZGV2MTIzNzgiLCJhIjoiY21pNzh6bzdvMDdoYTJtc2hmZTl5a3RvYyJ9.woplZcxHhV5nzCtl0nHi5g');

const MapboxHome = () => {

    const { requestLocationPermission = () => { } } = usePermissions();

    const {
        markedCoord = [],
        handleMapTap = () => { },
        handleLongPress = () => { },
        showPopup = false,
        selectedLocation = {},
        handleCloseIssueModal = () => { },
        selectedFilter = '',
        setSelectedFilter = () => { },
        showFilterDropdown = false,
        setShowFilterDropdown = () => { },
        globalIncidentData = [],
        updateGlobalIncidentData = () => { }
    } = useMapboxHome();

    useEffect(() => {
        requestLocationPermission();
    }, []);

    const filteredReports =
        selectedFilter === "All" || !selectedFilter
            ? globalIncidentData
            : globalIncidentData.filter(item => item.incidentType === selectedFilter);

    console.log('filteredReports:: ', filteredReports);

    // helper: find icon by matching config.label or config.value (tries normalization)
    const getIconForIncident = (incidentType) => {
        if (!incidentType) return null;
        const normalized = String(incidentType).toLowerCase().replace(/\s+/g, '_');
        const configs = Object.values(INCIDENT_TYPES_CONFIG);
        const found = configs.find(c => c.label === incidentType || c.value === incidentType || c.value === normalized);
        return found ? found.icon : null;
    };

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <FilterBar
                    showDropdown={showFilterDropdown}
                    setShowDropdown={setShowFilterDropdown}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />
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
                    onLongPress={handleLongPress}
                // onCameraChanged={(e) => console.log("Camera:", e.properties)}
                >
                    <Mapbox.Camera
                        zoomLevel={8}
                        centerCoordinate={[85.384933, 20.819277]} // [longitude, latitude]
                        // for user's own location
                        followUserLocation={false}
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
                    {(filteredReports || []).map((rep) => {
                        const icon = getIconForIncident(rep.incidentType);
                        return (
                            <Mapbox.PointAnnotation
                                coordinate={[rep.longitude, rep.latitude]}
                                key={rep.id.toString()}
                                id={`marker-${rep.id}`}
                                anchor={{ x: 0.5, y: 1 }} // keep icon bottom at coordinate
                            >
                                {icon ? (
                                    <Image
                                        source={icon}
                                        style={styles.markerImage}
                                        resizeMode="center"
                                    />
                                ) : (
                                    <View style={styles.defaultMarker} />
                                )}
                            </Mapbox.PointAnnotation>
                        )
                    })}

                </Mapbox.MapView>
                {showPopup && (
                    <Modal visible={showPopup} onDismiss={handleCloseIssueModal}>
                        <AddIssueForm
                            selectedLocation={selectedLocation}
                            handleCloseIssueModal={handleCloseIssueModal}
                            updateGlobalIncidentData={updateGlobalIncidentData}
                        />
                    </Modal>
                )}
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
    },
    markerImage: {
        width: 36,
        height: 36,
        // optional: add border / background for visibility
    },
    defaultMarker: {
        width: 16,
        height: 16,
        backgroundColor: '#2E4CFF',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
    },
});
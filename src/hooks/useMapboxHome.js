import { useState } from "react";
import { CTA } from "../constants/CTA";
import { Alert } from "react-native";
import { DUMMY_REPORTS } from "../constants/DUMMY_REPORT";

const useMapboxHome = () => {
    const [globalIncidentData, setGlobalIncidentData] = useState(DUMMY_REPORTS);
    const [markedCoord, setMarkedCoord] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);


    const handleMapTap = (e) => {
        const { coordinates } = e.geometry;
        setMarkedCoord(coordinates);
        console.log("Marker dropped at:", coordinates);
    }

    const handleLongPress = (e) => {
        const coords = e.geometry.coordinates; // [longitude, latitude]
        console.log('coored', coords)
        setSelectedLocation({
            latitude: coords[1],
            longitude: coords[0]
        });
        setShowPopup(true);
    };

    const handleCloseIssueModal = () => {
        setShowPopup(false);
    };

    const updateGlobalIncidentData = (actionType, data) => {
        if (actionType === CTA.UPDATE) {
            setGlobalIncidentData((pv) => {
                return [
                    ...pv,
                    data
                ]
            })
        } else {
            Alert.alert('Alert', 'Action not registered');
        }
    }


    return {
        markedCoord,
        setMarkedCoord,
        handleMapTap,
        selectedLocation,
        handleLongPress,
        showPopup,
        handleCloseIssueModal,
        selectedFilter,
        setSelectedFilter,
        showFilterDropdown,
        setShowFilterDropdown,
        globalIncidentData,
        updateGlobalIncidentData
    }
}

export default useMapboxHome;
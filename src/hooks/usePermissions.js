import { PermissionsAndroid, Platform } from "react-native";

const usePermissions = () => {

    const requestLocationPermission = async () => {
        try {
            if (Platform.OS === 'android') {

                // Android 12+ needs both permissions
                const permissions = [
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                ];

                const granted = await PermissionsAndroid.requestMultiple(permissions);

                const fineGranted =
                    granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] ===
                    PermissionsAndroid.RESULTS.GRANTED;

                const coarseGranted =
                    granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] ===
                    PermissionsAndroid.RESULTS.GRANTED;

                return fineGranted || coarseGranted; // either one is enough for map
            }

            // iOS automatically handles this via Info.plist
            return true;

        } catch (error) {
            console.log("Location permission error:", error);
            return false;
        }
    };

    return {
        requestLocationPermission
    };
};


export default usePermissions;
import { useState } from "react";

const useMapboxHome = () => {
    const [markedCoord, setMarkedCoord] = useState([]);

    const handleMapTap = (e) => {
        const { coordinates } = e.geometry;
        setMarkedCoord(coordinates);
        console.log("Marker dropped at:", coordinates);
    }

    return {
        markedCoord,
        setMarkedCoord,
        handleMapTap
    }
}

export default useMapboxHome;
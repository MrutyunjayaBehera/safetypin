import { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { INCIDENT_TYPES, INCIDENT_TYPES_CONFIG } from "../constants/INCIDENT_TYPES";
import { CTA } from "../constants/CTA";

const FilterBar = ({
    showDropdown = false,
    setShowDropdown = () => { },
    selectedFilter = '',
    setSelectedFilter = () => { }
}) => {

    return (
        <View
            style={{
                position: "absolute",
                top: 40,
                right: 10,
                zIndex: 999,
            }}
        >
            {/* == MAIN SINGLE PILL == */}
            <TouchableOpacity
                onPress={() => setShowDropdown(!showDropdown)}
                style={{
                    backgroundColor: selectedFilter ? "#1C2E68" : "#2E4CFF",
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: selectedFilter ? "#4F7CFF" : "#0026E6",
                }}
            >
                <Text style={{ color: "white", fontSize: 14 }}>
                    {INCIDENT_TYPES_CONFIG[selectedFilter]?.label || "Filter"}
                </Text>
            </TouchableOpacity>

            {/* == DROPDOWN == */}
            {showDropdown && (
                <View
                    style={{
                        marginTop: 10,
                        // backgroundColor: "#0b1532",
                        // borderRadius: 14,
                        // padding: 12,
                        // width: 230,
                        // borderWidth: 1,
                        // borderColor: "#2e80ff33",
                    }}
                >
                    <ScrollView style={{ maxHeight: 380 }}>
                        {([...Object.keys(INCIDENT_TYPES_CONFIG), CTA.CLEAR]).map((item) => (
                            <TouchableOpacity
                                key={item}
                                onPress={() => {
                                    if (item && item === CTA.CLEAR) {
                                        setSelectedFilter('');
                                    } else {
                                        setSelectedFilter(item);
                                    }
                                    setShowDropdown(false);
                                }}
                                style={{
                                    paddingVertical: 8,
                                    paddingHorizontal: 14,
                                    marginBottom: 10,
                                    backgroundColor:
                                        selectedFilter === item ? "#C9D6FF" : "#DCE5FF",
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    borderColor: selectedFilter === item ? "#9FB6FF" : "#AFC2FF",
                                    alignSelf: "flex-end",
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#1B2B4A",
                                        fontSize: 14,
                                        fontWeight: selectedFilter === item ? "600" : "500",
                                    }}
                                >
                                    {INCIDENT_TYPES_CONFIG[item]?.label || item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )
            }
        </View >
    );
};

export default FilterBar;

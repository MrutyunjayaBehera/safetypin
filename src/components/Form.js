import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { INCIDENT_TYPES } from "../constants/INCIDENT_TYPES";
import { CTA } from "../constants/CTA";

const AddIssueForm = ({
    selectedLocation = {},
    handleCloseIssueModal = () => { },
    updateGlobalIncidentData = () => { }
}) => {
    const [form, setForm] = useState({
        incidentType: '',
        description: '',

    });
    const [showDropdown, setShowDropdown] = useState(false);

    const updateForm = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmitReport = () => {
        const newIncidentData = {
            ...form,
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
            id: Date.now()
        }
        updateGlobalIncidentData(CTA.UPDATE, newIncidentData);
        // send to backend later
        // await supabase.from("reports").insert({ ... })
        setForm({ issueType: '', incidentType: '', description: '' });
        handleCloseIssueModal();
    }


    return (
        <View>
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>
                Add Report
            </Text>

            {/* Issue Type */}
            {/* <Text style={{ color: "white" }}>Issue Type</Text>
                    <TextInput
                        placeholder="Unsafe area, dog menace..."
                        placeholderTextColor="#aaa"
                        style={styles.input}
                        onChangeText={(v) => updateForm("issueType", v)}
                    /> */}

            {/* Incident Type */}
            {/* <Text style={{ color: "white" }}>Incident Type</Text>
            <TextInput
                placeholder="Dog attack, harassment..."
                placeholderTextColor="#aaa"
                style={styles.input}
                onChangeText={(v) => updateForm("incidentType", v)}
            /> */}

            {/* Incident Type Select Field */}
            <Text style={{ color: "white", marginTop: 10 }}>Incident Type</Text>
            <TouchableOpacity
                onPress={() => setShowDropdown(!showDropdown)}
                style={[styles.input, { flexDirection: "row", justifyContent: "space-between" }]}
            >
                <Text style={{ color: form.incidentType ? "white" : "#aaa" }}>
                    {form.incidentType || "Select incident type"}
                </Text>
                <Text style={{ color: "white" }}>▼</Text>
            </TouchableOpacity>

            {/* Dropdown List */}
            {showDropdown && (
                <View style={{
                    backgroundColor: '#1a2340',
                    borderRadius: 10,
                    marginTop: 5
                }}>
                    {INCIDENT_TYPES.map((item) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => {
                                updateForm("incidentType", item);
                                setShowDropdown(false);
                            }}
                        >
                            <Text style={{ color: "white", padding: 12 }}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            {/* Description */}
            <Text style={{ color: "white" }}>Description</Text>
            <TextInput
                placeholder="Details about the report"
                placeholderTextColor="#aaa"
                multiline
                style={[styles.input, { height: 80 }]}
                onChangeText={(v) => updateForm("description", v)}
            />

            {/* Coordinates */}
            <Text style={{ color: "white", marginTop: 10 }}>
                Coordinates:
            </Text>
            <Text style={{ color: "#4cc9f0" }}>
                {selectedLocation?.latitude}, {selectedLocation?.longitude}
            </Text>

            {/* Buttons */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>

                {/* Cancel Button */}
                <TouchableOpacity
                    onPress={() => {
                        handleCloseIssueModal();
                        setShowDropdown(false);
                    }}
                    style={[styles.button, { backgroundColor: "#ff4d4d", width: "48%" }]}
                >
                    <Text style={{ color: "white", fontSize: 16 }}>Cancel</Text>
                </TouchableOpacity>

                {/* Submit Button */}
                <TouchableOpacity
                    onPress={handleSubmitReport}
                    style={[styles.button, { width: "48%" }]}
                >
                    <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};

export default AddIssueForm;


const styles = {
    input: {
        backgroundColor: '#1a2340',
        color: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginTop: 5,
    },
    button: {
        backgroundColor: "#2e80ff",
        padding: 12,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 15,
    }
};
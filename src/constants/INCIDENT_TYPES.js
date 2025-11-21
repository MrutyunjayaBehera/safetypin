import DogMenace from '../../assets/incident_icons/DogMenaceComp.jpeg'
import HarassmentIcon from '../../assets/incident_icons/HarassmentComp.jpeg'
import UnsafeAreaIcon from '../../assets/incident_icons/UnsafeAreaComp.jpeg'
import DarkStreetIcon from '../../assets/incident_icons/DarkStreetComp.jpeg'
import SuspiciousIcon from '../../assets/incident_icons/SuspiciousActivityComp.jpeg'
import BadLandlordIcon from '../../assets/incident_icons/BadLandlordComp.jpeg'
import StreetlightIcon from '../../assets/incident_icons/StreetlightIssueComp.jpeg'

export const INCIDENT_TYPES = [
    "Dog Menace",
    "Harassment",
    "Unsafe Area",
    "Dark Street",
    "Suspicious Activity",
    "Bad Landlord",
    "Streetlight Issue",
];

export const INCIDENT_TYPES_CONFIG = {
    dog_menace: {
        label: "Dog Menace",
        value: "dog_menace",
        icon: DogMenace,
        description: "Aggressive stray dogs or biting incidents."
    },

    harassment: {
        label: "Harassment",
        value: "harassment",
        icon: HarassmentIcon,
        description: "Eve teasing or harassment in the area."
    },

    unsafe_area: {
        label: "Unsafe Area",
        value: "unsafe_area",
        icon: UnsafeAreaIcon,
        description: "Areas known to be unsafe or suspicious."
    },

    dark_street: {
        label: "Dark Street",
        value: "dark_street",
        icon: DarkStreetIcon,
        description: "Streetlights missing or very low visibility."
    },

    suspicious_activity: {
        label: "Suspicious Activity",
        value: "suspicious_activity",
        icon: SuspiciousIcon,
        description: "Unknown or strange behavior reported."
    },

    bad_landlord: {
        label: "Bad Landlord",
        value: "bad_landlord",
        icon: BadLandlordIcon,
        description: "Landlord doing illegal or unfair practices."
    },

    streetlight_issue: {
        label: "Streetlight Issue",
        value: "streetlight_issue",
        icon: StreetlightIcon,
        description: "Broken or non-functional streetlights."
    }
};

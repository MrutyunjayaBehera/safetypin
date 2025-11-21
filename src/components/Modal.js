import { Modal as RNModal, View, Text, TextInput, TouchableOpacity } from 'react-native';


const Modal = ({
    visible = false,
    onDismiss = () => { },
    children = null
}) => {
    return (
        <RNModal visible={visible} onDismiss={onDismiss} transparent animationType="slide">
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.4)'
            }}>
                <View style={{
                    backgroundColor: '#0b1532',
                    padding: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    {children}
                </View>
            </View>
        </RNModal>
    )
};

export default Modal;






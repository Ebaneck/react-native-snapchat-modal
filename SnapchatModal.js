import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


const SnapchatModal = ({ 
  ...props
 }) => {

    return (
      <TouchableOpacity
        {...props}
        style={{ paddingVertical: 10, }}
        >

      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button_item: {
        padding: 8,
        marginVertical: 5,
        borderRadius: 5,
        textAlign: 'center'
    },

})

export default SnapchatModal;

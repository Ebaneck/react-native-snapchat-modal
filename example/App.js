import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");


class App extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTextTitle}>Unsubscribe From Grandmas House?</Text>

              <Text style={styles.modalTextDesc}>Tapping below will remove Grandmas House from your subscription list.</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => console.log("Yes button clicked")}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={{}}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={[styles.textStyle, {color: "black", marginTop: 10, }]}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 35,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  button: {
    borderRadius: 20,
    padding: 15,
    margin: 5,
    elevation: 2,
    width: 230,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "gray",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  modalTextTitle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center"
  },
  modalTextDesc: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  }
});

export default App;
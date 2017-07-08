import React, { PropTypes, Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "native-base";

export default class SearchButton extends Component {
  render() {
    let customStyle = this.props.disabled
      ? styles.disabledButton
      : styles.button;

    return (
      <Button block {...this.props} style={StyleSheet.flatten(customStyle)}>
        <Icon name="search" />
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: "#D78800"
  },

  disabledButton: {
    margin: 10,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: "#807053"
  }
});

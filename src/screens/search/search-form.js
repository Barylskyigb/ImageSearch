import React, { PropTypes, Component } from "react";
import { Text, Slider, StyleSheet, View, Dimensions } from "react-native";
import {
  Container,
  Content,
  Spinner,
  Form,
  Item,
  Label,
  Input,
  Icon,
  Button
} from "native-base";
import SearchButton from "./search-button.js";
import { connect } from "react-redux";
import { loadImages } from "../../actions.js";

class SearchForm extends Component {
  columnsMin = 1;
  columnsMax = 5;

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      columns: 1
    };
  }

  search() {
    this.props.loadImages(this.state.text).then(() => {
      this.props.navigation.navigate("Images", { columns: this.state.columns });
      this.setState({ loading: false });
    });

    this.setState({ loading: true });
  }

  _renderSpinner() {
    if (this.state.loading) {
      return (
        <View style={styles.overlay}>
          <Spinner color="#D78800" />
        </View>
      );
    }
  }

  render() {
    let columns = this.state.columns;

    return (
      <View style={styles.formContainer}>
        <Form>
          <Item floatingLabel style={StyleSheet.flatten(styles.item)}>
            <Label style={StyleSheet.flatten(styles.label)}>
              Search phrase
            </Label>
            <Input
              onChangeText={text => this.setState({ text })}
              style={StyleSheet.flatten(styles.input)}
            />
          </Item>

          <Item style={StyleSheet.flatten([styles.noBorder, styles.item])}>
            <Label style={StyleSheet.flatten(styles.label)}>
              Columns: {columns}
            </Label>
          </Item>

          <Slider
            minimumValue={this.columnsMin}
            maximumValue={this.columnsMax}
            onValueChange={columns =>
              this.setState({ columns: Math.round(columns) })}
          />

          <SearchButton
            disabled={!this.state.text}
            onPress={() => this.search()}
          />
        </Form>

        {this._renderSpinner()}
      </View>
    );
  }
}

const mapStateToProps = state => state => {
  return {};
};

export default connect(mapStateToProps, {
  loadImages
})(SearchForm);

let dimensions = Dimensions.get("window");
const { width } = dimensions;
const height = dimensions.height - 80;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.5,
    width: width,
    height: height,
    elevation: 2
  },

  formContainer: {
    flex: 1,
    justifyContent: "center",

    height: height,
    padding: 20,
    paddingBottom: 300
  },

  label: { color: "white" },

  input: { color: "white" },

  slider: {
    margin: 5
  },

  item: {
    margin: 10
  },

  noBorder: {
    borderBottomWidth: 0
  },

  button: {
    margin: 10,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: "#D78800"
  },

  inline: {
    flexDirection: "row"
  }
});

import React, { PropTypes } from "react";
import CachedImage from "react-native-cached-image";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Spinner } from "native-base";

class ImagesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: props.navigation.state.params.columns,
      images: props.images
    };
  }

  static navigationOptions = {
    title: "Images",
    headerStyle: {
      backgroundColor: "#D78800"
    },
    headerTitleStyle: {
      color: "white"
    },
    headerTintColor: "white"
  };

  _renderRow(row) {
    return (
      <View style={styles.imagesRow}>
        {row.map(image => this._renderImage(image))}
      </View>
    );
  }

  _removeBrokenImage(brokenImageUrl) {
    let newImages = this.state.images.filter(imageUrl => {
      return imageUrl !== brokenImageUrl;
    });

    this.setState({
      images: newImages
    });
  }

  _renderImage(imageUrl) {
    let { width } = Dimensions.get("window");
    let elemWidth = width / this.state.columns;

    return (
      <CachedImage
        source={{ uri: imageUrl }}
        resizeMode={"cover"}
        key={imageUrl}
        onError={() => this._removeBrokenImage(arguments[0])}
        style={[styles.image, { maxWidth: elemWidth, height: elemWidth }]}
        activityIndicatorProps={{ color: "#D78800" }}
      />
    );
  }

  render() {
    let { columns, images } = this.state;

    let rows = [];
    images.reduce((accumulator, currVal, index) => {
      if (index % columns === 0) {
        accumulator = [];
        rows.push(accumulator);
      }

      accumulator.push(currVal);

      return accumulator;
    }, []);

    let _keyExtractor = item => item.toString();

    return (
      <FlatList
        style={styles.container}
        data={rows}
        keyExtractor={_keyExtractor}
        renderItem={row => this._renderRow(row.item)}
      />
    );
  }
}

const mapStateToProps = state => state => {
  return { images: state.search.images };
};

export default connect(mapStateToProps)(ImagesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#484848"
  },
  image: {
    flex: 1,
    margin: 1
  },
  imagesRow: {
    flexDirection: "row",
    flexGrow: 1
  }
});

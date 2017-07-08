import React, { PropTypes } from "react";
import { Text, Slider } from "react-native";
import {
  Container,
  Content,
  Spinner,
  Button,
  Form,
  Item,
  Label,
  Input,
  Icon
} from "native-base";

import SearchForm from "./search-form.js";

const SearchScreen = ({ navigation }) => (
  <Container style={{ backgroundColor: "#484848" }}>
    <Content>
      <SearchForm navigation={navigation} />
    </Content>
  </Container>
);

SearchScreen.navigationOptions = {
  title: "Search",
  headerStyle: {
    backgroundColor: "#D78800"
  },
  headerTitleStyle: {
    color: "white"
  }
};

export default SearchScreen;

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from "native-base";
import { StyleProvider } from "native-base";
import React from "react";
import { Platform, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { getAppTheme } from "../../configs/themes";
import { strings } from "../../locales/i18n";
import { fetchMovieAsync } from "../../store/actions/movieActions";
import DetailScreen from "../detail/DetailScreen";
import { StyleSheet } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => {
      const leftMenuNull = <View/>
      const leftMenuHamburger = (
        <Button transparent onPress={() => navigation.openDrawer()}>
                  <Icon name="menu" />
                </Button>
      )
      const leftMenuPlatform = Platform.select({
        ios: leftMenuNull,
        android: leftMenuHamburger
      })

     return (
        <StyleProvider style={getAppTheme()}>
          <Header>
            <Left>
              {LEFT_MENU}
            </Left>
            <Body>
              <Title>{strings("home.title")}</Title>
            </Body>
            <Right />
          </Header>
        </StyleProvider>
      )
    }
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyleProvider style={getAppTheme()}>
        <Container>
          <Content padder contentContainerStyle={styles.contentContainer}>
          <Button
              primary
              style={{ alignSelf:'center' }}
              onPress={()=> this.props.navigation.navigate("details")}
            >
              <Text>{strings("home.button_title")}</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movie.movies,
    moviesFetched: state.movie.moviesFetched,
    isFetching: state.movie.isFetching,
    error: state.movie.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchMovieAsync())
  };
}

const home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

export const HomeStack = createStackNavigator({
  home,
  details: DetailScreen
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color : "#999"
  }
});

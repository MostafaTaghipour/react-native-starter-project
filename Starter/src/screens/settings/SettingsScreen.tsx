import {
  Body,
  Button,
  Container,
  Content,
  H2,
  Header,
  Icon,
  Left,
  Right,
  Title
} from "native-base";
import { StyleProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { View } from "react-native";
import { getAppTheme } from "../../configs/themes";
import { strings } from "../../locales/i18n";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

        const leftMenuNull = <View/>
        const leftMenuHamburger = (
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name="menu" />
                  </Button>
        )
        const leftMenuPlatform = Platform.select({
          ios: leftMenuNull,
          android: leftMenuHamburger
        })


    return (
      <StyleProvider style={getAppTheme()}>
        <Container>
        <Header>
          <Left>
            {LEFT_MENU}
          </Left>
          <Body>
            <Title>{strings("settings.title")}</Title>
          </Body>
          <Right />
        </Header>
          <Content padder contentContainerStyle={styles.contentContainer}>
            <H2 style={styles.text}>{strings("settings.title")}</H2>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

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

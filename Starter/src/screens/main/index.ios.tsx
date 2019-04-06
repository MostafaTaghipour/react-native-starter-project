import {
  Button,
  Footer,
  FooterTab,
  Icon,
  Root,
  StyleProvider,
  Text
} from "native-base";
import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { getAppTheme } from "../../configs/themes";
import { strings } from "../../locales/i18n";
import { HomeStack } from "../home/HomeScreen";
import SettingsScreen from "../settings/SettingsScreen";

const MainScreenNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      home: { screen: HomeStack },
      settings: { screen: SettingsScreen }
    },
    {
      tabBarPosition: "bottom",
      tabBarComponent: props => {
        return (
          <StyleProvider style={getAppTheme()}>
            <Footer>
              <FooterTab>
                <Button
                  vertical
                  active={props.navigation.state.index === 0}
                  onPress={() => props.navigation.navigate("home")}
                >
                  <Icon name="home" />
                  <Text>{strings("home.title")}</Text>
                </Button>
                <Button
                  vertical
                  active={props.navigation.state.index === 1}
                  onPress={() => props.navigation.navigate("settings")}
                >
                  <Icon name="settings" />
                  <Text>{strings("settings.title")}</Text>
                </Button>
              </FooterTab>
            </Footer>
          </StyleProvider>
        );
      }
    }
  )
);

export const MainScreen = () => (
  <Root>
    <MainScreenNavigator />
  </Root>
);

import { Icon, Root, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import FONT from "../../configs/fonts";
import { isRTL, strings } from "../../locales/i18n";
import { HomeStack } from "../home/HomeScreen";
import SettingsScreen from "../settings/SettingsScreen";

const MainScreenNavigator = createAppContainer(
  createDrawerNavigator(
    {
      home: {
        screen: HomeStack,
        navigationOptions: {
          drawerLabel: () => (
            <Text style={styles.items}>{strings("home.title")}</Text>
          ),
          drawerIcon: () => <Icon active name="home" />
        }
      },
      settings: {
        screen: SettingsScreen,
        navigationOptions: {
          drawerLabel: () => (
            <Text style={styles.items}>{strings("settings.title")}</Text>
          ),
          drawerIcon: () => <Icon active name="settings" />
        }
      }
    },
    {
      drawerPosition: isRTL ? "right" : "left",
    }
  )
);

export const MainScreen = () => (
  <Root>
    <MainScreenNavigator />
  </Root>
)

const styles = StyleSheet.create({
  items: {
    fontFamily: FONT.DEFAULT_FONT,
    padding: 16,
  }
})

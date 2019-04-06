import {
  Button,
  Container,
  Content,
  Input,
  Item,
  Label,
  Text} from "native-base";
import { StyleProvider } from "native-base";
import React from "react";
import { strings } from "../../locales/i18n";
import { getAppTheme } from "../../configs/themes";
import COLOR from "../../configs/colors";
import { StatusBar } from "react-native";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyleProvider style={getAppTheme()}>
        <Container>
          <Content padder>
            <Item style={{ marginTop: 40 }}>
              <Label style={{ alignSelf: "flex-start", marginTop: 10 }}>
                {strings("login.email")}
              </Label>
              <Input keyboardType="email-address" />
            </Item>
            <Item last style={{ marginTop: 20 }}>
              <Label style={{ alignSelf: "flex-start", marginTop: 10 }}>
                {strings("login.password")}
              </Label>
              <Input secureTextEntry={true} />
            </Item>
            <Button
             primary
              style={{ marginTop: 20 , alignSelf:'center' }}
              onPress={this.props.onLogin}
            >
              <Text>{strings("login.login")}</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

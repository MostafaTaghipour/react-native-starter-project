import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
  H2
} from 'native-base'
import { StyleProvider } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { getAppTheme } from '../../configs/themes'
import { isRTL, strings } from '../../locales/i18n'

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => ({
    header: (
      <StyleProvider style={getAppTheme()}>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon
                style={{ transform: [{ scaleX: isRTL ? -1 : 1 }] }}
                name='arrow-back'
              />
            </Button>
          </Left>
          <Body>
            <Title>{strings("details.title")}</Title>
          </Body>
          <Right />
        </Header>
      </StyleProvider>
    ),
  })
  render() {
    return (
      <StyleProvider style={getAppTheme()}>
        <Container>
        <Content padder contentContainerStyle={styles.contentContainer}>
            <H2 style={styles.text}>{strings("details.title")}</H2>
          </Content>
        </Container>
      </StyleProvider>
    )
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

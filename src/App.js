import React from 'react';
import {
        Container,
        Header,
        Title,
        Content,
        Footer,
        FooterTab,
        Button,
        Left,
        Text,
        Right,
        Body,
        Icon
      } from 'native-base';


const App = () => (
  <Container>
    <Header>
      <Left>
          <Button transparent>
              <Icon name='menu' />
          </Button>
      </Left>
      <Body>
          <Title>Header</Title>
      </Body>
      <Right />
    </Header>
    <Content>
        <Text>sd</Text>
    </Content>
    <Footer>
      <FooterTab>
        <Button>
            <Icon name="apps" />
        </Button>
        <Button>
            <Icon ios='ios-run' android="md-menu"/>
        </Button>
        <Button active>
            <Icon name="camera" />
        </Button>
        <Button>
            <Icon ios='ios-megaphone-outline' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

export default App;

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, Title, StoryContainer } from '@catho/quantum-storybook-ui';
import { Alert, Row, Col } from '../../components';

const description = `Alerts are used for items that need to be labeled,
categorized, or organized using keywords that describe them.`;

storiesOf('ThemeSwitcher', module).add('ThemeSwitcher', () => (
  <>
    <Heading title="Theme">
      All Quantum components are initialized with the default Quantum theme.
      <br />
      Here we will describe which properties are available on it.
    </Heading>

    <StoryContainer>
      <Title as="h2">templable components</Title>
      <Row>
        <Col style={{ marginTop: '20px' }}>
          <Alert onClose={() => {}} icon="info">
            {description}
          </Alert>
        </Col>
      </Row>
    </StoryContainer>
  </>
));

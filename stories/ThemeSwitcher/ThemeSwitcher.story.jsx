import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, Title, StoryContainer } from '@catho/quantum-storybook-ui';
import {
  Alert,
  TabbedView,
  Tab,
  Pagination,
  Button,
  Checkbox,
  Dropdown,
  Input,
  RadioGroup,
  Toggle,
  Slider,
  Tooltip,
  TextArea,
  Popover,
  Badge,
  Tag,
  Row,
  Col,
} from '../../components';

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
      <Row>
        <Col xsmall={6} style={{ marginTop: '20px' }}>
          <TabbedView skin="blue" activeTab="tab2">
            <TabbedView.Tab title="tab1">Tab1 content</TabbedView.Tab>
            <TabbedView.Tab title="tab2">Tab2 content</TabbedView.Tab>
            <Tab title="tab3">Tab3 content</Tab>
          </TabbedView>
        </Col>
        <Col xsmall={6} style={{ marginTop: '20px' }}>
          <Pagination
            totalPages={6}
            activePage={5}
            infoFormatter={(activePage, totalPages) => (
              <>
                <strong>{activePage}</strong> de <strong>{totalPages}</strong>
              </>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col medium={3}>
          <Button>Button</Button>
        </Col>
        <Col medium={3}>
          <Checkbox checked name="required-name" />
        </Col>
        <Col medium={3}>
          <Dropdown
            items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
          />
        </Col>
        <Col medium={3}>
          <RadioGroup name="groceries">
            <RadioGroup.Radio value="Tomato sauce">
              Tomato sauce
            </RadioGroup.Radio>
            <RadioGroup.Radio value="Mustard">Mustard</RadioGroup.Radio>
            <RadioGroup.Radio value="Barbecue sauce">
              Barbecue sauce
            </RadioGroup.Radio>
          </RadioGroup>
        </Col>
      </Row>
      <Row>
        <Col medium={3}>
          <Input value="this is a input" />
        </Col>
        <Col medium={3}>
          <Toggle checked id="left" onChange={() => {}} />
        </Col>
        <Col medium={3}>
          <Slider value={20} />
        </Col>
        <Col medium={3} style={{ textAlign: 'center' }}>
          <Tooltip visible text="this is a tooltip">
            Hover me
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col medium={3}>
          <TextArea value="this is a textArea" />
        </Col>
        <Col medium={3} style={{ textAlign: 'center' }}>
          <Popover trigger="Popover" visible>
            Popover text
          </Popover>
        </Col>
        <Col medium={3}>
          <Badge number={10} />
        </Col>
        <Col medium={3}>
          <Tag>Tag</Tag>
        </Col>
      </Row>
    </StoryContainer>
  </>
));

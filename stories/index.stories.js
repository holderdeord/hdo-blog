import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PageHeader from "../src/components/PageHeader";

storiesOf('Hi there', module).add(
  'friend',
  () => <a onClick={linkTo('Page header')} style={{background: 'papayawhip'}} >Click me</a>);
storiesOf('Page header', module).add('with title', () => <PageHeader title="Blog" onMenuClick={action('clicked')} />);

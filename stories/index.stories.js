import React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeader from "../src/components/PageHeader";

storiesOf('Page header', module).add('with title', () => <PageHeader title="Blogg" />);

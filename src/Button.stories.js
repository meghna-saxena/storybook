import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

storiesOf('Button', module).add('with background 1', () => (
    <Button bg="limegreen">Hello world</Button>
)).add('with background 2', () => (
    <Button bg="lightblue">Hello world</Button>
));
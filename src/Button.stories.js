import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

storiesOf('Button', module)
    .addWithJSX('with background 1', () => (<Button bg="limegreen">Hello world</Button>))
    .addWithJSX('with background 2', () => (<Button bg="lightblue">Hello world</Button>));
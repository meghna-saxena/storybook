import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

storiesOf('Button', module)
    .addWithJSX(
        'with background 1',
        withInfo({
            styles: {
                header: {
                    h1: {
                        color: 'red',
                    },
                },
            },
            text: `
            description
            
            ~~~js
            <Button>dsdssfdffdg</Button>
            ~~~
            `,
        })(() => <Button bg="limegreen">Hello world</Button>)
    )
    .addWithJSX('with background 2', () => (<Button bg="lightblue">Hello world</Button>));
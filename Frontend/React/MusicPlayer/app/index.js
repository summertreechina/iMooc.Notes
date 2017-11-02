import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hellor';
import { AppContainer } from 'react-hot-loader';


render(
    <AppContainer>
        <Hello />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./components/Hellor', () => {
        const NewHello = require('./components/Hellor').default;
        render(
            <AppContainer>
                <NewHello />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
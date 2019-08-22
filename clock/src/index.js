import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Clock />, document.getElementById('root'));

serviceWorker.unregister();

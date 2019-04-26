import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    render() {
        return(
            <div>Get shit done!</div>
        );
    }
}

// ========================================

ReactDOM.render(
    <List />,
    document.getElementById('root')
);
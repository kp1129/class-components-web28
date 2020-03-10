import React from 'react';
import './MiniManual.css';

class MiniManual extends React.Component {
    render(){
        return (
            <div className="mini-manual">
                <p>- Add things to do</p>
                <p>- Click on todos to mark them as completed</p>
                <p>- Clear completed todos</p>
                <p>- Search through todos if your list gets out of hand ;) </p>
            </div>
            
        )
    }
}

export default MiniManual;
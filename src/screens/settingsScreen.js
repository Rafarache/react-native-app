import React, {Component} from 'react';

// COMPONENTS
import {ScreenContainer} from '../themes/screen'
import Button from '../components/Button/button'

// SCRIPTS
import ClearData from '../async-storage/_clearData'


export default class SettingScreen extends Component {

    constructor () {
        super();
        this.state = {
        };
    }
    
    clearData() {
        ClearData._clearData()
    }

    render () {
    return (
        <ScreenContainer>
            <Button 
                onPress={this.clearData}
                title={"Clear Data"}
                description={"If you press this button, all ToDo's made will be reset."}
                icon={"ios-trash"}
            />
        </ScreenContainer>
        );
    }
}
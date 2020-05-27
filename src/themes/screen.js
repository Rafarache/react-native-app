import styled from 'styled-components/native'
import {StatusBar} from 'react-native';

const padding = '10';

export const ScreenContainer = styled.View`

    padding-top: ${StatusBar.currentHeight + parseInt(padding)}px;
    padding-left: ${padding}px;
    padding-right: ${padding}px;
    padding-bottom: 0px;
`;
import styled from 'styled-components/native'
import {StatusBar} from 'react-native';

const padding = '10';

export const ScreenContainer = styled.View`

    height: 100%;
    width: 100%;

    padding-top: ${StatusBar.currentHeight + parseInt(padding)}px;
    padding-left: ${padding}px;
    padding-right: ${padding}px;
`;
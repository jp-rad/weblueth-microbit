import React from 'react';
import { WbxContextProvider } from '@weblueth/react'
import { getServices, requestMicrobit } from 'microbit-web-bluetooth';

type Props = {
    children: any;
    bluetooth?: Bluetooth;
    connectionName?: string;
}

export function MicrobitContextProvider(props: Props) {
    const connectionName = props.connectionName ?? "micro:bit";
    return (
        <WbxContextProvider retrieveServices={getServices} requestDevice={requestMicrobit} bluetooth={props.bluetooth} connectionName={connectionName}>
            {props.children}
        </WbxContextProvider>
    );
}

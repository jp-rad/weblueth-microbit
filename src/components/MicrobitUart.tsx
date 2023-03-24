import React, { useEffect, useState } from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxCustomEventCallback, WbxServiceProps, WbxServices } from '@weblueth/react';
import { UartService } from 'microbit-web-bluetooth/types/services/uart';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<UartService> {
    /**
     * Serial data received event
     */
    onReceive?: WbxCustomEventCallback<Uint8Array>;
    /**
     * Serial received text event
     */
    onReceiveText?: WbxCustomEventCallback<string>;
}

const receive = 'receive';
const receiveText = 'receiveText';

export function MicrobitUart(props: Props) {

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.uartService;
        if (target) {
            if (bound.binding) {
                if (props.onReceive) {
                    target.addEventListener(receive, props.onReceive)
                }
                if (props.onReceiveText) {
                    target.addEventListener(receiveText, props.onReceiveText)
                }
            } else {
                if (props.onReceive) {
                    target.removeEventListener(receive, props.onReceive)
                }
                if (props.onReceiveText) {
                    target.removeEventListener(receiveText, props.onReceiveText)
                }
            }
            if (props.onServiceBound) {
                props.onServiceBound({ ...bound, target });
            }
        }
    };

    return (
        <WbxServices onServicesBound={onServicesBound} />
    );
}

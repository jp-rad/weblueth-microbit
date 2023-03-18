import React, { useEffect, useState } from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxCustomEventCallback, WbxServiceProps, WbxServices } from '@weblueth/react';
import { UartService } from 'microbit-web-bluetooth/types/services/uart';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<UartService> {
}

export function MicrobitUart(props: Props) {

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.uartService;
        if (target) {
            if (props.onServiceBound) {
                props.onServiceBound({ ...bound, target });
            }
        }
    };

    return (
        <WbxServices onServicesBound={onServicesBound} />
    );
}

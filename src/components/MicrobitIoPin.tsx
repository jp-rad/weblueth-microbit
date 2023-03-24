import React from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxCustomEventCallback, WbxServiceProps, WbxServices } from '@weblueth/react';
import { IoPinService, PinData } from 'microbit-web-bluetooth/types/services/io-pin';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<IoPinService> {
    /**
     * Pin data changed event
     */
    onPinDataChanged?: WbxCustomEventCallback<PinData[]>;
}

const pindatachanged = "pindatachanged";

export function MicrobitIoPin(props: Props) {

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.ioPinService;
        if (target) {
            if (bound.binding) {
                if (props.onPinDataChanged) {
                    target.addEventListener(pindatachanged, props.onPinDataChanged)
                }
            } else {
                if (props.onPinDataChanged) {
                    target.removeEventListener(pindatachanged, props.onPinDataChanged)
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

import React, { useEffect, useState } from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxCustomEventCallback, WbxServiceProps, WbxServices } from '@weblueth/react';
import { AD, IO, IoPinService, PinData } from 'microbit-web-bluetooth/types/services/io-pin';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<IoPinService> {
    /**
     * Pin data changed event
     */
    onPinDataChanged?: WbxCustomEventCallback<PinData[]>;
    /**
     * Set pin analogue/digital configuration
     */
    adConfiguration: AD[];
    /**
     * Set pin input/output configuration
     */
    ioConfiguration: IO[];
}

const pindatachanged = "pindatachanged";

export function MicrobitIoPin(props: Props) {
    const [service, setService] = useState<IoPinService | undefined>(undefined);

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.ioPinService;
        if (target) {
            if (bound.binding) {
                if (props.onPinDataChanged) {
                    target.addEventListener(pindatachanged, props.onPinDataChanged)
                }
                setService(target);
            } else {
                if (props.onPinDataChanged) {
                    target.removeEventListener(pindatachanged, props.onPinDataChanged)
                }
                setService(undefined);
            }
            if (props.onServiceBound) {
                props.onServiceBound({ ...bound, target });
            }
        }
    };

    useEffect(() => {
        if (service && props.adConfiguration) {
            service.setAdConfiguration(props.adConfiguration);
        }
    }, [service, props.adConfiguration]);
    
    useEffect(() => {
        if (service && props.ioConfiguration) {
            service.setIoConfiguration(props.ioConfiguration);
        }
    }, [service, props.ioConfiguration]);

    return (
        <WbxServices onServicesBound={onServicesBound} />
    );
}

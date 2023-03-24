import React from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxServiceProps, WbxServices } from '@weblueth/react';
import { DeviceInformationService } from 'microbit-web-bluetooth/types/services/device-information';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<DeviceInformationService> {
}

export function MicrobitDeviceInformation(props: Props) {

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.deviceInformationService;
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

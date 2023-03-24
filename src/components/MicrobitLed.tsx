import React, { useEffect, useState } from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxServiceProps, WbxServices } from '@weblueth/react';
import { LedService } from 'microbit-web-bluetooth/types/services/led';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<LedService> {
    /**
     * Set scrolling delay (milliseconds)
     */
    scrollingDelay?: number;
}

export function MicrobitLed(props: Props) {
    const [service, setService] = useState<LedService | undefined>(undefined);

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.ledService;
        if (target) {
            if (bound.binding) {
                setService(target);
            } else {
                setService(undefined);
            }
            if (props.onServiceBound) {
                props.onServiceBound({ ...bound, target });
            }
        }
    };

    useEffect(() => {
        if (service && props.scrollingDelay) {
            service.setScrollingDelay(props.scrollingDelay);
        }
    }, [service, props.scrollingDelay]);

    return (
        <WbxServices onServicesBound={onServicesBound} />
    );
}

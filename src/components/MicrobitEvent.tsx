import React from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxCustomEventCallback, WbxServiceProps, WbxServices } from '@weblueth/react';
import { EventService, MicrobitEvent as EventServiceEvent } from 'microbit-web-bluetooth/types/services/event';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<EventService> {
    /**
     * micro:bit requirements changed event
     */
    onMicrobitRequirementsChanged?: WbxCustomEventCallback<EventServiceEvent>;
    /**
     * micro:bit event event
     */
    onMicrobitEvent?: WbxCustomEventCallback<EventServiceEvent>;
}

const microbitrequirementschanged = "microbitrequirementschanged";
const microbitevent = "microbitevent";

export function MicrobitEvent(props: Props) {

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.eventService;
        if (target) {
            if (bound.binding) {
                if (props.onMicrobitRequirementsChanged) {
                    target.addEventListener(microbitrequirementschanged, props.onMicrobitRequirementsChanged)
                }
                if (props.onMicrobitEvent) {
                    target.addEventListener(microbitevent, props.onMicrobitEvent)
                }
            } else {
                if (props.onMicrobitRequirementsChanged) {
                    target.removeEventListener(microbitrequirementschanged, props.onMicrobitRequirementsChanged)
                }
                if (props.onMicrobitEvent) {
                    target.removeEventListener(microbitevent, props.onMicrobitEvent)
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

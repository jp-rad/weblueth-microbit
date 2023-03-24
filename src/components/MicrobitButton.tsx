import React from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxCustomEventCallback, WbxServiceProps, WbxServices } from '@weblueth/react';
import { ButtonService, ButtonState } from 'microbit-web-bluetooth/types/services/button';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<ButtonService> {
    /**
     * Button A state changed event
     */
    onButtonAStateChanged?: WbxCustomEventCallback<ButtonState>;
    /**
     * Button B state changed event
     */
    onButtonBStateChanged?: WbxCustomEventCallback<ButtonState>;
}

const buttonastatechanged = 'buttonastatechanged';
const buttonbstatechanged = 'buttonbstatechanged';

export function MicrobitButton(props: Props) {

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.buttonService;
        if (target) {
            if (bound.binding) {
                if (props.onButtonAStateChanged) {
                    target.addEventListener(buttonastatechanged, props.onButtonAStateChanged)
                }
                if (props.onButtonBStateChanged) {
                    target.addEventListener(buttonbstatechanged, props.onButtonBStateChanged)
                }
            } else {
                if (props.onButtonAStateChanged) {
                    target.removeEventListener(buttonastatechanged, props.onButtonAStateChanged)
                }
                if (props.onButtonBStateChanged) {
                    target.removeEventListener(buttonbstatechanged, props.onButtonBStateChanged)
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

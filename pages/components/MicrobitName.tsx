import React, { useState } from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxDevice } from '@weblueth/react';

const defaultName = '(none)';

export default function MicrobitName() {
    const [name, setName] = useState<string>(defaultName);

    const onDeviceBound: WbBoundCallback<BluetoothDevice> = bound => {
        if (bound.binding) {
            setName(bound.target.name!);
        } else {
            setName(defaultName);
        }
    }
    return (
        <React.Fragment>
            <WbxDevice onDeviceBound={onDeviceBound} />
            {name}
        </React.Fragment>
    );
}

import React, { useEffect, useState } from 'react';
import { WbBoundCallback } from '@weblueth/statemachine';
import { WbxCustomEventCallback, WbxServiceProps, WbxServices } from '@weblueth/react';
import { MagnetometerCalibration, MagnetometerData, MagnetometerPeriod, MagnetometerService } from 'microbit-web-bluetooth/types/services/magnetometer';
import { Services } from 'microbit-web-bluetooth';

interface Props extends WbxServiceProps<MagnetometerService> {
    /**
     * Magnetometer data changed event
     */
    onMagnetometerDataChanged: WbxCustomEventCallback<MagnetometerData>;
    /**
     * Magnetometer bearing changed event
     */
    onMagnetometerBearingChanged: WbxCustomEventCallback<number>;
    /**
     * Magnetometer calibration changed event
     */
    onMagnetometerCalibrationChanged: WbxCustomEventCallback<MagnetometerCalibration>;
    /**
     * Set magnetometer sample period
     */
    magnetometerPeriod?: MagnetometerPeriod;
}

const magnetometerdatachanged = "magnetometerdatachanged";
const magnetometerbearingchanged = "magnetometerbearingchanged";
const magnetometercalibrationchanged = "magnetometercalibrationchanged";

export function MicrobitMagnetometer(props: Props) {
    const [service, setService] = useState<MagnetometerService | undefined>(undefined);

    const onServicesBound: WbBoundCallback<Services> = bound => {
        const target = bound.target.magnetometerService;
        if (target) {
            if (bound.binding) {
                if (props.onMagnetometerDataChanged) {
                    target.addEventListener(magnetometerdatachanged, props.onMagnetometerDataChanged)
                }
                if (props.onMagnetometerBearingChanged) {
                    target.addEventListener(magnetometerbearingchanged, props.onMagnetometerBearingChanged)
                }
                if (props.onMagnetometerCalibrationChanged) {
                    target.addEventListener(magnetometercalibrationchanged, props.onMagnetometerCalibrationChanged)
                }
                setService(target);
            } else {
                if (props.onMagnetometerDataChanged) {
                    target.removeEventListener(magnetometerdatachanged, props.onMagnetometerDataChanged)
                }
                if (props.onMagnetometerBearingChanged) {
                    target.removeEventListener(magnetometerbearingchanged, props.onMagnetometerBearingChanged)
                }
                if (props.onMagnetometerCalibrationChanged) {
                    target.removeEventListener(magnetometercalibrationchanged, props.onMagnetometerCalibrationChanged)
                }
                setService(undefined);
            }
            if (props.onServiceBound) {
                props.onServiceBound({ ...bound, target });
            }
        }
    };

    useEffect(() => {
        if (service && props.magnetometerPeriod) {
            service.setMagnetometerPeriod(props.magnetometerPeriod);
        }
    }, [service, props.magnetometerPeriod]);

    return (
        <WbxServices onServicesBound={onServicesBound} />
    );
}

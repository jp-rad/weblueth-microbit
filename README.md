# @weblueth/microbit

Web Bluetooth react micro:bit.

[Live Demo (GitHub Pages)](https://jp-rad.github.io/weblueth-microbit/)

## Installation:

```bash
npm install @weblueth/microbit --save-dev
```

or

```bash
yarn add --dev @weblueth/microbit
```

## Implementation Status
- [x] micro:bit Discovery
- [x] Service enumeration

### Device Information Service
- [x] Model Number
- [x] Serial Number
- [x] Hardware Revision
- [x] Firmware Revision
- [x] Manufacturer

### LED Service
- [ ] LED Matrix State
- [ ] LED Text
- [ ] Scrolling Delay

### Button Service
- [x] Button A State
- [x] Button A State Changed Event
- [x] Button B State
- [x] Button B State Changed Event

### Temperature Service
- [x] Temperature
- [x] Temperature Changed Event
- [x] Temperature Period

### Accelerometer Service
- [x] Accelerometer Data
- [x] Accelerometer Data Changed Event
- [x] Accelerometer Period

### Magnetometer Service
- [ ] Magnetometer Data
- [ ] Magnetometer Data Changed Event
- [ ] Magnetometer Period
- [ ] Magnetometer Bearing
- [ ] Magnetometer Bearing Changed Event
- [ ] Magnetometer Calibration

### UART Service
- [x] Send
- [x] Receive Event
- [x] SendString
- [x] ReceiveString Event

### Event Service
- [ ] MicroBit Requirements
- [ ] MicroBit Event
- [ ] Client Requirements
- [ ] Client Event

### IO Pin Service
- [ ] Pin Data
- [ ] Pin Data Changed Event
- [ ] Pin AD Configuration
- [ ] Pin IO Configuration
- [ ] PWM Control

### DFU Control Service
- [ ] Request DFU
- [ ] Request Flash Code
s
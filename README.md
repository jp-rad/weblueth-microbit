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
- [ ] Model Number
- [ ] Serial Number
- [ ] Hardware Revision
- [ ] Firmware Revision
- [ ] Manufacturer

### LED Service
- [ ] LED Matrix State
- [ ] LED Text
- [x] Scrolling Delay

### Button Service
- [ ] Button A State
- [x] Button A State Changed Event
- [ ] Button B State
- [x] Button B State Changed Event

### Temperature Service
- [ ] Temperature
- [x] Temperature Changed Event
- [x] Temperature Period

### Accelerometer Service
- [ ] Accelerometer Data
- [x] Accelerometer Data Changed Event
- [x] Accelerometer Period

### Magnetometer Service
- [ ] Magnetometer Data
- [x] Magnetometer Data Changed Event
- [x] Magnetometer Period
- [ ] Magnetometer Bearing
- [x] Magnetometer Bearing Changed Event
- [ ] Magnetometer Calibration
- [x] Magnetometer Calibration Changed Event

### UART Service
- [ ] Send
- [x] Receive Event
- [ ] SendString
- [x] ReceiveString Event

### Event Service
- [ ] MicroBit Requirements
- [x] MicroBit Event
- [ ] Client Requirements
- [x] Client Event

### IO Pin Service
- [ ] Pin Data
- [x] Pin Data Changed Event
- [x] Pin AD Configuration
- [x] Pin IO Configuration
- [ ] PWM Control

### DFU Control Service
- [ ] Request DFU
- [ ] Request Flash Codes

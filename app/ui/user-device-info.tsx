'use client';
import { UAParser } from 'ua-parser-js';

export const UserDeviceInfo = () => {
  const { browser, device } = UAParser(window.navigator.userAgent);

  return (
    <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
      Browser Name: {browser.name}
      <br />
      Device Vendor: {device.vendor}
      <br />
      Device Model: {device.model}
    </p>
  );
};

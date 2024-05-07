'use client';
import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

export const UserDeviceInfo = () => {
  const [browserInfo, setBrowserInfo] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { browser, device } = UAParser(window.navigator.userAgent);
      setBrowserInfo({ browser, device });
    }
  }, []);

  if (!browserInfo) {
    return <p>Loading...</p>;
  }

  const { browser, device } = browserInfo;

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

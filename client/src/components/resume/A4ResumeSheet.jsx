import React, { forwardRef } from 'react';
import { Compact1PageResume } from './Compact1PageResume';
import { Detailed2PageResume } from './Detailed2PageResume';

export const A4ResumeSheet = forwardRef(({ version = '1page' }, ref) => {
  if (version === '1page') {
    return <Compact1PageResume ref={ref} />;
  }
  return <Detailed2PageResume ref={ref} />;
});

A4ResumeSheet.displayName = 'A4ResumeSheet';

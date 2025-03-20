'use client';

import * as React from 'react';

import { useState } from 'react';
import { DualRangeSlider } from "@components/ui_old/DualRange";


export default function DualRangeSliderLabel  ()  {
  const [values, setValues] = useState([0, 100]);

  return (
    <div className="w-full space-y-5 p-10">
       <DualRangeSlider
        label={(value) => value}
        labelPosition="top"
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={1}
      />

    </div>
  );
};

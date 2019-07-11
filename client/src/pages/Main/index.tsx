import React from 'react';
import Guide from '../../components/Guide';
import Greeting from '../../components/Greeting';

export default function Main() {
  return (
    <div>
      <Greeting name="TypeScript" />
      <Guide />
    </div>
  );
}

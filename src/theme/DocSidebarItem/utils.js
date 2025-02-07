import React, { useEffect, useState } from 'react';

import All_Round from '@site/static/labels/All_Round.svg';
import MEV_Protected from '@site/static/labels/MEV_Protected.svg';
import Best_Execution from '@site/static/labels/Best_Execution.svg';
import No_Collateral from '@site/static/labels/No_Collateral.svg';
import Better_Yield from '@site/static/labels/Better_Yield.svg';
import Non_Toxic_Flow from '@site/static/labels/Non_Toxic_Flow.svg';
import Better_Yields from '@site/static/labels/Better_Yields.svg';
import Ownable from '@site/static/labels/Ownable.svg';
import Fastest_Onboarding from '@site/static/labels/Fastest_Onboarding.svg';
import Powerful from '@site/static/labels/Powerful.svg';
import Flexible from '@site/static/labels/Flexible.svg';
import SDK from '@site/static/labels/SDK.svg';
import Hooks from '@site/static/labels/Hooks.svg';
import Simple from '@site/static/labels/Simple.svg';
import Largest_Exposure from '@site/static/labels/Largest_Exposure.svg';
import Upgradeable from '@site/static/labels/Upgradeable.svg';
import Limit_Order_Book from '@site/static/labels/Limit_Order_Book.svg';
import Zero_Risk from '@site/static/labels/Zero_Risk.svg';
import Liquidity_Pools from '@site/static/labels/Liquidity_Pools.svg';
import GlueX_Cross from '@site/static/labels/GlueX_Cross.svg';

const addIconsToLabel = (label, className) => {
  let icons;
  const iconStyle = {
    width: '20px',
    height: '20px',
    display: 'block',
  };

  const labelParts = label.split(' ');
  if (labelParts.length > 1 && labelParts[0].startsWith('label-icon-')) {
    const iconName = labelParts[0].replace('label-icon-', '');
    label = labelParts.slice(1).join(' ');
    switch (iconName) {
      case 'overview':
        icons = <Limit_Order_Book />;
        break;
    }
  }

  switch (className) {
    case 'label-gluex-apis':
      icons = <SDK />;
      break;
    // case 'label-gluex-apis-bridge':
    case 'label-gluex-apis-exchange_rate':
      icons = <All_Round />;
      break;
    case 'label-gluex-apis-router':
      icons = <No_Collateral />;
      break;
    case 'label-gluex-ownable':
    case 'label-gluex-apis-solve':
      icons = <Ownable />;
      break;
    case 'label-gluex-protocol':
      icons = <GlueX_Cross />;
      break;
    case 'label-gluex-powerful':
      icons = <Powerful />;
      break;
    // case 'label-gluex-intents':
    // case 'label-gluex-protocol-modules':
  }

  return (
    <div className="flex items-center">
      <span className="scale-[1.2]">{icons}</span>
      {label}
    </div>
  );
};

export { addIconsToLabel };

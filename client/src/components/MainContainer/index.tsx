import React from 'react';
import IceContainer from '@icedesign/container';
import IceTitle from '@icedesign/title';

import style from './style.module.scss';

export default function MainContainer(props) {
  const { children, subtitle, title } = props;
  return (
    <IceContainer className={style.container}>
      <IceTitle text={title} subtitle={subtitle} className={style.title} />
      {children}
    </IceContainer>
  );
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SideNavigation } from '@awsui/components-react';
import { LMA_VERSION } from '../common/constants';

import { CALLS_PATH, STREAM_AUDIO_PATH, VIRTUAL_PARTICIPANT_PATH, DEFAULT_PATH } from '../../routes/constants';

export const callsNavHeader = { text: 'Meeting Analytics', href: `#${DEFAULT_PATH}` };
export const callsNavItems = [
  { type: 'link', text: 'Meetings', href: `#${CALLS_PATH}` },
  {
    type: 'section',
    text: 'Sources',
    items: [
      {
        type: 'link',
        text: 'Download Chrome Extension',
        href: `/lma-chrome-extension-${LMA_VERSION}.zip`,
      },
      {
        type: 'link',
        text: 'Stream Audio (no extension)',
        href: `#${STREAM_AUDIO_PATH}`,
        external: true,
      },
      {
        type: 'link',
        text: 'Virtual Participant (Preview)',
        href: `#${VIRTUAL_PARTICIPANT_PATH}`,
        external: true,
      },
    ],
  },
];

const defaultOnFollowHandler = (ev) => {
  // XXX keep the locked href for our demo pages
  // ev.preventDefault();
  console.log(ev);
};

/* eslint-disable react/prop-types */
const Navigation = ({
  activeHref = `#${CALLS_PATH}`,
  header = callsNavHeader,
  items = callsNavItems,
  onFollowHandler = defaultOnFollowHandler,
}) => (
  <Switch>
    <Route path={CALLS_PATH}>
      <SideNavigation
        items={items || callsNavItems}
        header={header || callsNavHeader}
        activeHref={activeHref || `#${CALLS_PATH}`}
        onFollow={onFollowHandler}
      />
    </Route>
  </Switch>
);

export default Navigation;

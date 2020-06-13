import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'react-router-dom';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import Switcher20 from '@carbon/icons-react/lib/switcher/20';

function TutorialHeader() {
  return (
    <Header aria-label="Carbon Tutorial">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="IBM">
        Carbon Tutorial
      </HeaderName>
      <HeaderNavigation aria-label="Carbon Tutorial">
        <HeaderMenuItem element={Link} to="/repos">
          Repositories
        </HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Notifications">
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar">
          <UserAvatar20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App switcher">
          <Switcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
}

export default TutorialHeader;

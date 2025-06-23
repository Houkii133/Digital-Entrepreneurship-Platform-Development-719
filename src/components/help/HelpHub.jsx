import React from 'react';
import { HelpHub } from '@questlabs/react-sdk';
import questConfig from '../../config/questConfig';

const AppHelpHub = () => {
  // Generate or get user ID - in a real app, this would come from your auth system
  const getUserId = () => {
    let userId = localStorage.getItem('drivenmind_userId');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('drivenmind_userId', userId);
    }
    return userId;
  };

  return (
    <HelpHub
      uniqueUserId={getUserId()}
      questId={questConfig.QUEST_HELP_QUESTID}
      accent={questConfig.PRIMARY_COLOR}
      botLogo={{
        logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1741000949338-Vector%20%282%29.png'
      }}
      style={{
        zIndex: 9999 // Ensure it's above navbar and sidebar
      }}
    />
  );
};

export default AppHelpHub;
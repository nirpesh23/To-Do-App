import React, { useState } from 'react';
import TabContent from './TapContent';

export default function Tabs(){
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div className="ui top attached tabular menu">
        <a
          className={`item ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab1')}
        >
          Pending
        </a>
        <a
          className={`item ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab2')}
        >
          Done
        </a>
        <a
          className={`item ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab3')}
        >
          Upcoming
        </a>
      </div>
      <div className="ui bottom attached segment">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};
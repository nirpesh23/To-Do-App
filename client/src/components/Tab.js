import React, { useState } from 'react';
import TabContent from './TapContent';
import { BASE_URL } from '../constants';

export default function Tabs(){
  const [activeTab, setActiveTab] = useState('tab1');
  const [todos, setTodos] = useState([]);

  const getPendingSearchResult = async ()=>{
    try {
        setActiveTab('tab1')
        const response = await fetch(`${BASE_URL}/todo`,);
        const data = await response.json();
        setTodos(data.data);
    } catch (error) {
        console.error("Error fetching todo items:", error);
    }
  }

  const getCompletedSearchResult = async ()=>{
    try {
        setActiveTab('tab2')
        const response = await fetch(`${BASE_URL}/todo/completed`,);
        const data = await response.json();
        setTodos(data.data);
    } catch (error) {
        console.error("Error fetching todo items:", error);
    }
  }

  const getUpcomingSearchResult = async ()=>{
      try {
          setActiveTab('tab3')
          const response = await fetch(`${BASE_URL}/todo/upcoming`,);
          const data = await response.json();
          setTodos(data.data);
      } catch (error) {
          console.error("Error fetching todo items:", error);
      }
  }
  
  return (
    <div>
      <div className="ui top attached tabular menu" style={{marginTop:"10px", position:"sticky"}}>
        <a
          className={`item ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={getPendingSearchResult}
        >
          Pending
        </a>
        <a
          className={`item ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={getCompletedSearchResult}
        >
          Done
        </a>
        <a
          className={`item ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={getUpcomingSearchResult}
        >
          Upcoming
        </a>
      </div>
      <div className="ui bottom attached segment">
        <TabContent activeTab={activeTab} todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
};
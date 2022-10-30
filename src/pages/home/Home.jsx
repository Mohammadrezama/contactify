import './home.css';
import { useState, useEffect } from 'react';
import { Tabs, Contacts } from 'features';
const apiAddress = 'https://randomuser.me/api/1.4/';
const lettersArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('');
  const [data, setData] = useState([]);
  const [categorizedData, setCategorizedData] = useState([]);
  const [tabsData, setTabsData] = useState([]);
  function userCategorization(users) {
    let userList = {};
    users.forEach((item) => {
      let firstWord = item.name.last.substring(0, 1).toLowerCase();
      if (!userList[firstWord]) {
        userList[firstWord] = [];
      }
      userList[firstWord].push(item);
    });
    return userList;
  }
  function tabCategorization(users) {
    let tabsArray = [];
    tabsArray = lettersArray.map((letter) => ({
      value: letter,
      count: users[letter]?.length ? users[letter]?.length : 0,
    }));
    tabsArray.sort((a, b) => a.value.localeCompare(b.value));
    return tabsArray;
  }
  useEffect(() => {
    fetch(`${apiAddress}?results=500`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.results);
        let userCategorized = userCategorization(res.results);
        let userTabs = tabCategorization(userCategorized);
        setCategorizedData(userCategorized);
        setTabsData(userTabs);
      });
  }, []);

  return (
    <div className="main">
      <h2 className="text-center my-4">Contact List </h2>
      <div className="show-box">
        <Tabs
          tabsData={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="contact-wrapper">
          {categorizedData[activeTab] && (
            <Contacts items={categorizedData[activeTab]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

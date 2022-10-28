import './App.css';
import { useState, useEffect } from 'react';
import { Tabs } from 'features';
import { Contact } from 'components';
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
function App() {
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

  console.log(data, categorizedData, 'data');
  return (
    <div className="container mx-auto">
      <div className="main">
        <h2 clasName="text-center">Contact List </h2>
        <div className="contacts">
          <Tabs
            tabsData={tabsData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="contact-wrapper">
            {categorizedData[activeTab] &&
              categorizedData[activeTab].map(({ name }, index) => {
                return (
                  <Contact
                    lastName={name.last}
                    firstName={name.first}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

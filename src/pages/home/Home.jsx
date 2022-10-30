import './home.css';
import { useState, useEffect } from 'react';
import { Tabs, Contacts } from 'features';
import { toast } from 'react-toastify';
const lettersArray = [
  { value: 'a', count: 0 },
  { value: 'b', count: 0 },
  { value: 'c', count: 0 },
  { value: 'd', count: 0 },
  { value: 'e', count: 0 },
  { value: 'f', count: 0 },
  { value: 'g', count: 0 },
  { value: 'h', count: 0 },
  { value: 'i', count: 0 },
  { value: 'j', count: 0 },
  { value: 'k', count: 0 },
  { value: 'l', count: 0 },
  { value: 'm', count: 0 },
  { value: 'n', count: 0 },
  { value: 'o', count: 0 },
  { value: 'p', count: 0 },
  { value: 'q', count: 0 },
  { value: 'r', count: 0 },
  { value: 's', count: 0 },
  { value: 't', count: 0 },
  { value: 'u', count: 0 },
  { value: 'v', count: 0 },
  { value: 'w', count: 0 },
  { value: 'x', count: 0 },
  { value: 'y', count: 0 },
  { value: 'z', count: 0 },
];
const apiAddress = 'https://randomuser.me/api/1.4/';

const Home = () => {
  const [activeTab, setActiveTab] = useState('');
  const [data, setData] = useState([]);
  const [categorizedData, setCategorizedData] = useState([]);
  const [tabsData, setTabsData] = useState(lettersArray);
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
      value: letter.value,
      count: users[letter.value]?.length ? users[letter.value]?.length : 0,
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
        setActiveTab('a');
      })
      .catch((e) => {
        toast.error('Something went wrong');
      });
  }, []);

  return (
    <div className="main">
      <h3 className="text-center my-4 main-title">Contact List </h3>
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

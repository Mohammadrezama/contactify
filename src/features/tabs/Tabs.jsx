import { Tab } from 'components';
export const Tabs = (props) => {
  const { tabsData, activeTab, setActiveTab } = props;
  return (
    <div className="tabs">
      {tabsData.map((item, index) => (
        <Tab
          key={index}
          value={item.value}
          count={item.count}
          active={item.value === activeTab}
          onClick={() => {
            setActiveTab(item.value);
          }}
        />
      ))}
    </div>
  );
};

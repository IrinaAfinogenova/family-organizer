
type TabType = {id: string; title: string }

interface ITabsGroup {
  tabs: TabType[];
  selectedTabId?: string;
  onTabChange?: (tabId: string) => void;
}

export default function TabsGroup({tabs, selectedTabId, onTabChange}: ITabsGroup) {
  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  }

  return (
    <div className="flex flex-row flex-wrap justify-between w-full gap-2 mb-6">
			{tabs.map(tab => (
				<div
					key={tab.id}
          onClick={() => handleTabClick(tab.id)}
					className={`
            flex items-center justify-center
            h-8 gap-x-2 rounded-full pl-4 pr-4
            cursor-pointer
            ${selectedTabId === tab.id ? 'bg-green-200 text-black-200' : 'bg-gray-100 text-gray-700'}
          `}
					>
					  {tab.title}
				</div>
			))}
    </div>
  );
}
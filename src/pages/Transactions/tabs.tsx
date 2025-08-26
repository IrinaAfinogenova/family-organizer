import { IconCalendar, IconList } from '@tabler/icons-react';

export const periodTabs = (t: (a: string) => string) => ([
	{id: "month", title: t("month")},
  {id: "week", title: t("week")},
  {id: "last-month", title: t("last-month")},
	// TODO add custom date range functionality
]);

export const MODES = [
  {type: 'list', label: <IconList />},
  {type: 'calendar', label: <IconCalendar />},
]

export const formatDate = (date: Date | string) => {
	const dateObj = typeof date === "string" ? new Date(date) : date; 
	const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
	
  return formatter.format(dateObj);
}

export const getDateRange = (range: string) => {
  const today = new Date();

  switch (range) {
    case 'week': {
      const start = new Date(today);
      const end = new Date(start);

      start.setDate(today.getDate() - today.getDay()); // Set to start of week
      end.setDate(start.getDate() + 6); // set to end of week
      return { start, end };
    }
    case 'last-month': {
	  const start = new Date(today.getFullYear(), today.getMonth() - 1, 1); // first day of last month
      const end = new Date(today.getFullYear(), today.getMonth(), 0); // last day of last month
      return { start, end };
	}
	case 'month':
	default: {
      const start = new Date(today.getFullYear(), today.getMonth(), 1); // month start
      const end = new Date(today.getFullYear(), today.getMonth() + 1, 0); // month end
      return { start, end };
    }
  }
}

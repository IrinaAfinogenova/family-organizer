export const formatDate = (date: Date | string) => {
	const dateObj = typeof date === "string" ? new Date(date) : date; 
	const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
	
  return formatter.format(dateObj);
}

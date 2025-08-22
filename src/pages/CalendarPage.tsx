import { Calendar } from "../components/Calendar";
import PageContainer from "../components/PageContainer";

export default function CalendarPage() {
  return (
    <PageContainer isShowBackButton linkTo="/transactions" title="Pick a transaction date">
      <div className="flex flex-col items-center">
        <Calendar />
      </div>
    </PageContainer>);
}
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface IPageContainer {
	linkTo?: string;	
	title: string;
	children?: React.ReactNode;
  isShowBackButton?: boolean;
}

export default function PageContainer({linkTo, title, isShowBackButton, children}: IPageContainer) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row items-center gap-2 mb-6">
        {isShowBackButton && <Link to={linkTo || '/'}><IconArrowLeft /></Link>}
        <span className="text-lg font-bold text-center w-full">
            {title}
        </span>
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';

interface ITextLink {
  className?: string
  hrefTo: string;
  text: string;
}

export default function TextLink({hrefTo, text, className}: ITextLink) {
  return (
    <Link
      to={hrefTo}
      className={`text-green-500 text-sm underline ${className}`}
    >
      {text}
    </Link>
)};

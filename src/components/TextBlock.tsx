import './TextBlock.css';

type TextBlockProps = {
  text: string;
  className?: string;
};

const TextBlock = ({ text, className }: TextBlockProps) => {
  return <div className={className}>{text}</div>;
};

export default TextBlock;
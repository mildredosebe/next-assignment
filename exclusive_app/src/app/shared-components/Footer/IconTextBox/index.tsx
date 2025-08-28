interface IconTextBoxProps {
  icon: React.ElementType;
  text: string;
  reverse?: boolean;
  bordered?: boolean;
  width?: string; 
}
const IconTextBox = ({
  icon: Icon,
  text,
  reverse = false,
  bordered = false,
  width = "",
}: IconTextBoxProps) => {
  let content;
  if (reverse) {
    content = (
      <>
        <span className="font-medium text-white">{text}</span>
        <Icon className="text-xl text-white" />
      </>
    );
  } else {
    content = (
      <>
        <Icon className="text-xl text-white" />
        <span className="font-medium text-white">{text}</span>
      </>
    );
  }
  const baseClass =
    `flex items-center gap-2 rounded-lg px-4 py-2 bg-black ${width}`;
  const borderClass = bordered ? "border border-white" : "";
  return (
    <div className={`${baseClass} ${borderClass}`}>
      {content}
    </div>
  );
};
export default IconTextBox;
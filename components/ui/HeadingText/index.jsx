const HeadingText = ({ ...props }) => {
  let text = props.text;
  let textArray = text.split(" ");
  let lastWord = textArray.pop();

  return (
    <h1 className={`text-2xl lg:text-4xl font-bold capitalize ${props.className}`}>
      {textArray.join(" ")} <span className="text-indigo-600">{lastWord}</span>
    </h1>
  );
};
export default HeadingText;

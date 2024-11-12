const HeadingText = ({ ...props }) => {
  let text = props.text;
  let textArray = text.split(" ");
  let lastWord = textArray.pop();

  return (
    <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
      {textArray.join(" ")}{" "}
      <span className="text-indigo-600 underline decoration-wavy decoration-indigo-400">
        {lastWord}
      </span>
    </h2>
  );
};
export default HeadingText;

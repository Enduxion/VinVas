export default function acHTML(propText) {
  let patterns = [/&:i(.*?)&:~i/g, /&:b(.*?)&:~b/g, /&:u(.*?)&:~u/g];
  let patternData = ["i", "b", "u"];
  let text = propText;
  patterns.forEach((pattern, index) => {
    text = text.replace(
      pattern,
      `<${patternData[index]}>$1</${patternData[index]}>`
    );
  });
  return text;
}
export function acHTMLRemover(propText) {
  let patterns = [/&:i(.*?)&:~i/g, /&:b(.*?)&:~b/g, /&:u(.*?)&:~u/g];
  let text = propText;
  patterns.forEach((pattern) => {
    text = text.replace(pattern, `$1`);
  });
  return text;
}

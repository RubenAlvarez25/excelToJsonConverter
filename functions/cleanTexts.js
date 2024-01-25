const replaceQuotes = (text) => {
  return text.replace(/"/g, " ");
};
const removeUrls = (text) => {
  return text.replace(/<a\s+[^>]*>.*?<\/a>|https?:\/\/\S+/g, "");
};
const removeTargetContent = (text) => {
  return text.replace(/target=['"]?_(.*?)['"]?>(.*?)/g, "");
};

const removeHtmlAndSpecialChars = (text) => {
  return text.replace(/<(?!\/?a\b)[^>]*>|(\r?\n|\r)/g, "");
};

const removeBackslashesAndQuotes = (text) => {
  return text.replace(/\\+("|')/g, "$1");
};

module.exports = {
  replaceQuotes,
  removeUrls,
  removeTargetContent,
  removeHtmlAndSpecialChars,
  removeHtmlAndSpecialChars,
  removeBackslashesAndQuotes,
};

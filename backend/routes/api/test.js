const extractContent = (htmlString) => {
  const extractedContent = {
    paragraphs: [],
    imgSrc: null,
    iframeContent: null,
  };

  // Regular expression to match <p> tags
  const pRegex = /<p>(.*?)<\/p>/g;
  // Regular expression to match <img> tags
  const imgRegex = /<img[^>]+src=['"]([^'"]+)['"][^>]*>/g;
  // Regular expression to match <iframe> tags
  const iframeRegex = /<iframe>(.*?)<\/iframe>/g;

  // Extract content from <p> tags
  let match;
  while ((match = pRegex.exec(htmlString)) !== null) {
    extractedContent.paragraphs.push(match[1]);
  }

  // Extract src attribute from <img> tag
  let imgMatch;
  while ((imgMatch = imgRegex.exec(htmlString)) !== null) {
    extractedContent.imgSrc = imgMatch[1];
  }

  // Extract content from <iframe> tag
  let iframeMatch;
  while ((iframeMatch = iframeRegex.exec(htmlString)) !== null) {
    extractedContent.iframeContent = iframeMatch[1];
  }

  return extractedContent;
};

module.exports = extractContent;

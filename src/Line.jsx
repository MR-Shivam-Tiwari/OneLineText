import React, { useState } from 'react';

export default function Line() {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const removeSpecifiedText = (text) => {
    const specifiedTexts = [
      "Gita Press Gorakhpur. Isshadi Nau Upnishad Shankar Bhashya Sahit, Code 1421, Sanskrit Hindi, Gita Press Gorakhpur (Official) (Hindi Edition) . Gitapress, Gorakhpur. Kindle Edition.",
      "Gita Press Gorakhpur. Isshadi Nau Upnishad Shankar Bhashya Sahit, Code 1421, Sanskrit Hindi, Gita Press Gorakhpur (Official) (Hindi Edition). Gitapress, Gorakhpur. Kindle Edition.",
      "Gita Press Gorakhpur. Isshadi Nau Upnishad Shankar Bhashya Sahit, Code 1421, Sanskrit Hindi, Gita Press Gorakhpur (Official) (Hindi Edition). Gitapress, Gorakhpur. Kindle Edition.",
      "Gita Press Gorakhpur. Isshadi Nau Upnishad Shankar Bhashya Sahit, Code 1421, Sanskrit Hindi, Gita Press Gorakhpur (Official) (Hindi Edition). Gitapress, Gorakhpur. Kindle Edition.",
      // Add any variations of the text that might appear
    ];

    specifiedTexts.forEach(specifiedText => {
      const regex = new RegExp(specifiedText.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'g');
      text = text.replace(regex, '');
    });
    return text;
  };

  const replaceZeroWithGreatO = (text) => {
    return text.replace(/0/g, ' O ');
  };

  const handleInputChange = (event) => {
    let text = event.target.value;
    setInputText(text);
    text = removeSpecifiedText(text);
    text = replaceZeroWithGreatO(text);
    setFormattedText(text.replace(/\s+/g, ' ').trim());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText);
  };

  return (
    <div>
      <div className="w-full container mt-[0px]  mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Text To OneLine Text Formatter</h2>
            <textarea
              className="flex min-h-[80px] h-[250px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full resize-none"
              placeholder="Enter your text here..."
              value={inputText}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Formatted Text</h2>
            <textarea
              className="flex min-h-[80px] rounded-md h-[250px] border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full resize-none"
              value={formattedText}
              readOnly
            ></textarea>
          </div>
        </div>
            <button
              className="inline-flex  w-full mt-10 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              onClick={handleCopy}
            >
              Copy
            </button>
      </div>
    </div>
  );
}

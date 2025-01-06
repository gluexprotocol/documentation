const copyToClipboard = (text: string): Promise<void> => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  } else {
    console.log('This version of the browser does not support copying to clipboard');
  }
};

export { copyToClipboard };

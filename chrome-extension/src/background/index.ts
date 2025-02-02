import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

chrome.omnibox.onInputEntered.addListener(text => {
  try {
    console.log('User searched for:', text);
  } catch (error) {
    console.error('Omnibox error:', error);
  }
});

chrome.omnibox.onInputEntered.addListener(text => {
  console.log('User searched for:', text);
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
  chrome.tabs.create({ url: searchUrl });
});

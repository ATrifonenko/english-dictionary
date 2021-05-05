export const getDefinitionFromDictionaryApi = (word) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`).then((r) => r.json());
};

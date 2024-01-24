export const getDefinitionByWord = async (word) => {
    if (!word) return null
    return await (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)).json()
}

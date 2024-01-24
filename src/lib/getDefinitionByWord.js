export const getDefinitionByWord = async (word) => {
    if (!word) return null
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    if (response.ok) return await response.json()
    else return { error: true, detail: await response.json() }
}

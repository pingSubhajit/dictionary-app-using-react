import './WordInfo.css'

const WordInfo = ({definition, loading}) => {
    if (loading) return (
        <div className='default-display'>
            <h1 className='default-display__title'>Loading...</h1>
        </div>
    )

    if (!definition) return (
        <div className='default-display'>
            <h1 className='default-display__title'>Search for a word to get its definition</h1>
        </div>
    )

    if (definition.error) return (
        <div className='default-display'>
            <h1 className='default-display__title'>{definition.detail.message}</h1>
        </div>
    )

    return (
        <div className="word-info">
            <h1 className='word-info__main_word'>{definition[0].word}</h1>
            <p className='word-info__phonetic'>{definition[0].phonetic}</p>

            <div className="word-info__definitions">
                {definition[0].meanings.map((meaning, index) => (
                    <div key={index} className='word-info__definition'>
                        <h2 className='word-info__part-of-speech'>{meaning.partOfSpeech}</h2>
                        <ul className='word-info__definition-list'>
                            {meaning.definitions.map((def, index) => (
                                <li key={index} className='word-info__definition-item'>{def.definition}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WordInfo

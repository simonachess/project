import React, { Fragment, useEffect, useState } from 'react'

const SearchResults = (props) => {
console.log(props)
const [audioElementRendered, setAudioElementRendered] = useState(false)
const [audioUrl, setAudioUrl] = useState('')

const playAudio = () => {
    const playButton = document.getElementById("audio")
    if (playButton) {
      playButton.play()
    }
}

useEffect(() => {
    const audioUrl = props.data?.length && props.data?.reduce((result, value) => {
        result[value.license.name] = value.phonetics.filter(a => a.audio)[0]?.audio
        return result
    }, {})
    setAudioUrl(audioUrl)
    setAudioElementRendered(true)
},[props.data])

    return (
        <div>
            { Array.isArray(props.data) ?
                <div className="space-y-14">
                    { props.data?.map((x, i) => (
                        <div key={i + Math.floor(Math.random() * 100)} className="flex flex-col">
                            { props.data.length > 1 &&
                                <div className="text-default-300 text-2xl font-semibold text-center">- {i+1} -</div>
                            }
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col">
                                    <span className="text-[32px] sm:text-[64px] font-bold mb-2 dark:text-default-10">
                                        {x.word}
                                    </span>
                                    <span className="text-lg sm:text-2xl text-accent mb-10">
                                        {x.phonetic}
                                    </span>
                                </div>
                                { x.phonetics.length > 0 && audioUrl &&
                                    <>
                                        { audioElementRendered ?
                                            <div className="h-12 w-12 sm:h-[75px] sm:w-[75px]">
                                                <img
                                                    src="/icons/play.svg"
                                                    alt="play"
                                                    className="cursor-pointer"
                                                    onClick={playAudio}
                                                    height="75"
                                                    width="75"
                                                />
                                                <audio id="audio" onLoadedMetadata={() => setAudioElementRendered(true)}>
                                                    <source src={audioUrl[x.license.name]} type="audio/mp3" />
                                                </audio>
                                            </div>
                                        :
                                            <div style={{ height: '22px', width: '22px' }}></div>
                                        }
                                    </>
                                }
                            </div>
                            { x.meanings?.map( m => (
                                <Fragment key={m.partOfSpeech + Math.floor(Math.random() * 100)}>
                                    <div className="flex items-center mb-10">
                                        <span className="text-lg sm:text-2xl font-bold mr-5 dark:text-default-10">
                                            {m.partOfSpeech}
                                        </span>
                                        <span className="w-full h-px bg-default-100"></span>
                                    </div>
                                    <span className="text-base sm:text-xl text-default-300 mb-6">Meaning</span>
                                    { m.definitions.length > 0 &&
                                        <ul className="space-y-4 mb-10 ml-5">
                                            { m.definitions?.map((d,i) => (
                                                <li key={i} className="text-[15px] sm:text-lg list-disc marker:text-accent list-inside dark:text-default-10">
                                                    {d.definition}
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                    { m.synonyms.length > 0 &&
                                        <div className="dark:text-default-10 mb-10 text-base sm:text-xl">
                                            <span className="text-default-300 mr-6">Synonyms</span>
                                            {m.synonyms.map(s => (
                                                <span className="text-accent font-bold">{s}</span>
                                            ))}
                                        </div>
                                    }
                                </Fragment>
                            ))}
                            { x.sourceUrls &&
                                <div className="flex text-sm border-t border-default-100 pt-5 mt-4">
                                    <span className="text-default-300 mr-5">Source</span>
                                    <div className="flex flex-col">
                                        {x.sourceUrls?.map(x => (
                                            <a key={x} href={x} className="inline-flex" target="blank">
                                                <span className="dark:text-default-10">{x}</span>
                                                <img src="/icons/external-link.svg" alt="external link" className="ml-3"/>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                : <div className="flex flex-col mt-[132px] items-center">
                    <img src="/icons/sad-emoji.svg" className="mb-11" alt="sad emoji" height="64" width="64" />
                    <span className="font-bold text-xl mb-6 dark:text-default-10">{props.data?.title}</span>
                    <span className="text-default-300 text-center text-lg">{props.data?.message} {props.data?.resolution}</span>
                </div>
            }
        </div>
    )
}

export default SearchResults
import * as React from 'react'
import { useCallback } from 'react'
import { Link, Outlet } from 'react-router-dom'

// https://github.com/dev-com2020/react2

const id = (function* () {
    let i = 1
    while (true) {
        yield i
        i += 1
    }
})()

function MyFeature() {
    const [articles, setArticles] = React.useState([
        {
            id: id.next(),
            title: "Moje pierwsze Reacty",
            summary: "Podsumowanie artykułu...",
            display: "none"
        },
        {
            id: id.next(),
            title: "Moje kolejne Reacty",
            summary: "Podsumowanie artykułu...",
            display: "none"
        }
    ])
    const [title, setTitle] = React.useState('')
    const [summary, setSummary] = React.useState('')

    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value)
    },[])
    const onChangeSummary = useCallback((e) => {
        setSummary(e.target.value)
    },[])
    const onClickAdd = useCallback(() => {
        setArticles((state) => [
            ...state,
            {
                id: id.next(),
                title: title,
                summary: summary,
                display: "none"
            }
        ])
        setTitle('')
        setSummary('')
    },[summary,title])

    const onClickRemove = useCallback((id) => {
        setArticles((state) => state.filter((article) => 
        article.id !== id))
    },[])

    const onClickToggle = useCallback((id) => {
        setArticles((state) => {
            const articles = [...state]
            const index = articles.findIndex((article) => 
            article.id === id)

            articles[index] = {
                ...articles[index],
                display: articles[index].display ? '': "none"
            }
            return articles
        })
    },[])

    return (
        <section>
            <div>
                <Outlet/>
            </div>
            <div>
                <Link to="first">Tu link pierwszego...</Link>
                <Link to="second">Tu link drugiego...</Link>
            </div>
            <header>
                <h1>Artkuły</h1>
                <input placeholder='tytuł' value={title} 
                onChange={onChangeTitle}/>
                <input placeholder='Summary' value={summary}
                onChange={onChangeSummary}/>
                <button onClick={onClickAdd}>DODAJ</button>
            </header>
            <article>
                <ul>
                    {articles.map((i) => (
                        <li key={i.id.value}>
                            <a href={`#${i.id}`}
                            onClick={() => onClickToggle(i.id)}>
                             {i.title}
                            </a>☑️
                            <button href={`#${i.id}`}
                            onClick={() => onClickRemove(i.id)}>
                            🔴
                            </button>
                            <p style={{ display: i.display}}>{i.summary}
                            </p>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}
export default MyFeature
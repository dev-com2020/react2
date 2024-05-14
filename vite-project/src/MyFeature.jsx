import * as React from 'react'
import { useCallback } from 'react'

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
}
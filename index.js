function App() {

    const [quotes, setQuotes] = React.useState([])
    const [randomQuote, setRandomQuote] = React.useState([])

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch ("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randIndex])
        }
        fetchData()
    }, [])

    return (
        <div>hello 
        
        {quotes.map(quote => (
            <div>{quote.text}</div>
        ))}
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))
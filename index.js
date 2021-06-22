function App() {

    const [quotes, setQuotes] = React.useState([])
    const [randomQuote, setRandomQuote] = React.useState("")
    const [color, setColor] = React.useState("#fff")

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

    const getNewQuote = () => {

            const colors = [
                "#73A857", "BDBB99", "#472E32", "#FFC0CB", "#DA70D6", "#4169E1", "#AFEEEE", "#228B22", "#FF6347", "#DC143C", "#FFA07A",
                "#C71585", "#6B8E23"
            ];
    
        let randIndex = Math.floor(Math.random() * quotes.length)
        let randColorIndex = Math.floor(Math.random() * colors.length)
            setRandomQuote(quotes[randIndex])
            setColor(colors[randColorIndex])
    }

    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="contianer pt-5">
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">Quotable Quotes:</div>
                            <div className="card-body">
                                {randomQuote ? (
                                <>
                                <h5 className="card-title">- {randomQuote.author || "No Author" }</h5>
                                    <p className="card-text"> &quot;{randomQuote.text}&quot;</p>
                                </>
                                ) : (
                                <h2>Loading...</h2>
                                )}
                                    <div className="row">
                                        <button onClick={getNewQuote} className="btn btn-primary">New Quote</button>
                                        <a href={
                                            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                                            encodeURIComponent(
                                                '"' + randomQuote.text + '"' + randomQuote.author
                                            )
                                            } target="_blank" className="btn btn-warning">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href={
                                            "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + 
                                            encodeURIComponent(randomQuote.author) +
                                            "&content=" +
                                            encodeURIComponent(randomQuote.text) +
                                            "&canonicalUrl=https%3A%2F%2fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                                            } target="_blank" className="btn btn-danger">
                                        <i className="fa fa-tumblr"></i>
                                        </a>
                                     </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))
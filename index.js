
function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomquotes, setRandomQuotes] = React.useState("");
    const [color, setColor] = React.useState("#111")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();
            setQuotes(data);
            let ranIndex = Math.floor(Math.random() * data.length)
            setRandomQuotes(data[ranIndex])

        }

        fetchData();

    }, [])

    const getNewQuote = () => {
        var colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ];



        let ranIndex = Math.floor(Math.random() * quotes.length)
        let ranColorIndex = Math.floor(Math.random() * colors.length)
        setRandomQuotes(quotes[ranIndex])
        setColor(colors[ranColorIndex])

    }
    const styles = {
        
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: 10
    }

    const center = {
        textAlign: "center"
    }

    return (
        <div style={{ backgroundColor: color, minHeight: "100vh" }}>
            <div className="container pt-5" style={styles}>
                <div className="jumbotron">
                    <div className="card" >
                        
                        <div className="card-body" style={center}>
                            {randomquotes ? (
                                <>
                                    <h5 className="card-title">- {randomquotes.author || "No Author"}</h5>
                                    <p className="card-text">&quot;{randomquotes.text}&quot;</p>
                                </>
                            ) : (
                                <h2>Loading</h2>
                            )}
                            <div className="row">
                                <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                                <a href={
                                    "https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=" +
                                    encodeURIComponent(
                                        '"' + randomquotes.text + '"' + randomquotes.author
                                    )
                                } target="_blank" className="btn" style={{Color: color}} >
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                                <a href={
                                    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                                    encodeURIComponent(randomquotes.author) +
                                    "&content=" +
                                    encodeURIComponent(randomquotes.text) +
                                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbutton&shareSource=tumblr_share_button"
                                } target="_blank" className="btn btn-danger">
                                    <i class="fa-brands fa-tumblr"></i>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'))

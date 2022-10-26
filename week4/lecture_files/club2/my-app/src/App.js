import "./App.css";

function App() {
    return (
        <div>
            <div className="title-card-container">
                <div className="title-card-item">
                    <h1>People watching club</h1>

                    <p>
                        Humann Homo sapiens are the most abundant and widespread{" "}
                        <b>species of primate</b>, characterized by <i>bipedalism</i> and
                        large, complex brains. This has enabled the development of advanced
                        tools, culture, and language.
                    </p>

                    <button
                        className="button"
                        onClick={() => {
                            console.log("Here's some more info:");
                            console.log(
                                "https://en.wikipedia.org/wiki/Eiffel_Tower_(Paris,_Tennessee)"
                            );
                        }}
                    >
                        More Info to console
                    </button>
                </div>
            </div>

            <h1 className="title-card-container">Places to watch people</h1>

            <div className="title-card-container">
                <div className="title-card-item">
                    <img className="card-image"
                         src="https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg"/>
                    <h1>Eiffel Tower</h1>
                    <p>48.8584° N, 2.2945° E</p>
                </div>
            </div>

            <div className="title-card-container">
                <div className="title-card-item">
                    <img className="card-image" src="https://media.timeout.com/images/101705309/image.jpg"/>
                    <h1>Empire State Building</h1>
                    <p>40.7484° N, 73.9857° W</p>
                </div>
            </div>

            <div className="title-card-container">
                <div className="title-card-item">
                    <img className="card-image"
                         src="https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg"/>
                    <h1>CN Tower</h1>
                    <p>43.6426° N, 79.3871° W</p>
                </div>
            </div>
        </div>
    );
}

export default App;

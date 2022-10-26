import "./App.css";
import InfoCard from "./components/InfoCard";

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

            <InfoCard
                name="Eiffel Tower"
                coordinates="48.8584° N, 2.2945° E"
                image="https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg"
            />

            <InfoCard
                name="Empire State Building"
                coordinates="40.7484° N, 73.9857° W"
                image="https://media.timeout.com/images/101705309/image.jpg"
            />

            <InfoCard
                name="CN Tower"
                coordinates="43.6426° N, 79.3871° W"
                image="https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg"
            />
        </div>
    );
}

export default App;

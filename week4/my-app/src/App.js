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

          <p>
            Humans are <i>omnivorous</i>, capable of consuming a wide variety of
            plant and animal material, and have used fire and other forms of
            heat to prepare and cook food since the time of <i>H. erectus</i>.
            They can survive for up to
            <b> eight weeks</b> without food, and <b>three or four days</b>{" "}
            without water. Humans are generally diurnal, sleeping on average
            seven to nine hours per day. Childbirth is dangerous, with a high
            risk of complications and death. Often, both the mother and the
            father provide care for their children, who are helpless at birth.
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

      {/* Render some InfoCard components and pass a name, coordinates and an image as props */}
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

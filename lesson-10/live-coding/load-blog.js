// in echter Welt stammt das vielleicht aus einem CMS
const blog = [
  {
    headline: "Winterliche Drehorte in Alberta",
    description:
      "Der Schnee peitscht mir ohne Pause ins Gesicht, immer fester kralle ich mich an den seitlichen Griffen des Schneemobils fest und für einen Moment habe ich das Gefühl mitten in einem Bondfilm gelandet zu...",
    image: {
      src: "https://www.filmtourismus.de/wp-content/uploads/2018/12/alberta-spray-lakes-winter-360x240.jpg",
      alt: "Ich vor einem Gletschersee in Canada",
    },
  },
  {
    headline: "Katalonien für Filmfans",
    description:
      "Dieser Beitrag entstand mit finanzieller Unterstützung des Catalan Tourist Board. Ganz im Nordosten Spaniens, von den Pyrenäen bis zum Mittelmeer, erstreckt sich eine filmreife Landschaft, die,...",
    image: {
      src: "https://www.filmtourismus.de/wp-content/uploads/2020/12/spanien-katalonien-cardona-burg-drehort-360x240.jpg",
      alt: "Alte Festung in Katalonien",
    },
  },
  {
    headline: "Spanien in 10 Filmen & Serien",
    description:
      "Dieser Beitrag entstand mit finanzieller Unterstützung des Spanischen Fremdenverkehrsamtes. Von Indiana Jones bis James Bond. Von Lawrence von Arabien bis Daenerys Targaryen. Durch Spanien...",
    image: {
      src: "https://www.filmtourismus.de/wp-content/uploads/2014/10/spanien-baskenland-kloster-gaztelugatxe-360x240.jpg",
      alt: "Kleines Haus auf felsiger Insel.",
    },
  },
  {
    headline: "Movie Christmas - Drehorte beliebter Weihnachtsfilme",
    description:
      "Wo streifte Kevin allein durch New York? Wo verlor das Aschenbrödel seinen Schuh? Und wo genau liegt eigentlich Michels Lönneberga? Die Schauplätze berühmter Weihnachtsfilme sind längst magische Orte...",
    image: {
      src: "https://www.filmtourismus.de/wp-content/uploads/2013/12/sachsen-schloss-moritzburg-aschenbroedel-360x240.jpg",
      alt: "Verschneites Feld auf dem eine Burg steht",
    },
  },
];

// waits for all static HTML to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // console.log("HTML geladen!");

  blog
    .sort((a, b) =>
      a.headline.toLowerCase() < b.headline.toLowerCase() > 0 ? -1 : 1
    )
    .forEach((post) => {
      /**
       *  build new article elements
       */
      // <article>
      const article = document.createElement("article");

      // <div class="article-image">
      const left = document.createElement("div");
      left.classList.add("article-image");

      // <div class="article-description">
      const right = document.createElement("div");
      right.classList.add("article-description");

      // <h2>Winterliche Drehorte in Alberta</h2>
      const headline = document.createElement("h2");
      headline.textContent = post.headline;

      // <p>Der Schnee pei... </p>
      const description = document.createElement("p");
      description.textContent = post.description;

      // <img
      //   src="https://www.filmtourismus.de/wp-content/uploads/2018/12/alberta-spray-lakes-winter-360x240.jpg"
      //   alt="Ich vor einem Gletschersee in Canada"
      // />
      const image = document.createElement("img");
      image.src = post.image.src;
      image.alt = post.image.alt;

      /**
       * combine and arrange elements
       */
      left.appendChild(image);

      right.appendChild(headline);
      right.appendChild(description);

      article.appendChild(left);
      article.appendChild(right);

      document.getElementById("blog-content").appendChild(article);
    });
});

// console.log("JS geladen");

{
  /* 
  <article>
    <div class="article-image">
      <img
        src="https://www.filmtourismus.de/wp-content/uploads/2018/12/alberta-spray-lakes-winter-360x240.jpg"
        alt="Ich vor einem Gletschersee in Canada"
      />
    </div>

    <div class="article-description">
      <h2>Winterliche Drehorte in Alberta</h2>
      <p>
        Der Schnee peitscht mir ohne Pause ins Gesicht, immer fester kralle ich
        mich an den seitlichen Griffen des Schneemobils fest und für einen Moment
        habe ich das Gefühl mitten in einem Bondfilm gelandet zu...
      </p>
    </div>
  </article>; 
*/
}

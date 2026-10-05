(() => {
  const translations = {
    en: {
      title: {
        home: "Davide Dapelo — Picture Books",
        book: "Snow White for President — Davide Dapelo"
      },
      "nav.books": "Books",
      "nav.about": "About",
      "home.eyebrow": "Picture books",
      "home.hero1": "Stories for children…",
      "home.hero2": "And perhaps, for the grown-ups reading them",
      "home.lede1": "This is the home of my picture books.",
      "home.lede2": "If you are looking for my scientific repositories,",
      "home.scienceLink": "you can find them here",
      "home.booksHeading": "Books",
      "home.bookType": "Picture book",
      "home.bookTeaser": "A familiar fairy tale takes an unexpected turn.",
      "home.bookButton": "About the book",
      "home.aboutHeading": "About",
      "home.about1": "I'm a lecturer in a scientific subject. I do geeky things with Fluid Dynamics and Artificial Intelligence, and teach stuff about Water and Maths.",
      "home.about2": "After reading tons of books to my children, I thought that perhaps I, too, might have something to tell!",
      "book.back": "← All books",
      "book.type": "Picture book",
      "book.teaser": "A familiar fairy tale takes an unexpected turn.",
      "book.aboutHeading": "About the book",
      "book.about1": "Snow White has to run. Seven miners give her shelter. Then diamonds, spies, an explosion, a media empire and a pacific revolution complicate the traditional story.",
      "book.about2": "The book is currently being prepared for publication. Purchase links will appear here when it is available."
    },
    it: {
      title: {
        home: "Davide Dapelo — Libri illustrati",
        book: "Snow White for President — Davide Dapelo"
      },
      "nav.books": "Libri",
      "nav.about": "Chi sono",
      "home.eyebrow": "Libri illustrati",
      "home.hero1": "Storie per bambini…",
      "home.hero2": "E forse anche per i grandi che gliele leggono",
      "home.lede1": "Questa è la casa dei miei libri illustrati.",
      "home.lede2": "Se invece stai cercando i miei repository scientifici,",
      "home.scienceLink": "li trovi qui",
      "home.booksHeading": "Libri",
      "home.bookType": "Libro illustrato",
      "home.bookTeaser": "Una fiaba ben nota prende una piega piuttosto inaspettata.",
      "home.bookButton": "Scopri il libro",
      "home.aboutHeading": "Chi sono",
      "home.about1": "Sono docente universitario in una materia scientifica. Mi occupo di cose da nerd tra Fluidodinamica e Intelligenza Artificiale, e insegno cose su Acqua e Matematica.",
      "home.about2": "Dopo aver letto montagne di libri ai miei figli, ho pensato che forse anch'io potevo avere qualcosa da raccontare!",
      "book.back": "← Tutti i libri",
      "book.type": "Libro illustrato",
      "book.teaser": "Una fiaba ben nota prende una piega piuttosto inaspettata.",
      "book.aboutHeading": "Il libro",
      "book.about1": "Biancaneve deve fuggire. Sette minatori le danno rifugio. Poi diamanti, spie, un'esplosione, un impero mediatico e una rivoluzione pacifica complicano non poco la storia tradizionale.",
      "book.about2": "Il libro è attualmente in preparazione per la pubblicazione. I link per acquistarlo compariranno qui quando sarà disponibile."
    }
  };

  const select = document.querySelector(".language-select");
  const page = document.body.dataset.page || "home";

  const setLanguage = (lang) => {
    if (!translations[lang]) lang = "en";
    const dict = translations[lang];

    document.documentElement.lang = lang;
    document.title = dict.title[page] || document.title;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    if (select) select.value = lang;

    localStorage.setItem("language", lang);
  };

  if (select) {
    select.addEventListener("change", () => setLanguage(select.value));
  }

  setLanguage(localStorage.getItem("language") || "en");
})();

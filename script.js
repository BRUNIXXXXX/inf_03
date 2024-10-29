document.addEventListener("DOMContentLoaded", () => {
    const kontenerChatu = document.querySelector(".glowny-czat");
    const wejscie = document.getElementById("wiadomosc");
    const wyslij = document.querySelector(".przycisk-wyslij");
    const losuj = document.querySelector(".przycisk-losowa-odpowiedz");

    const tekstyDoChatu = [
        "Tak, zgadzam się!",
        "Muszę się jeszcze zastanowić.",
        "Może jutro będzie lepsza okazja.",
        "Brzmi interesująco!",
        "To świetny pomysł!",
        "Nie jestem pewien.",
        "Tak, o której godzinie?",
        "Nie mogę teraz, przepraszam.",
        "Daj znać, kiedy będziesz gotowy."
    ];

    const addJolantaMessage = (message) => {
        const wiadomosc = document.createElement("div");
        wiadomosc.className = "wiadomosc jolanta";

        const obraz = document.createElement("img");
        obraz.src = "Jolka.jpg";
        obraz.alt = "Jolanta Nowak";
        obraz.className = "obrazek-uzytkownika";

        const tekst = document.createElement("p");
        tekst.textContent = message;

        wiadomosc.appendChild(obraz);
        wiadomosc.appendChild(tekst);
        kontenerChatu.appendChild(wiadomosc);
        
        kontenerChatu.scrollTop = kontenerChatu.scrollHeight;
    };

    const dodajWiadomosc = () => {
        const index = Math.floor(Math.random() * tekstyDoChatu.length);
        const losWiadomosc = tekstyDoChatu[index];

        const wiadomosc = document.createElement("div");
        wiadomosc.className = "wiadomosc krzysztof";

        const obraz = document.createElement("img");
        obraz.src = "Krzysiek.jpg";
        obraz.alt = "Krzysztof Łukasiński";
        obraz.className = "obrazek-uzytkownika";

        const tekst = document.createElement("p");
        tekst.textContent = losWiadomosc;

        wiadomosc.appendChild(tekst);
        wiadomosc.appendChild(obraz);
        kontenerChatu.appendChild(wiadomosc);
        
        kontenerChatu.scrollTop = kontenerChatu.scrollHeight;
    };


    wyslij.addEventListener("click", () => {
        const message = wejscie.value.trim();
        if (message) {
            addJolantaMessage(message);
            wejscie.value = "";
        }
    });

    losuj.addEventListener("click", () => {
        dodajWiadomosc();
    });
});

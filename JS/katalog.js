function changeKatalog(obj) {
    let cardHolder = document.querySelector("#card-holder");
    cardHolder.innerHTML = "";
    let dataType = obj.getAttribute("data-type");

    switch (dataType) {
        case "kreacyjne":
            cardHolder.innerHTML += `
                <h1>
                    Wzorce kreacyjne
                </h1>
                <p>
                    To źródło różnych mechanizmów tworzenia obiektów, zwiększających elastyczność i ułatwiających ponowne użycie kodu.
                </p>
                <div id="cards-kreacyjne">
                    <div class="card">
                        <h1>Metoda wytwórcza</h1>
                        <p>
                            Factory Method
                        </p>
                    </div>
                    <div class="card">
                        <h1>Fabryka abstrakcyjna</h1>
                        <p>
                            Abstract Factory
                        </p>
                    </div>
                </div>
            `
            break;
        case "strukturalne":
            cardHolder.innerHTML += `
                <h1>
                    Wzorce strukturalne
                </h1>
                <p>
                    Wyjaśniają sposób w jaki można składać obiekty i klasy w większe struktury, zachowując przy okazji elastyczność i efektywność tych struktur.
                </p>
            `
            break;
        case "behawioralne":
            cardHolder.innerHTML += `
                <h1>
                    Wzorce behawioralne
                </h1>
                <p>
                    Dotyczą algorytmów i podziału zadań pomiędzy obiektami.
                </p>
            `
            break;
    }
}
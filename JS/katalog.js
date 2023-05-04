function changeKatalog(obj) {
    let cardHolder = document.querySelector("#card-holder");
    cardHolder.innerHTML = "";
    let dataType = obj.getAttribute("data-type");

    let btns = document.querySelectorAll(".zmien-katalog");
    changeBtnColors(btns, obj);

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
                    <div onclick="location.replace('./WZORCE/factory-method.html')" class="card">
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
                    <div class="card">
                        <h1>Budowniczy</h1>
                        <p>
                            Builder
                        </p>
                    </div>
                    <div class="card">
                        <h1>Prototyp</h1>
                        <p>
                            Prototype
                        </p>
                    </div>
                    <div class="card">
                        <h1>Singleton</h1>
                        <p>
                            Singleton
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

function changeBtnColors(objs, clickedObj) {
    let classes = "zmien-katalog";
    for (let i = 0; i < objs.length; i++) {
        objs[i].setAttribute("class", classes);
    }

    clickedObj.setAttribute("class", classes + " active");
}
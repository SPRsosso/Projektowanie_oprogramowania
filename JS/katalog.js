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
                <div id="cards">
                    <div onclick="location.href = './WZORCE/factory-method.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/factory-method-mini.png?id=72619e9527893374b98a5913779ac167">
                        <h1>Metoda wytwórcza</h1>
                        <p>
                            Factory Method
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/abstract-factory.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/abstract-factory-mini.png?id=4c3927c446313a38ce77dfee38111e27">
                        <h1>Fabryka abstrakcyjna</h1>
                        <p>
                            Abstract Factory
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/builder.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/builder-mini.png?id=19b95fd05e6469679752c0554b116815">
                        <h1>Budowniczy</h1>
                        <p>
                            Builder
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/prototype.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/prototype-mini.png?id=bc3046bb39ff36574c08d49839fd1c8e">
                        <h1>Prototyp</h1>
                        <p>
                            Prototype
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/singleton.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/singleton-mini.png?id=914e1565dfdf15f240e766163bd303ec">
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
                <div id="cards">
                    <div onclick="location.href = './WZORCE/adapter.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/adapter-mini.png">
                        <h1>Adapter</h1>
                        <p>
                            Adapter
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/bridge.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/bridge-mini.png">
                        <h1>Most</h1>
                        <p>
                            Bridge
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/composite.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/composite-mini.png">
                        <h1>Kompozyt</h1>
                        <p>
                            Composite
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/decorator.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/decorator-mini.png">
                        <h1>Dekorator</h1>
                        <p>
                            Decorator
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/facade.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/facade-mini.png">
                        <h1>Fasada</h1>
                        <p>
                            Facade
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/flyweight.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/flyweight-mini.png">
                        <h1>Pyłek</h1>
                        <p>
                            Flyweight
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/proxy.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/proxy-mini.png">
                        <h1>Pełnomocnik</h1>
                        <p>
                            Proxy
                        </p>
                    </div>
                </div>
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
                <div id="cards">
                    <div onclick="location.href = './WZORCE/chain-of-responsibility.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/chain-of-responsibility-mini.png">
                        <h1>Łańcuch zobowiązań</h1>
                        <p>
                            Chain of Responsibility
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/command.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/command-mini.png">
                        <h1>Polecenie</h1>
                        <p>
                            Command
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/iterator.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/iterator-mini.png">
                        <h1>Iterator</h1>
                        <p>
                            Iterator
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/mediator.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/mediator-mini.png">
                        <h1>Mediator</h1>
                        <p>
                            Mediator
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/memento.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/memento-mini.png">
                        <h1>Pamiątka</h1>
                        <p>
                            Memento
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/observer.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/observer-mini.png">
                        <h1>Obserwator</h1>
                        <p>
                            Observer
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/state.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/state-mini.png">
                        <h1>Stan</h1>
                        <p>
                            State
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/strategy.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/strategy-mini.png">
                        <h1>Strategia</h1>
                        <p>
                            Strategy
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/template-method.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/template-method-mini.png">
                        <h1>Metoda szablonowa</h1>
                        <p>
                            Template Method
                        </p>
                    </div>
                    <div onclick="location.href = './WZORCE/visitor.html'" class="card">
                        <img src="https://refactoring.guru/images/patterns/cards/visitor-mini.png">
                        <h1>Odwiedzający</h1>
                        <p>
                            Visitor
                        </p>
                    </div>
                </div>
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
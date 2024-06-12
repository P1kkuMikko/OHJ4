function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function muunna() {
    var valinta = document.getElementById("vaihtoehdot").value;
    var lampotila = document.getElementById("input").value;
    var vastaus = document.getElementById("vastaus");

    if (lampotila === "" || isNaN(lampotila)) {
        vastaus.textContent = "Virhe: Syötä luku!";
        return;
    }

    lampotila = parseFloat(lampotila);

    if (valinta === "celsiusToFahrenheit" && lampotila < -273.15) {
        vastaus.textContent = "Virhe: Lämpötila ei voi olla pienempi kuin absoluuttinen nollpiste (-273.15 C)";
        return;
    }

    if (valinta === "fahrenheitToCelsius" && lampotila < -459.67) {
        vastaus.textContent = "Virhe: Lämpötila ei voi olla pienempi kuin absoluuttinen nollpiste (-459.67 F)";
        return;
    }

    var tulos;
    if (valinta === "celsiusToFahrenheit") {
        tulos = celsiusToFahrenheit(lampotila);
    } else {
        tulos = fahrenheitToCelsius(lampotila);
    }

    if (document.getElementById("1desi").checked) {
        tulos = tulos.toFixed(1);
    } else if (document.getElementById("2desi").checked) {
        tulos = tulos.toFixed(2);
    } else if (document.getElementById("3desi").checked) {
        tulos = tulos.toFixed(3);
    } else {
        tulos = Math.round(tulos);
    }

    vastaus.textContent = "Tulos: " + tulos;
}
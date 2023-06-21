function convertToFahrenheit() {
    // ambil nilai celcius terus hitung nilai fahrenheitnya
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;

    // display nilai dan keterangannya
    document.getElementById("fahrenheitInput").value = fahrenheit;
    document.getElementById("labelNote").innerHTML = "Celcius ke Fahrenheit";

    // display cara kalkulasi
    var note = celsius + "°C * (9/5) + 32 = " + fahrenheit + "°F";
    document.getElementById("noteOutput").value = note;

    // display dan hide section cara konversinya
    var sectionC = document.getElementById("KeteranganCelciusSection");
    sectionC.style.display = 'block';

    var sectionF = document.getElementById("KeteranganFahrenheitSection");
    sectionF.style.display = 'none';
  }

  function convertToCelsius() {
    // ambil nilai fahrenheit terus hitung nilai celciusnya
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5/9;

    // display nilai dan keterangannya
    document.getElementById("celsiusInput").value = celsius;
    document.getElementById("labelNote").innerHTML = "Fahrenheit ke Celcius";

    // display cara kalkulasi
    var note = "(" + fahrenheit + "°F - 32) * (5/9) = " + celsius + "°C";
    document.getElementById("noteOutput").value = note;

    // display dan hide section cara konversinya
    var sectionC = document.getElementById("KeteranganCelciusSection");
    sectionC.style.display = 'none';

    var sectionF = document.getElementById("KeteranganFahrenheitSection");
    sectionF.style.display = 'block';
  }

  function resetInputValue() {
    //reset semua value dan hide section cara konversi
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("celsiusInput").value = "";
    document.getElementById("labelNote").innerHTML = "";
    document.getElementById("noteOutput").value = "";

    var sectionC = document.getElementById("KeteranganCelciusSection");
    sectionC.style.display = 'none';

    var sectionF = document.getElementById("KeteranganFahrenheitSection");
    sectionF.style.display = 'none';
  }
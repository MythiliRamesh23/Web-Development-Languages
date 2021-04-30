function card() {
        var visa = document.getElementById('visa');
        var master = document.getElementById('master');
        var card = document.getElementById('card');
        var logo = document.getElementById('logo');
        var container = document.getElementById('container');
        if (visa.checked) {
            card.style.backgroundColor = "black";
            logo.src = "https://i.hizliresim.com/Lx4G72.png";
            logo.style.backgroundColor = "transparent";
            container.style.borderColor = "black";
        }
        if (master.checked) {
            card.style.backgroundColor = "blue";
            logo.src = "https://i.hizliresim.com/rqCMI3.png";
            container.style.borderColor = "rgb(70, 179, 252)";
        }
    };

    function cardNumber() {
        var number = document.getElementById("cardNumber").value;
        number = number.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

        document.getElementById("displayNumber").innerHTML = number.slice(0, 4) + " " + number.slice(4, 8) + " " + number.slice(8, 12) + " " + number.slice(12, 16);
    };

    function cardName() {
        var name = document.getElementById("cardName").value;
        name = name.toUpperCase();
        document.getElementById("displayName").innerHTML = name;
    };

    function cardSurname() {
        var surname = document.getElementById("cardSurname").value;
        surname = surname.charAt(0);
        surname = surname.toUpperCase();
        document.getElementById("displaySurname").innerHTML = surname + ".";
    };

    function cardMm() {
        var mm = document.getElementById("mm").value;
        document.getElementById("displayMm").innerHTML = mm;
    };

    function cardYy() {
        var yy = document.getElementById("yy").value;
        document.getElementById("displayYy").innerHTML = yy;
    };
const footer = document.createElement("template");
footer.innerHTML = `

<footer>
    <div id="footer-container">

        <div id="col-1">
            <h6 class="title">OFFICERS</h6>
            <p id="founders-names">
            <br>
                Connor Carpenter
                <br>
                Joshua Markle
                <br>
                Nicolas Crespo-Berker
            <p>
        </div>

        <div id="col-2">
            <img src="/img/tabb_logo.png" alt="PyClub Logo" class="pyclub-logo"></img>

            <p>
                THE GOVERNOR'S SCHOOL FOR SCIENCE AND TECHNOLOGY
            </p>
        </div>

        <div id="col-3">
            <h6 class="title">USEFUL LINKS</h6>

        </div>

    </div>
</footer>

`;

document.body.appendChild(footer.content);

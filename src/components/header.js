const header = document.createElement("template");
header.innerHTML = `

<header>
    <img src="../images/gsst_logo_white.png" alt="GSST Logo" class="logo"></img>
    <nav>
        <ul class="nav-links">
            <li><a href="./home.html">Home</a></li>
            <li><a href="./students.html">Students</a></li>
            <li><a href="./about.html">About</a></li>
        </ul>
    </nav>
</header>
`;

document.body.appendChild(header.content);

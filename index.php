<!DOCTYPE html>
<html lang="en">

<head>
    <?php
        include_once('./includes/header.php')
    ?>
</head>

<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div class="container">
            <a class="navbar-brand" href="./index.php">
                <img src="imagens_page/logos/logo planetarios do sul claro pronto.png" id="logoMenuPrincipal">
            </a>
            <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
                data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav nav ml-auto">
                    <li class="nav-item"><a href="./index.php?page=ficha-tecnica" class="nav-link"><span>Sobre</span></a>
                    </li>
                    <li class="nav-item"><a href="#" class="nav-link"><span>Novidades</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <?php
        
        // Verifique o parâmetro GET
        $pagina = isset($_GET['page']) ? $_GET['page'] : 'home';
        // Inclua o conteúdo da página específica
        include('page/' . $pagina . '.php');
    ?>
    

    <!-- loader -->
    <div id="ftco-loader" class="show fullscreen">
        <svg class="circular" width="48px" height="48px">
            <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
            <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                stroke="#F96D00" />
        </svg>
    </div>


    <script src="js/aos.js"></script>
    <script src="js/main.js"></script>
    <script src="js/default.js"></script>
</body>

</html>
<!DOCTYPE html>
<!-- Tells the browser this is an HTML5 document -->

<html lang="en">
<!-- Root of the HTML document, language set to English -->

<head>
    <!-- Contains meta info, styles, title (not visible on page) -->

    <meta charset="UTF-8">
    <!-- Supports all characters (letters, symbols, emojis, etc.) -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Makes layout responsive on mobile devices -->

    <title>Data Filteration</title>
    <!-- Title shown on browser tab -->

    <style>
        /* ================= GLOBAL CSS ================= */

        * {
            /* Selects ALL elements */
            margin: 0;              /* Removes default margin */
            padding: 0;             /* Removes default padding */
            box-sizing: border-box; /* Includes padding & border in width */
        }

        body {
            /* Styles for the whole page */
            font-family: Arial, sans-serif; /* Sets font */
            background-color: #f4f4f4;      /* Light gray background */
            padding: 40px;                  /* Space around content */
        }

        .filter {
            /* Main container box */
            max-width: 400px;   /* Max width of box */
            margin: auto;       /* Centers box horizontally */
            background: white;  /* White background */
            padding: 20px;      /* Inner spacing */
            border-radius: 8px; /* Rounded corners */
        }

        h2 {
            /* Heading style */
            text-align: center; /* Center text */
            margin-bottom: 15px;/* Space below heading */
        }

        input {
            /* Search input box */
            width: 100%;        /* Full width */
            padding: 10px;      /* Inner space */
            font-size: 16px;    /* Text size */
            margin-bottom: 15px;/* Space below input */
        }

        ul {
            /* Unordered list */
            list-style: none;   /* Removes bullets */
        }

        li {
            /* List item */
            padding: 8px;               /* Inner space */
            border-bottom: 1px solid #ddd; /* Bottom line */
        }
    </style>
</head>

<body>
    <!-- Visible content starts here -->

    <div class="filter">
        <!-- Main wrapper container -->

        <h2>Data Filteration</h2>
        <!-- Page heading -->

        <input
            type="text"              <!-- Input type is text -->
            id="getdata"             <!-- Used to access input in JS -->
            placeholder="Search here..."
            <!-- Text shown before typing -->
        >

        <ul id="items">
            <!-- List container -->

            <li class="li">JavaScript</li>
            <!-- List item -->

            <li class="li">CSS</li>
            <li class="li">Python</li>
            <li class="li">TypeScript</li>
            <li class="li">HTML</li>
            <li class="li">React</li>
            <li class="li">Node.js</li>
            <li class="li">Contact</li>
        </ul>
    </div>

    <script>
        /* ================= JAVASCRIPT ================= */

        // Select the input element using its ID
        const input = document.getElementById("getdata");

        // Select ALL elements that have class "li"
        const items = document.getElementsByClassName("li");

        // Add event listener to input
        // "keyup" means when user releases a key
        input.addEventListener("keyup", function () {

            // Get what user typed
            // Convert it to lowercase for case-insensitive search
            const filter = input.value.toLowerCase();

            // Loop through each list item
            for (let i = 0; i < items.length; i++) {

                // Get text of current list item
                // Convert it to lowercase
                const text = items[i].textContent.toLowerCase();

                // Check if list item text contains user input
                if (text.includes(filter)) {

                    // If match found → show item
                    items[i].style.display = "";

                } else {

                    // If no match → hide item
                    items[i].style.display = "none";
                }
            }
        });
    </script>
</body>
</html>

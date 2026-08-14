Excellent—this is one of the highest leverage upgrades you can make.

You’re turning the template from:

> “starter code”

into:

> **“embedded instruction”**

This reduces repeated explanations, reinforces concepts, and supports independent learning.

---

# 🧭 STARTER TEMPLATE v2 — WITH TEACHING COMMENTS

---

# 🧱 1. FOLDER STRUCTURE (WITH COMMENTS)

```plaintext
project-root/
│
├── index.html        # Main page (entry point of your site)
├── about.html        # Secondary page (duplicate structure to learn consistency)
├── contact.html      # Optional page (used later for forms)
│
├── css/
│   └── styles.css    # All styling goes here (NOT in HTML)
│
├── js/
│   └── script.js     # All JavaScript goes here (NOT in HTML)
│
└── data/             # Used later for JSON/data files
```

---

# 🧾 2. BASE HTML TEMPLATE (index.html WITH COMMENTS)

```html
<!DOCTYPE html>
<!-- Defines this document as HTML5 -->

<html lang="en">
<!-- Root element of the page -->

<head>
    <meta charset="UTF-8">
    <!-- Ensures proper text encoding -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Important for responsive design (Week 3+) -->

    <title>My Project</title>
    <!-- Title shown in browser tab -->

    <link rel="stylesheet" href="css/styles.css">
    <!-- Connects your CSS file (styling layer) -->
</head>

<body>

    <header>
        <!-- Top section of your site (usually navigation and title) -->

        <h1>My Project</h1>

        <nav>
            <!-- Navigation links between pages -->

            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>

            <!-- IMPORTANT:
                 These links must match your file names exactly -->
        </nav>
    </header>

    <main>
        <!-- Main content area of the page -->

        <section>
            <h2>Welcome</h2>
            <p>This is the main content area.</p>

            <!-- This content will change based on your project -->
        </section>
    </main>

    <footer>
        <!-- Bottom section (usually simple information) -->

        <p>&copy; 2026 My Project</p>
    </footer>

    <script src="js/script.js"></script>
    <!-- Connects your JavaScript file (behavior layer)
         This is placed at the bottom so HTML loads first -->

</body>
</html>
```

---

# 📄 3. SECONDARY PAGE TEMPLATE (about.html WITH COMMENTS)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>

    <link rel="stylesheet" href="css/styles.css">
    <!-- SAME CSS FILE → ensures consistent styling across pages -->
</head>

<body>

    <header>
        <h1>About</h1>

        <nav>
            <!-- Navigation should be IDENTICAL across all pages -->
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>About This Project</h2>
            <p>Information about the project.</p>

            <!-- This page reinforces:
                 structure consistency across multiple pages -->
        </section>
    </main>

    <footer>
        <p>&copy; 2026 My Project</p>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

---

# 🎨 4. BASE CSS (styles.css WITH COMMENTS)

```css
/* This file controls how your site LOOKS */
/* Do NOT put styling inside HTML (keep layers separate) */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;

    /* Removes default browser spacing */
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;

    /* Simple styling to make header visible */
}

nav a {
    color: white;
    margin-right: 1rem;
    text-decoration: none;

    /* Links should be readable and spaced */
}

main {
    padding: 1rem;

    /* Keeps content from touching edges */
}

footer {
    background-color: #eee;
    padding: 1rem;
    text-align: center;

    /* Simple footer styling */
}
```

---

# ⚙️ 5. BASE JS (script.js WITH COMMENTS)

```javascript
// This file controls how your site BEHAVES

console.log("JavaScript connected successfully.");

// If you see this message in the browser console,
// your JavaScript file is connected correctly.

// Later, you will:
// - respond to user actions
// - update content
// - manage state and data
```

---

# 🧭 OPTIONAL TRACK-SPECIFIC SNIPPETS (WITH COMMENTS)

---

## 🔹 Task App

```html
<section>
    <h2>Tasks</h2>

    <ul id="task-list">
        <!-- Tasks will be added here dynamically (Week 5+) -->
    </ul>
</section>
```

---

## 🔹 Dashboard / Resource Hub

```html
<section>
    <h2>Resources</h2>

    <div id="resource-container">
        <!-- Content can be added here dynamically later -->
    </div>
</section>
```

---

## 🔹 Product / Service Site

```html
<section>
    <h2>Products</h2>

    <div class="product-list">
        <!-- Each product can be displayed as a card -->
    </div>
</section>
```

---

# 🔑 STUDENT-FACING NOTE (Include This)

> This template is provided to help you get started.
>
> You are encouraged to:
>
> * modify it
> * expand it
> * improve it
>
> The goal is not to keep it the same—the goal is to understand how it works and build on it.

---

# 🧠 What You Just Created (Important)

This is no longer just a template.

It is:

> **A silent instructor embedded in the code**

---

# 🔥 What This Will Do For You

* reduce repeated explanations
* improve student independence
* standardize structure across submissions
* make debugging faster and clearer

---

# 🚧 Optional Next Step

We can now:

## 🔹 Add “Intent Comments” tied to specific weeks

(example: “You will modify this in Week 5…”)

OR

## 🔹 Create a “Student Setup Walkthrough”

(step-by-step onboarding)

---

But as it stands:

> This is an **excellent instructional artifact—ready to deploy**.

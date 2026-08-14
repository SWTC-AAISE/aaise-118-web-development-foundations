Excellent—this is a high-leverage artifact.

The goal here is **not to give them a “finished site”**.

It is to give them:

> **A clean, correct, scalable starting point that prevents early mistakes**

---

# 🧭 STARTER TEMPLATE v1 — BASE STRUCTURE

*(Applies to ALL project tracks)*

This is your **default template**.

Students can:

* use it directly
* or replicate it manually

---

# 🧱 1. FOLDER STRUCTURE

```plaintext
project-root/
│
├── index.html
├── about.html
├── contact.html   (optional but recommended)
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── data/          (used later in course)
```

---

# 🧠 Why This Matters

This structure:

* enforces separation of concerns
* prevents “everything in one file” chaos
* scales cleanly into later weeks

---

# 🧾 2. BASE HTML TEMPLATE (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

    <header>
        <h1>My Project</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>Welcome</h2>
            <p>This is the main content area.</p>
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

# 📄 3. SECONDARY PAGE TEMPLATE (about.html)

Students should duplicate structure (important concept).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

    <header>
        <h1>About</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>About This Project</h2>
            <p>Information about the project.</p>
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

# 🎨 4. BASE CSS (css/styles.css)

Keep this intentionally minimal.

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
}

nav a {
    color: white;
    margin-right: 1rem;
    text-decoration: none;
}

main {
    padding: 1rem;
}

footer {
    background-color: #eee;
    padding: 1rem;
    text-align: center;
}
```

---

# ⚙️ 5. BASE JS (js/script.js)

Minimal—just enough to prove connection.

```javascript
console.log("JavaScript connected successfully.");
```

---

# 🧭 OPTIONAL ADD-ONS (LIGHT VARIANTS PER TRACK)

You can optionally provide these as *separate files or snippets*.

---

## 🔹 For Task App

```html
<section>
    <h2>Tasks</h2>
    <ul id="task-list"></ul>
</section>
```

---

## 🔹 For Dashboard / Resource Hub

```html
<section>
    <h2>Resources</h2>
    <div id="resource-container"></div>
</section>
```

---

## 🔹 For Product Site

```html
<section>
    <h2>Products</h2>
    <div class="product-list"></div>
</section>
```

---

# 🔑 INSTRUCTOR GUIDANCE (CRITICAL)

Tell students explicitly:

> “This is a starting point—not a finished solution.”

---

# 🧠 What This Template Prevents

* broken navigation
* missing file connections
* inline CSS/JS chaos
* poor folder structure
* early frustration

---

# 🔥 What This Enables

* consistent debugging across students
* faster onboarding
* clean progression through assignments
* easier grading

---

# 🧭 HOW TO PRESENT THIS IN SCHOOLOGY

Title it:

> **Starter Template (Optional)**

Add note:

> “You may use this template or create your own structure.
> Using this template may reduce early setup issues.”

---

# 🧠 Subtle Concept Being Installed

> “Good systems start with good structure.”

---

# 🚧 Next Step (Optional but HIGH VALUE)

We can now create:

## 🔹 Starter Template v2 — With Comments (Teaching Version)

* inline explanations
* learning cues

OR

## 🔹 Track-Specific Starter Packs (light customization)

OR

## 🔹 A “Setup Walkthrough” mini-guide for students

---

# 🔑 Final Thought

This template does something very important:

> It removes friction without removing thinking.

---

If you want, next we can:

* add **teaching comments into this template (very powerful)**
* or build **Assignment 1 instructions that reference this template directly**

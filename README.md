# ⚡ ResuMate — ATS Resume Formatter

**ResuMate** — *Your Resume’s Best Mate* — is a tiny, zero-dependency web app that instantly cleans and formats resume text so it becomes ATS-friendly.  
It runs fully in the browser (client-side), requires **no accounts** and **no backend**. Paste your resume text, click **Format**, then copy or download the cleaned version.

---

## 🔥 Highlights
- ✅ Paste-only input (no file upload) — fast and privacy-friendly  
- 🧹 Cleans bullets, weird symbols, repeated spaces & stray characters  
- 🧭 Normalizes common section headings (Summary, Experience, Education, Skills)  
- 📋 One-click **Copy** and **Download** (plain `.txt`)  
- ☕ Built-in **Buy Me a Coffee** widget for support  
- 🛠 No frameworks — pure HTML, CSS, and vanilla JavaScript

---

## ⚙️ Project Structure
```

resumate/
├── index.html    # UI & markup
├── style.css     # Styling (glass + purple accent)
└── script.js     # Cleaning & export logic (paste-only)

````

---

## 💻 Local Usage / Quick Start
1. Clone the repo:
```bash
git clone https://github.com/<your-username>/resumate.git
cd resumate
````

2. Open `index.html` in your browser (double-click or use a local server).

   * Optional local server (recommended for consistent behavior):

```bash
# Python 3
python -m http.server 5500
# then open http://localhost:5500
```

3. Paste your resume text into the input area → click **✨ Format Resume** → copy or download the cleaned resume.

---

## 📄 What the Cleaner Does (summary)

* Replaces non-ASCII/fancy symbols with plain equivalents (bullets → `-`)
* Collapses excessive whitespace and repeated newlines
* Removes emoji/unreadable characters that break ATS parsing
* Standardizes common headings (e.g. `Objective` → `Professional Summary`)
* Trims leading/trailing whitespace and prevents accidental formatting artifacts

---

## 🧩 Example (before → after)

**Before (user paste):**

```
John Doe
✦ Full-Stack Dev • github.com/johndoe

Experience
• Built a thing → used React, Node.
• Increased perf by 200% ✨
```

**After (ResuMate output):**

```
John Doe

Professional Summary
Full-Stack Developer

Experience
- Built a thing using React, Node.
- Increased performance by 200%.
```

---

## 🚀 Deploy

[ResuMate](https://resumate-zeta.vercel.app/)

---

## ☕ Support & Feedback

If ResuMate helped you, consider supporting with a coffee:
[https://buymeacoffee.com/sharkspidy](https://buymeacoffee.com/sharkspidy)

If you find issues or want features (Markdown export, PDF output, section auto-detection), open an issue or submit a PR.

---

**Built with ❤️ — ResuMate ⚡**


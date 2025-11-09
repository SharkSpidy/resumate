const fileInput = document.getElementById("fileInput");
const resumeInput = document.getElementById("resumeInput");
const formatBtn = document.getElementById("formatBtn");
const outputBox = document.querySelector(".output-box");
const outputText = document.getElementById("outputText");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

formatBtn.addEventListener("click", () => {
  const inputText = resumeInput.value.trim();

  if (!inputText && !fileInput.files.length) {
    alert("Please upload or paste your resume first!");
    return;
  }

  if (inputText) {
    const cleaned = cleanResume(inputText);
    showOutput(cleaned);
  } else {
    const file = fileInput.files[0];
    readFile(file).then((text) => {
      const cleaned = cleanResume(text);
      showOutput(cleaned);
    });
  }
});

copyBtn.addEventListener("click", () => {
  outputText.select();
  document.execCommand("copy");
  alert("Copied cleaned resume!");
});

downloadBtn.addEventListener("click", () => {
  const blob = new Blob([outputText.value], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ResuMate_Cleaned_Resume.txt";
  link.click();
});

function cleanResume(text) {
  let cleaned = text
    .replace(/[\u2022•✔✓●⭐➡️→]/g, "-")
    .replace(/\s{2,}/g, " ")
    .replace(/\n{2,}/g, "\n\n")
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/Objective|Profile|Summary/gi, "Professional Summary")
    .replace(/Experience|Work History/gi, "Experience")
    .replace(/Education/gi, "Education")
    .replace(/Skills/gi, "Skills");

  return cleaned.trim();
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function showOutput(cleaned) {
  outputBox.classList.remove("hidden");
  outputText.value = cleaned;
  outputBox.scrollIntoView({ behavior: "smooth" });
}

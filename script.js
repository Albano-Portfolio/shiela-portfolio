// Optional: point the Resume link to a PDF in the repo (if you upload it)
document.getElementById("resumeLink").addEventListener("click", (e) => {
  const hasResume = false; // set true after you upload "resume.pdf" to the repo
  if (!hasResume) {
    e.preventDefault();
    alert("Upload Shiela's resume PDF to the repo as 'resume.pdf', then set hasResume=true in script.js.");
  }
});

// Optional: second Power BI report link
const pbiLink2 = document.getElementById("pbiLink2");
pbiLink2.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Add your second Power BI 'Publish to web' link, then update pbiLink2 href in index.html.");
});

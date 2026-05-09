(() => {
  const btnHalo = document.getElementById("btn-halo");
  const btnCopy = document.getElementById("btn-copy");
  const status = document.getElementById("status");

  const showStatus = () => {
    if (!status) return;
    status.style.display = "inline-flex";
  };

  btnHalo?.addEventListener("click", () => {
    showStatus();
    alert("CI/CD Berhasil! Halaman ini sudah ter-deploy.");
  });

  btnCopy?.addEventListener("click", async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showStatus();
      btnCopy.textContent = "Tersalin";
      window.setTimeout(() => (btnCopy.textContent = "Copy URL halaman"), 1200);
    } catch {
      prompt("Copy manual URL ini:", url);
    }
  });
})();


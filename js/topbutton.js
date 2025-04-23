  const btn = document.getElementById("backToTop");

  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

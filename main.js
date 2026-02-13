const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

// Product Showcase Interaction
const mainImg = document.querySelector(".showcase-main .main-img");
const mainTitle = document.querySelector(".showcase-info h3");
const mainDesc = document.querySelector(".showcase-info p");
const galleryItems = document.querySelectorAll(".gallery-item");

if (mainImg && galleryItems.length > 0) {
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const title = item.querySelector("span").innerText;
      
      // Update Main Image
      mainImg.style.opacity = "0";
      setTimeout(() => {
        mainImg.src = img.src;
        mainImg.alt = img.alt;
        mainImg.style.opacity = "1";
        
        // Update Text Context (Optional - simplistic approach)
        if (title.includes("纳米硒制备")) {
           mainTitle.innerText = "纳米硒制备工艺";
           mainDesc.innerHTML = "采用常温还原法制备，<span class='highlight'>粒径均一</span>，稳定性优于胶体金。";
        } else if (title.includes("粒径")) {
           mainTitle.innerText = "粒径分布与电位";
           mainDesc.innerHTML = "Zeta 电位分布集中，保证试剂盒批次间<span class='highlight'>高度一致性</span>。";
        } else if (title.includes("POCT")) {
           mainTitle.innerText = "POCT 场景应用";
           mainDesc.innerHTML = "适用于<span class='highlight'>救护车、急诊、社区</span>等多场景快速检测。";
        } else {
           mainTitle.innerText = "纳米硒心梗早检试纸条";
           mainDesc.innerHTML = "集成纳米硒标记技术与 H-FABP 早期探针，实现 <span class='highlight'>0.5h</span> 窗口期检测。";
        }
      }, 300);
    });
  });
}

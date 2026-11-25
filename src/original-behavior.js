(() => {
  "use strict";
  const menu = document.querySelector(".menu-toggle"),
    nav = document.querySelector("#nav-links");
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }
  });
  document.querySelector("#year").textContent = new Date().getFullYear();
  const back = document.querySelector("#back-top");
  window.addEventListener(
    "scroll",
    () => back.classList.toggle("show", window.scrollY > 450),
    { passive: true },
  );
  back.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        }),
      { threshold: 0.09 },
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  } else
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  const form = document.querySelector("#enquiry-form");
  document.querySelectorAll("[data-product]").forEach((link) =>
    link.addEventListener("click", () => {
      form.elements.product.value = link.dataset.product;
    }),
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.querySelector("#form-status");
    if (!form.reportValidity()) {
      status.textContent = "Please complete the required fields correctly.";
      return;
    }
    const data = new FormData(form);
    const subject = "Ramsuns Hydraulics Enquiry - " + data.get("product");
    const body = [
      "Name: " + data.get("name"),
      "Email: " + data.get("email"),
      "Phone: " + (data.get("phone") || "Not provided"),
      "Product: " + data.get("product"),
      "",
      "Requirement:",
      "" + data.get("message"),
    ].join("\n");
    status.textContent =
      "Opening your email application. Please review and send the email to complete your enquiry.";
    window.location.href =
      "mailto:info.ramsunshydraulics@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  });
})();

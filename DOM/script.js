// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList = "flex-ctr";

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.background = "var(--top-menu-bg)";
topMenuEl.classList = "flex-around";

for (let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i];
  const linkEl = document.createElement("a");
  linkEl.href = link.href;
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
}

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("#top-menu a");
const showingSubMenu = false;

topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.NAV !== "a") {
    return;
  }
  if (evt.target.NAV === "active") {
    evt.target.NAV.remove("active");
    const showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  evt.target.NAV.classList.add("active");
  const linkData = menuLinks.find(function (linkObj) {
    return linkObj.text === evt.target.textContent;
  });
  showingSubMenu = "subLinks" in linkData;
});

// console.log(topMenuLinks);

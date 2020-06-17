const toggleScheme = (Obj, isDark = false) => {
  // Set <HTML> attr data-dark to true|false depends on selected mode
  document.documentElement.setAttribute("data-dark", isDark);

  // Store selected mode
  localStorage.setItem("isDark", isDark);

  // Change Classes base on given Object with classes
  let element, from, to;

  for (let x in Obj) {
    // Get which mode is
    if (isDark) {
      from = element = x;
      to = Obj[x];
    } else {
      element = from = Obj[x];
      to = x;
    }

    // Toggle Classes
    document.querySelectorAll(element).forEach((el) => {
      el.classList.remove(from);
      el.classList.add(to);
    });
  }
};

const toggleDarkMode = (
  togglor,
  preferdOption = isSystemDark(),
  classesObject
) => {
  // On load
  toggleScheme(classesObject, preferdOption);

  // On cahnge
  if (togglor) {
    togglor.checked = preferdOption;
    togglor.addEventListener("change", (e) => {
      toggleScheme(classesObject, e.target.checked);
    });
  }
};

// Usage

// Check whether there's selected mode stored in localstorage or not
const isDark = () => (localStorage.getItem("isDark") == "true" ? true : false);

// Check for system dark mode
const isSystemDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;

let classesObject = {
  "text-light": "text-dark",
  "bg-white": "bg-black",
  "bg-light": "bg-dark",
  "navbar-light": "navbar-dark",
  "table-light": "table-dark",
  "btn-light": "btn-dark",
};

togglor = document.querySelector("#dark-mode-togglor-id-or-whatever");

toggleDarkMode(togglor, isSystemDark(), classesObject);

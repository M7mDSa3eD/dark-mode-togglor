# Dark Mode Toggle

### Usage

##### You use this to switch manually.
``const isDark = () => (localStorage.getItem("isDark") == "true" ? true : false);``

##### And this to follow the system.
``const isSystemDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;``

#### Those are the classes that gonna toggle with eath mode 
"NOTE" if you gonna use ``text-dark``in ``light`` mode then you should add it to this ``classesObject`` to prevent issue.
```js

let classesObject = {
  "text-light": "text-dark",
  "bg-white": "bg-black",
  "bg-light": "bg-dark",
  "navbar-light": "navbar-dark",
  "table-light": "table-dark",
  "btn-light": "btn-dark",
};
```

##### Get the togglor element 
``togglor = document.querySelector("#dark-mode-togglor-id-or-whatever");``

##### Run the function 
1. Pointer ( togglor element )
2. Which option ( maunally, system )
3. Classes object

``toggleDarkMode(togglor, isSystemDark(), classesObject);``
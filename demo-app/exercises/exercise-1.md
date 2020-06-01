# Exercise 1

1. Create a new Vue project, using the Vue CLI, named car-tool-app.

```bash
vue create car-tool-app
```

Note: DO NOT CREATE THIS INSIDE OF DEMO APP.

2. Copy the `reset.css` and `site.css` from `demo-app` into the new project. Be sure to link the stylesheets into the home page file.

3. Delete the `App.vue` and `components` folder. Empty the `main.js` file.

4. Create a new Vue instance. Add a property to the data model named `headerText`. Set the value to be "Car Tool".

5. Using the `headerText` property, construct a template similar to this:

```html
<div>
  <header>
    <h1>Car Tool</h1>
  </header>
</div>
```

6. Ensure it works.
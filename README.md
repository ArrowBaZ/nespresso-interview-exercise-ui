# 📦 Nespresso UI Exercise

## The exercise

Inside `src/template.html` you will find some simple markup, you have to style it according to what you can see in `example-desktop.png` and `example-mobile.png`.

We want to add the following characteristics to the template:

### Both mobile and desktop
- Animate the waves at the bottom of the page, simulating the ocean.
- When you click the capsule, you have to fetch data from `https://dummyjson.com/products/{id}` (where `id` can be any integer from 1 to 50) and display the data in the page. Each time the capsule is clicked you should show a different product, randomly.
- You should limit the clicking of the capsule to only fetch data at most once per second (so if you click a lot of times in quick succession, it should only fetch data once per second).
- You may not change the DOM via JS (adding new classes, new elements, etc...) except for changing the contents of the element with ID `fetched-data`.

### Desktop
- When you hover the cursor over the capsule, the Coffee Specs information area should be visible (if the capsule has not yet been clicked then no information will be available yet).
- Both the capsule and Coffee Specs areas should be stay highlighted when the cursor stays in them (as you can see in the `example-desktop.png`).

### Mobile
- When tapping the capsule, only the Coffee Specs area should be highlighted with a dark background, but not the capsule.
- If the Coffee Specs area is tapped, it should remain visible, only by tapping outside the capsule or Coffee Specs should it be hidden.

Feel free to do it how you want, just try to follow these rules:

- Markup must not be edited (HTML). You can only create / modify CSS or JS files.
- The exercise must be responsive.

## Installation

```bash
npm i
```

### Development server

```bash
npm start
```

You can view the development server at http://localhost:8080.

### Production build

```bash
npm run build
```

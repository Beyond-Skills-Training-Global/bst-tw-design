# bst-tw-design

Demo:

<https://beyond-skills-training-global.github.io/bst-tw-design/>

## Conventions when doing stuff

- Respect DRY principle (don't repeat yourself).

### Tailwind

- Don't add anything to css file unless it sounds like a very good idea.
- Use arbitrary values instead of classes in css
  - e.g.: `bg-[image:linear-gradient(rgba(0,0,0,1)_0%,rgba(0,0,0,0.95)_10%,rgba(64,64,64,0.3),rgba(0,0,0,1)_97%),url('../img/hero-boxer.jpg')]`
  - e.g.: `[word-spacing:0.5rem]`
- Think twice about putting something to `tailwind.setting.js`. Most of the time, arbitrary values is the answer.
- For gradients, use tailwind (or arbitrary value) gradients. Don't bring images with gradients (meaning simple gradients).
- Try to not duplicate code and data.
- For repetitive data, use templating (there has to be balance).
- For word-spacing use ex unit: [word-spacing:0.8ex] (horizontal size of font)

### Images

- lazy load images (`loading="lazy"`)
- Check if the image is in well suited format (svg, png, jpg).
  - svg is prefared, but it doesn't go well with screenshots, photos, etc.
- If the svg is used multiple times, create a file.
- If the svg is used one time only and is not super long, use inline svg
- When using inline svgs. use classes for colors.

-

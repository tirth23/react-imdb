## Create Your Project Folder
```
npm create vite@latest your-project-name -- --template react
cd your-project-name
npm install
npm run dev
```

## Install Tailwind CSS and Other Dependencies
```
npm install -D tailwindcss postcss autoprefixer
```

### -D installs the package as a development dependency. 

## why tailwind is installed as a dev dependency?
### Build-time Usage: Tailwind CSS operates primarily at build time. When you use Tailwind, you aren't typically deploying the Tailwind library itself as you would with a library like jQuery or Lodash. Instead, you use Tailwind's utility classes in yourmarkup, but the actual CSS that Tailwind generates based on your configuration and usage needs to be processed (compiled and purged) during the build step before it goes to production.
### CSS Generation and Purging: Tailwind processes your CSS using your build configuration to generate the necessary styles. During this process, it also purges unused styles. This minimizes the CSS bundle size by including only the styles you actually use in your production CSS. This step is crucial given the vast number of utility classes Tailwind provides.
### Development Tool: Given that all of Tailwind’s processing occurs during development—when you’re writing and building your project—it is categorized as a tool that aids development. The final output is the minimized, production-ready CSS file, and not the Tailwind framework or its build tools themselves

## Post CSS 
### It's a powerful tool that allows for the transformation of CSS with JavaScript. This means you can write future CSS and it compiles into CSS understood by most browsers today. PostCSS is a tool for transforming CSS with JavaScript plugins. It's widely used in modern web development to automate CSS processes, such as adding vendor prefixes, nesting CSS rules, or transforming newer CSS features into more compatible forms for older browsers. PostCSS is often integrated into tools like Webpack, Vite, or Gulp in modern JavaScript projects.

## Autoprefixer
### which is a PostCSS plugin to parse CSS and add vendor prefixes to CSS rules. Autoprefixer is a PostCSS plugin that automatically adds vendor prefixes to your CSS rules to ensure cross-browser compatibility. It processes your CSS, analyzes the code, and adds the necessary prefixes based on the target browsers you define.
### For example, CSS properties like transform, flexbox, and grid often require prefixes such as -webkit-, -moz-, or -ms- for certain older browsers. Instead of manually adding these prefixes, Autoprefixer handles it for you, keeping your CSS clean and reducing the chance of errors.
### Without Autoprefixer:
```
.example {
  display: flex;
}
```
### With Autoprefixer:
```
.example {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
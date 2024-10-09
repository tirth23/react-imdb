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
```

## Generate the Configuration Files
### This command generates tailwind.config.js and postcss.config.js configuration files, also known as config files. They help you interact with your project and customize everything.
```
npx tailwindcss init -p
```

## Configure Source Paths
### Add the paths to all of your template files in your tailwind.config.js file. Template files include HTML templates, JavaScript components, and other source files that contain Tailwind class names. This is to make sure that vanilla CSS is generated for the corresponding elements.
> tailwind.config.js
```
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

## Add Tailwind Directives to Your CSS
### Tailwind directives are custom Tailwind-specific statements that instruct CSS how to behave
### @tailwind base: This directive adds Tailwind's basic foundational styles to your project. These are essential styles that provide consistent styling baseline across all browsers, similar to what a CSS reset does.
### @tailwind components: This injects any predefined component styles from Tailwind. These can include styles defined by Tailwind and any additional styles from plugins you might be using.
### @tailwind utilities: This directive adds utility classes that Tailwind provides. Utility classes are the core of Tailwind's design system, allowing you to style elements directly in your HTML by applying utility classes that represent specific CSS properties.
### Remove the default CSS from index.css
> ./src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### restart dev server
```
npm run dev
```

## TMDB
### sigup with TMDB and generate an API key
### https://api.themoviedb.org/3/trending/movie/day?api_key=api_key&language=en-US&page=1

## Axios
### Axios is a popular JavaScript library used to make HTTP requests from web browsers or Node.js. It helps you interact with web APIs to fetch or send data. Think of Axios as a tool that helps your web application talk to servers easily.
### Axios uses promises, which allow you to handle asynchronous operations in a cleaner and more readable way.
### It automatically transforms JSON data, making it easy to work with APIs that send or receive JSON.
### Axios includes features like request and response interception, automatic request retries, and the ability to cancel requests.


795a170375bd0d0eea11dcb26e4d1813

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTVhMTcwMzc1YmQwZDBlZWExMWRjYjI2ZTRkMTgxMyIsIm5iZiI6MTcyODQ3MzI4Ni41MDQwMywic3ViIjoiNjcwNjY2MDE1OTdjMTI2ZjA3ZGRiYThhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gx2CD5D7vUbH8xGjDSHyIku2sO_qL8e7nB6GnHy33AI
# Mokshith UI

A lightweight, copy-paste UI component library built with React and Tailwind CSS.

## 🚀 Features

- **Copy-Paste UI Components**: No installation required, just copy the code you need
- **Tailwind CSS Powered**: Built with Tailwind for beautiful, responsive designs
- **Dark Mode Support**: Built-in dark mode for all components
- **Fully Responsive**: Works seamlessly across all device sizes
- **Accessible Components**: Designed with accessibility in mind
- **Zero Dependencies**: Minimal impact on your bundle size

## 📋 Components

Mokshith UI includes a variety of components:

- Buttons
- Cards
- Alerts
- Badges
- Inputs
- Modals
- And more coming soon!

## 🛠️ Getting Started

### Prerequisites

- React 16.8+ (for Hooks support)
- Tailwind CSS 2.0+

### Installation

Mokshith UI doesn't require a package installation. Instead, you can browse the components and copy the code directly into your project.

1. **Set up a React project with Tailwind CSS**

```bash
# Create a new React project (if needed)
npx create-react-app my-app
cd my-app

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. **Configure Tailwind CSS**

Update your `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can customize your theme here
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class strategy
}
```

3. **Add Tailwind directives to your CSS**

Add the following to your `src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Browse components and copy code**

Visit our component library, find the components you need, and copy the code directly into your project.

## 🎨 Customization

You can customize the components by:

1. **Modifying the Tailwind theme**:
   Update your `tailwind.config.js` to change colors, spacing, typography, etc.

2. **Component-level customization**:
   Modify the component code directly to add or change functionality.

3. **Using the `className` prop**:
   Most components accept a `className` prop for additional styling.

## 🌙 Dark Mode

Mokshith UI supports dark mode out of the box. To toggle dark mode, you can add a theme switch to your application:

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      {/* Your app content */}
    </div>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Request features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 📬 Contact

Have questions or feedback? Reach out to us at webdeveloper.srinu9@gmail.com or visit our https://mokshit-ui.vercel.app/ web page.

---

Built with ❤️ by the Mokshith UI Team
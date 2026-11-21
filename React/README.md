# React + TypeScript + React-Bootstrap Starter

A minimal, lightning-fast workspace configured for learning **React 19** with **TypeScript** and **React-Bootstrap**.

---

## 🚀 Getting Started

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`) in your browser.

---

## 📁 Project Structure

```
WebDev/
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── src/
    ├── main.tsx               # App root mounting & Bootstrap CSS import
    ├── App.tsx                # Main container component & overview
    ├── index.css              # Minimal global styles
    ├── App.css                # Optional custom utility styles
    ├── vite-env.d.ts          # Vite client types
    └── Component/
        ├── Parent.tsx         # Parent component (manages state & passes props)
        └── Child.tsx          # Child component (typed props interface & events)
```

---

## 💡 Quick TypeScript + React Cheat Sheet

### 1. Defining Component Props
In `src/Component/Child.tsx`:
```tsx
interface ChildProps {
  title: string
  count: number
  onIncrement: () => void
}

export default function Child({ title, count, onIncrement }: ChildProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>+1</button>
    </div>
  )
}
```

### 2. Typing State with `useState`
In `src/Component/Parent.tsx`:
```tsx
import { useState } from 'react'

const [count, setCount] = useState<number>(0)
const [text, setText] = useState<string>('')
```

### 3. Using React-Bootstrap Components
Import components directly from `'react-bootstrap'`:
```tsx
import { Button, Card, Container, Row, Col, Alert } from 'react-bootstrap'

<Button variant="primary">Click Me</Button>
<Card>
  <Card.Body>Content here</Card.Body>
</Card>
```

---

## 🛠️ Available Scripts

- **`npm run dev`**: Launches Vite dev server with fast refresh.
- **`npm run build`**: Runs TypeScript type-checking (`tsc`) and builds for production.
- **`npm run preview`**: Previews the production build locally.

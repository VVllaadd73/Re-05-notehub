// src/main.tsx

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'modern-normalize/modern-normalize.css'
import './index.css'
import App from './components/App/App.tsx'

createRoot(document.getElementById('root')!).render(
//   <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
//   </StrictMode>,
)

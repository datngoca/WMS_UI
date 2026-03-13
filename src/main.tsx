import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import "./assets/scss/global.scss"

// Khởi tạo Query Client
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 60000, // Dữ liệu được làm mới trong 1 phút
      gcTime: 1000 * 60 * 5, // Giữ trong kho đệm 5 phút trước khi xoá
      retry: 1, // Nếu lỗi thì thử lại 1 lần duy nhất
    }
  }
})
// Render
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)

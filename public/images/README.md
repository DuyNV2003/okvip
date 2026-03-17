# Thư mục chứa hình ảnh

Bạn có thể tải các hình ảnh từ máy tính của mình lên thư mục này để sử dụng trong dự án.

## Cách sử dụng:
1. Tải ảnh lên thư mục `public/images` này (ví dụ: `background.jpg`, `resort.png`).
2. Trong code (ví dụ file `app/page.tsx`), bạn gọi ảnh bằng đường dẫn bắt đầu bằng `/images/`:

```tsx
<Image 
  src="/images/background.jpg" 
  alt="Mô tả ảnh" 
  fill 
/>
```

*Lưu ý: Không cần viết chữ `public` trong đường dẫn `src`.*

import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: ' Chào mừng đến với các máy chủ chính thức',
  description: 'Là những máy chủ uy tín nhất hiện nay, bảo mật nạp rút nhanh',
  icons: {
    icon: '/favicon.ico', // Bạn có thể đổi thành '/images/logo.png' hoặc đường dẫn ảnh của bạn
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

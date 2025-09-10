import type { AppProps } from "next/app";
import "../global.css"; // import Tailwind and global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Component {...pageProps} />
    </div>
  );
}

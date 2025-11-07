import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Yvan Tongo — Agriculture & Transformation',
  description: 'Manifeste, articles, projets. L’agriculture n’est pas un héritage, c’est une mission.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="fr"><body>{children}</body></html>)
}

export const metadata = {
  title: "TEDDY SILENCE MODE — Triathlon Coaching",
  description: "Say nothing. Dominate everything.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

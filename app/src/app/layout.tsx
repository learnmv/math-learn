export const metadata = {
  title: 'Math Learn - 6th Grade CCSS',
  description: 'California Common Core 6th Grade Math Learning Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

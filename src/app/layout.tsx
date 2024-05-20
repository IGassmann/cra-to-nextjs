export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Web site created..." />
        <title>React App</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}

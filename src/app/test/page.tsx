import Link from 'next/link'

export default async function Test() {
  const number = Math.floor(Math.random() * 100)

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <div>
        <Link className="underline" href="/test">
          Link to "/test" page
        </Link>
      </div>
      <div>
        Page number <span>{number}</span>
      </div>
      <div>
        <Link className="underline" href="/">
          Link to "/"" page (index)
        </Link>
      </div>
    </main>
  )
}

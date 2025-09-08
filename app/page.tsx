import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-8">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <Image
          src="/logo-white.svg"
          alt="mindful computer - bonsai tree logo"
          width={400}
          height={400}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
          priority
        />
      </div>
    </main>
  )
}

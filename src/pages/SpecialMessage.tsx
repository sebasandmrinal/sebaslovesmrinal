import { useEffect, useState } from "react"
import FloatingHearts from "@/components/FloatingHearts"

const SpecialMessage = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const message = `If I ask for a kiss, come and give it to me, I know you're thinking of it.
I've been trying for a while, and this moment feels just right.
You know that with me, your heart beats faster,
and you know this girl is searching for your heartbeat too.

Come, try my lips and see how love tastes.
I want to know how much love can fit inside you.
I'm not in a rush, I want to enjoy this journey with you.
Let's start slowly and let our hearts lead us further.

Step by step, soft and gently,
we're getting closer, little by little.
Show me your favorite places,
the ones only I should know.

Step by step, soft and gently,
we're getting closer, little by little,
until I make you whisper my name
and forget the world slowly. 💞

Happy Diwali`

  const lines = message.split("\n")

  useEffect(() => {
    if (currentIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + (prev ? "\n" : "") + lines[currentIndex])
        setCurrentIndex(currentIndex + 1)
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, lines])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(/mrinal1.jpg)` }}
      >
        {/* Overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full">
          {/* No box, no border - just beautiful text */}
          <div className="text-center">
            <pre className="text-xl md:text-2xl text-white leading-relaxed whitespace-pre-wrap font-dancing italic drop-shadow-lg">
              {displayedText}
              {currentIndex < lines.length && (
                <span className="animate-blink text-pink-300">|</span>
              )}
            </pre>
            
            {currentIndex >= lines.length && (
              <div className="text-center mt-12">
                <div className="text-5xl animate-pulse text-pink-300 font-pacifico">
                  💖 Forever Yours 💖
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialMessage

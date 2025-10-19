import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import FloatingHearts from "@/components/FloatingHearts"
import Typewriter from "@/components/Typewriter"

const Home = () => {
  const navigate = useNavigate()

  const quotes = [
    "It's only been a day since we met, but you've already lit up my heart brighter than a thousand diyas. Happy Diwali, my sunshine!",
    "We may have just met, but it feels like Diwali brought you into my life as its most beautiful light.",
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(/mrinal2.jpg)` }}
      >
        {/* Overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full space-y-12 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg font-pacifico">
            LOVE ME LIKE YOU DO 💖
          </h1>

          {/* Typewriter text only - no box, no border */}
          <div className="min-h-[120px] flex items-center justify-center">
            <Typewriter
              texts={quotes}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={3000}
              className="text-2xl md:text-3xl italic text-white drop-shadow-lg leading-relaxed font-dancing"
            />
          </div>

          <Button
            onClick={() => navigate("/questions")}
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-12 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            I desperately want to know more about you 💌
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FloatingHearts from "@/components/FloatingHearts"

const Questions = () => {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  })

  const questions = [
    "What was your first impression of me?",
    "What makes your heart race when you think about us?",
    "If you could describe our connection in one word, what would it be?",
  ]

  const handleInputChange = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can handle the submission, like saving to localStorage or sending to backend
    console.log("Answers:", answers)
    navigate("/special-message")
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 font-pacifico">
              Tell Me Everything 💕
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {questions.map((question, index) => (
                <div key={index} className="space-y-3">
                  <label className="text-lg font-semibold text-gray-700 block">
                    {question}
                  </label>
                  <Textarea
                    value={answers[`question${index + 1}` as keyof typeof answers]}
                    onChange={(e) => handleInputChange(`question${index + 1}`, e.target.value)}
                    placeholder="Type your heartfelt answer here..."
                    className="min-h-[100px] resize-none border-2 border-pink-200 focus:border-pink-400 transition-colors"
                  />
                </div>
              ))}

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg px-12 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Send My Heart's Answers 💖
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions

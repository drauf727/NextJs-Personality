"use client"
import { useState } from 'react'
import Results from './results'

export default function Questions() {
    const [answers, setAnswers] = useState<{[key: number]: number}>({})
    const [showResults, setShowResults] = useState(false)

    const questionBank = [
        {
            question: "I enjoy taking on challenges that push me out of my comfort zone."
        },
        {
            question: "I often find myself trying to understand the emotions of others around me."
        },
        {
            question: "I feel energized by social gatherings and meeting new people."
        },
        {
            question: "I tend to plan out my tasks carefully before beginning a project."
        },
        {
            question: "I am comfortable expressing my thoughts and opinions, even if they differ from others."
        },
        {
            question: "I often find myself exploring new hobbies or learning about unfamiliar topics."
        },
        {
            question: "I am able to stay calm and composed when dealing with unexpected changes."
        },
        {
            question: "I prefer to trust my intuition when making important decisions."
        },
        {
            question: "I find it easy to adapt my behavior depending on the situation."
        },
        {
            question: "I enjoy reflecting on past experiences to gain insight into my personal growth."
        }
    ]

    const ratingLabels = {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Neutral",
        4: "Agree",
        5: "Strongly Agree"
    }

    const handleSubmit = () => {
        // Check if all questions are answered
        if (Object.keys(answers).length !== questionBank.length) {
            alert("Please answer all questions before submitting")
            return
        }
        setShowResults(true)
    }

    if (showResults) {
        return <Results answers={answers} />
    }

    return (
        <div className="space-y-6 p-4">
            <div className="mb-4 text-sm text-gray-600">
                Rate each statement from 1 (Strongly Disagree) to 5 (Strongly Agree)
            </div>
            {questionBank.map((question, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <div className="font-medium text-center">{question.question}</div>
                    <div className="flex justify-center gap-4 items-center">
                        <span className="text-sm text-gray-600 min-w-24">Strongly Disagree</span>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <label key={rating} className="flex items-center gap-1 hover:cursor-pointer">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={rating}
                                    checked={answers[index] === rating}
                                    onChange={() => {
                                        setAnswers({
                                            ...answers,
                                            [index]: rating
                                        })
                                    }}
                                />
                                <span title={ratingLabels[rating as keyof typeof ratingLabels]}>
                                    {rating}
                                </span>
                            </label>
                        ))}
                        <span className="text-sm text-gray-600 min-w-24">Strongly Agree</span>
                    </div>
                </div>
            ))}
            <div className="flex justify-center">
                <button 
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
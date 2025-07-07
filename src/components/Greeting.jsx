import { useState } from "preact/hooks"

export default function Greeting({ messages }) {
    const [greeting, setGreeting] = useState(messages[0])
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)]

    return (
        <div>
            <h3>
                {greeting}! Thank you for visiting!
                <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
            </h3>
        </div>
    )
}

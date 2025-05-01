
import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define the structure for chat messages
type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

// Initial bot messages
const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Hi there! I'm the Analytics Avenue assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date(),
  },
];

// List of FAQs with responses
const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer comprehensive data analytics courses including SQL, Python, Power BI, Tableau, Machine Learning, and Business Analytics tailored for beginners and professionals.",
  },
  {
    question: "How long are your programs?",
    answer: "Our programs range from 4 weeks to 6 months depending on the course intensity and coverage. We have weekend batches and weekday options available.",
  },
  {
    question: "Do you offer internships?",
    answer: "Yes! We provide guaranteed internship opportunities with our partner companies for students who complete our full-stack data analytics program.",
  },
  {
    question: "Are there any placement services?",
    answer: "Absolutely! We have a dedicated placement cell that helps our graduates find relevant positions in the data analytics industry with a 90% placement record.",
  },
  {
    question: "How much does it cost?",
    answer: "Our course fees vary based on the program. Basic courses start from ₹15,000, while comprehensive programs range from ₹45,000 to ₹75,000. We offer flexible payment options and scholarships for deserving candidates.",
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Process user message and generate response
  const processMessage = (userMessage: string) => {
    setIsTyping(true);
    
    // Simple response logic based on keywords
    setTimeout(() => {
      let botResponse = "I'm not sure how to help with that. Would you like to speak with a human advisor? Email us at info@analyticsavenue.in or call +91 98765 43210.";
      
      // Check if the message matches any FAQ
      const userMessageLower = userMessage.toLowerCase();
      
      // First check for exact FAQ matches
      const faqMatch = faqs.find(faq => 
        userMessageLower.includes(faq.question.toLowerCase())
      );
      
      if (faqMatch) {
        botResponse = faqMatch.answer;
      } else {
        // Check for keyword matches
        if (userMessageLower.includes("course") || userMessageLower.includes("program") || userMessageLower.includes("class")) {
          botResponse = faqs[0].answer;
        } else if (userMessageLower.includes("duration") || userMessageLower.includes("how long") || userMessageLower.includes("time")) {
          botResponse = faqs[1].answer;
        } else if (userMessageLower.includes("intern") || userMessageLower.includes("work")) {
          botResponse = faqs[2].answer;
        } else if (userMessageLower.includes("placement") || userMessageLower.includes("job") || userMessageLower.includes("career")) {
          botResponse = faqs[3].answer;
        } else if (userMessageLower.includes("cost") || userMessageLower.includes("fee") || userMessageLower.includes("price") || userMessageLower.includes("rupee") || userMessageLower.includes("₹")) {
          botResponse = faqs[4].answer;
        } else if (userMessageLower.includes("hello") || userMessageLower.includes("hi") || userMessageLower.includes("hey")) {
          botResponse = "Hello! How can I assist you with Analytics Avenue's courses or services today?";
        } else if (userMessageLower.includes("thank")) {
          botResponse = "You're welcome! Is there anything else I can help you with?";
        } else if (userMessageLower.includes("bye") || userMessageLower.includes("goodbye")) {
          botResponse = "Thank you for chatting with Analytics Avenue. Feel free to reach out anytime!";
        }
      }
      
      // Add bot response
      setMessages(prev => [...prev, {
        id: prev.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }]);
      
      setIsTyping(false);
    }, 1000);
  };

  // Handle sending a message
  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input.trim(),
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Process the user's message to generate a response
    processMessage(input);
    
    // Clear input
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={`${
          isOpen ? "hidden" : "flex"
        } items-center justify-center bg-cyan text-navy p-4 rounded-full shadow-lg hover:bg-cyan/90 transition-all`}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-[350px] max-w-full h-[500px] max-h-[80vh] flex flex-col overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="bg-navy text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} />
              <h3 className="font-semibold">Analytics Avenue Support</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 ${
                  msg.isBot ? "flex flex-row" : "flex flex-row-reverse"
                }`}
              >
                {msg.isBot && (
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white flex-shrink-0 mr-2">
                    <MessageSquare size={16} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-cyan text-navy"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white mr-2">
                  <MessageSquare size={16} />
                </div>
                <div className="bg-gray-100 py-2 px-4 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200">
            <div className="flex">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-r-none focus-visible:ring-0"
              />
              <Button 
                type="submit"
                className="rounded-l-none bg-cyan hover:bg-cyan/90 text-navy" 
                disabled={!input.trim() || isTyping}
              >
                <Send size={16} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

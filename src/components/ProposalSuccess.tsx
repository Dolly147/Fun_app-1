import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function ProposalSuccess() {
  const hearts = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating hearts animation */}
      {hearts.map((heart, index) => (
        <motion.div
          key={heart}
          initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            delay: index * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute"
        >
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
        </motion.div>
      ))}

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.6, rotate: { duration: 1, repeat: Infinity, repeatDelay: 2 } }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <Heart className="w-32 h-32 mx-auto text-rose-500 fill-rose-500" />
            <Sparkles className="w-12 h-12 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -bottom-2 -left-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-rose-600"
        >
          You Said Yes! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-gray-700"
        >
          You just made me the happiest person alive! I promise to love you, support you, cherish you, and make you smile every single day. Together, we'll create the most beautiful story ever told.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
        >
          <p className="text-gray-800 italic mb-4">
            “I don’t know what you’re going through, but I’m sending you a little love and a lot of strength. You deserve comfort, kindness, and someone rooting for you — and even if it’s from a distance, I hope you feel that support from me.” 
          </p>
          <p className="text-gray-600">
            — Your Well wisher <br /> Please smile naa :
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </motion.div>
      </div>
    </div>
  );
}

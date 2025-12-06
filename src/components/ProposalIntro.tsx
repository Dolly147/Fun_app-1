import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface ProposalIntroProps {
  onContinue: () => void;
}

export function ProposalIntro({ onContinue }: ProposalIntroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <Heart className="w-24 h-24 mx-auto text-rose-500 fill-rose-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-rose-600"
        >
          A Special Message for You my Dear ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-gray-700"
        >
          Every moment with you feels like a beautiful dream. You make my world brighter, my heart fuller, and my life complete. I've been waiting for the perfect moment to tell you something important...
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onClick={onContinue}
          className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl"
        >
          Continue
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <img
            src="https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NjQ5MTE3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Romantic moment"
            className="w-full h-64 object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface ProposalQuestionProps {
  onAccept: () => void;
}

export function ProposalQuestion({ onAccept }: ProposalQuestionProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const handleNoHover = () => {
    const maxX = 200;
    const maxY = 100;
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoAttempts(prev => prev + 1);
  };

  const noButtonTexts = [
    'No',
    'Are you sure?',
    'Really?',
    'Think again!',
    'Please?',
    'Pretty please?',
    'One more chance?',
    'Wrong button!',
    'Oops, try again!',
    'Nope, not that one!',
    'Come on... 💝',
    'My heart is breaking! 💔',
    'Don\'t break my heart!',
    'Just say yes already!',
    'You know you want to!',
    'Stop running away!',
    'I won\'t give up! 💪',
    'Nice try! 😏',
    'That button is broken!',
    'This is your last chance!',
    'Just kidding, try the other one!',
    'I\'ll wait forever! ⏰',
    'You\'re making this hard!',
    'Seriously? 😅',
    'Fine, keep trying...',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Sparkles className="w-20 h-20 mx-auto text-yellow-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="mb-6 text-rose-600">
            Will You Be Mine?
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto">
            I can't imagine my life without you. You are my best friend, my Crime partner, My hapiness, my everything. Would you make me the happiest person in the world and be with me forever?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1517607648415-b431854daa86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGxvdmUlMjByb21hbnRpY3xlbnwxfHx8fDE3NjQ5NTU2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Love"
            className="w-full h-80 object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6 justify-center items-center relative"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAccept}
            className="px-12 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Yes! 💕
          </motion.button>

          <motion.button
            animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="px-12 py-4 bg-gray-300 text-gray-600 rounded-full shadow-lg cursor-pointer"
          >
            {noButtonTexts[Math.min(noAttempts, noButtonTexts.length - 1)]}
          </motion.button>
        </motion.div>

        {noAttempts > 2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-600 italic"
          >
            I think you know what the right answer is... 💗
          </motion.p>
        )}
      </div>
    </div>
  );
}
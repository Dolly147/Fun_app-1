import { useState } from 'react';
import { ProposalIntro } from './components/ProposalIntro';
import { ProposalQuestion } from './components/ProposalQuestion';
import { ProposalSuccess } from './components/ProposalSuccess';

export default function App() {
  const [stage, setStage] = useState<'intro' | 'question' | 'success'>('intro');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      {stage === 'intro' && <ProposalIntro onContinue={() => setStage('question')} />}
      {stage === 'question' && <ProposalQuestion onAccept={() => setStage('success')} />}
      {stage === 'success' && <ProposalSuccess />}
    </div>
  );
}

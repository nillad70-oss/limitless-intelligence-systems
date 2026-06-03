'use client';

import { useState } from 'react';

type GapState = 'unaware' | 'aware' | 'exploring' | 'transitioning' | 'scaling';

interface GapResult {
  state: GapState;
  label: string;
  message: string;
  cta: string;
  ctaHref: string;
}

const GAP_RESULTS: Record<GapState, GapResult> = {
  unaware: {
    state: 'unaware',
    label: 'Stage 1 — Unaware',
    message: 'You\'re still trading hours for dollars. AI is reshaping every profession faster than most people realize — but the window to position early is now.',
    cta: 'Download the AI Income Scorecard',
    ctaHref: 'https://limitless-intelligence-systems.vercel.app/resources/scorecard',
  },
  aware: {
    state: 'aware',
    label: 'Stage 2 — Aware',
    message: 'You know AI is coming and you\'re paying attention. The gap between knowing and acting is where most professionals stall. Let\'s close it.',
    cta: 'Join the Free AI Income Workshop',
    ctaHref: 'https://limitless-intelligence-systems.vercel.app/workshop',
  },
  exploring: {
    state: 'exploring',
    label: 'Stage 3 — Exploring',
    message: 'You\'re researching tools and possibilities. What you need now is a proven system — not more information. The LIMITLESS ecosystem was built for this exact stage.',
    cta: 'Explore the Platforms',
    ctaHref: 'https://limitless-healthcare-ai.vercel.app/platforms',
  },
  transitioning: {
    state: 'transitioning',
    label: 'Stage 4 — Transitioning',
    message: 'You\'re actively building. You need acceleration, not more courses. Done-with-you implementation is your fastest path to scalable income.',
    cta: 'Apply for the WEALTH™ Intensive',
    ctaHref: 'https://limitless-intelligence-systems.vercel.app/intensive',
  },
  scaling: {
    state: 'scaling',
    label: 'Stage 5 — Scaling',
    message: 'You\'re already generating digital income from your expertise. Now it\'s about systems, leverage, and leading others through the gap you already crossed.',
    cta: 'Join the Inner Circle',
    ctaHref: 'https://limitless-intelligence-systems.vercel.app/inner-circle',
  },
};

const QUESTIONS = [
  {
    id: 'q1',
    text: 'How would you describe your relationship with AI tools right now?',
    options: [
      { value: 0, label: 'I haven\'t really explored them' },
      { value: 1, label: 'I\'ve heard about them but haven\'t used them' },
      { value: 2, label: 'I\'ve tried a few tools casually' },
      { value: 3, label: 'I use AI tools regularly in my work' },
      { value: 4, label: 'I\'m building or selling AI-powered solutions' },
    ],
  },
  {
    id: 'q2',
    text: 'Where are you in your digital income journey?',
    options: [
      { value: 0, label: 'I haven\'t thought about it' },
      { value: 1, label: 'I\'m curious but don\'t know where to start' },
      { value: 2, label: 'I\'ve started learning about digital products' },
      { value: 3, label: 'I have something in progress or launched' },
      { value: 4, label: 'I already earn digital income consistently' },
    ],
  },
  {
    id: 'q3',
    text: 'How would you describe the expertise you bring to your work?',
    options: [
      { value: 0, label: 'I\'m still building my foundational knowledge' },
      { value: 1, label: 'I have a few years of solid experience' },
      { value: 2, label: 'I\'m considered knowledgeable in my field' },
      { value: 3, label: 'I have deep expertise others come to me for' },
      { value: 4, label: 'I\'m a recognised authority in my industry' },
    ],
  },
];

function scoreToState(score: number): GapState {
  if (score <= 2) return 'unaware';
  if (score <= 4) return 'aware';
  if (score <= 7) return 'exploring';
  if (score <= 10) return 'transitioning';
  return 'scaling';
}

export default function AIReadinessGap() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<GapResult | null>(null);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);

  function handleSelect(qId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function handleSubmit() {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    setResult(GAP_RESULTS[scoreToState(total)]);
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setResult(null);
    setSubmitted(false);
  }

  return (
    <section className="w-full py-20 px-6 bg-[#C89B3C]">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#1a1200] opacity-70 mb-3">
          Diagnostic Assessment
        </p>
        <h2 className="font-serif text-5xl font-bold tracking-tight text-[#1a1200] mb-5 leading-tight">
          Where Are You<br />in the Gap?
        </h2>
        <p className="text-[#1a1200] text-xl leading-relaxed mb-8 max-w-xl font-medium opacity-80">
          Between where you are today and scalable income lies a gap. Most professionals
          do not know where they stand — or which bridge crosses it fastest.
        </p>
        <div className="relative h-20 mb-12 flex items-center">
          <div className="absolute inset-0 flex items-end">
            <div className="h-14 w-[22%] bg-[#1a1200] rounded-t-lg flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#C89B3C] uppercase tracking-widest text-center leading-tight px-2">Trading<br/>Time</span>
            </div>
            <div className="flex-1 h-px border-t-2 border-dashed border-[#1a120066] self-center mx-2" />
            <div className="h-14 w-[22%] bg-[#1a1200] rounded-t-lg flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#C89B3C] uppercase tracking-widest text-center leading-tight px-2">Scalable<br/>Income™</span>
            </div>
          </div>
          <div className="absolute left-[22%] right-[22%] mx-2 h-8 self-center flex items-center justify-center">
            <span className="bg-[#FAF8F3] text-[#1a1200] font-mono text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1 rounded-sm">LIMITLESS ecosystem</span>
          </div>
        </div>
        {!submitted ? (
          <div>
            <div className="space-y-8 mb-10">
              {QUESTIONS.map((q, qi) => (
                <div key={q.id}>
                  <p className="text-[#1a1200] font-bold mb-4 text-lg">
                    <span className="font-mono text-[#1a1200] opacity-60 text-sm mr-2">0{qi + 1}</span>
                    {q.text}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const selected = answers[q.id] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleSelect(q.id, opt.value)}
                          className={`w-full text-left px-5 py-4 rounded text-base font-medium border-2 transition-all duration-150 ${
                            selected
                              ? 'bg-[#1a1200] border-[#1a1200] text-[#C89B3C]'
                              : 'bg-[#FAF8F3] border-[#FAF8F3] text-[#1a1200] hover:border-[#1a1200]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="bg-[#1a1200] text-[#C89B3C] font-mono text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded transition-opacity disabled:opacity-30 hover:opacity-90"
            >
              Reveal My Gap Score →
            </button>
          </div>
        ) : (
          result && (
            <div className="bg-[#1a1200] rounded-lg p-10 border-2 border-[#C89B3C33]">
              <p className="font-mono text-[#C89B3C] text-xs tracking-[0.18em] uppercase mb-3">Your Result</p>
              <h3 className="text-[#FAF8F3] text-3xl font-serif font-bold mb-5">{result.label}</h3>
              <p className="text-[#c9b87a] text-lg leading-relaxed mb-10">{result.message}</p>
              <a href={result.ctaHref} className="inline-block bg-[#C89B3C] text-[#1a1200] font-mono text-sm font-bold tracking-[0.15em] uppercase px-10 py-4 rounded hover:bg-[#E8C26A] transition-colors">
                {result.cta} →
              </a>
              <button onClick={handleReset} className="ml-5 text-[#FAF8F366] font-mono text-xs tracking-widest uppercase hover:text-[#FAF8F3] transition-colors">
                Retake
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
}

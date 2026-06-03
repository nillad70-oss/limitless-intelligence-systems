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
    message:
      'You\'re still trading hours for dollars. AI is reshaping healthcare faster than most nurses realize — but the window to position early is now.',
    cta: 'Download the AI Income Scorecard',
    ctaHref: '/resources/scorecard',
  },
  aware: {
    state: 'aware',
    label: 'Stage 2 — Aware',
    message:
      'You know AI is coming and you\'re paying attention. The gap between knowing and acting is where most nurses stall. Let\'s close it.',
    cta: 'Join the Free AI Income Workshop',
    ctaHref: '/workshop',
  },
  exploring: {
    state: 'exploring',
    label: 'Stage 3 — Exploring',
    message:
      'You\'re researching tools and possibilities. What you need now is a proven system — not more information. The LIMITLESS ecosystem was built for this exact stage.',
    cta: 'Explore VDASR™ & NOCAiS Platforms',
    ctaHref: '/platforms',
  },
  transitioning: {
    state: 'transitioning',
    label: 'Stage 4 — Transitioning',
    message:
      'You\'re actively building. You need acceleration, not more courses. Done-with-you implementation is your fastest path to scalable income.',
    cta: 'Apply for the WEALTH™ Intensive',
    ctaHref: '/intensive',
  },
  scaling: {
    state: 'scaling',
    label: 'Stage 5 — Scaling',
    message:
      'You\'re already generating digital income from your clinical expertise. Now it\'s about systems, leverage, and leading others through the gap you already crossed.',
    cta: 'Join the Inner Circle',
    ctaHref: '/inner-circle',
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
    text: 'What best describes your clinical expertise right now?',
    options: [
      { value: 0, label: 'I\'m early in my nursing career' },
      { value: 1, label: '1–5 years, building my skills' },
      { value: 2, label: '5–10 years, specialised knowledge' },
      { value: 3, label: '10–20 years, leadership experience' },
      { value: 4, label: '20+ years, industry-level authority' },
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
    const state = scoreToState(total);
    setResult(GAP_RESULTS[state]);
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setResult(null);
    setSubmitted(false);
  }

  return (
    <section className="w-full py-24 px-6 bg-[#FAF8F3]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#c9a84c] mb-3">
          Diagnostic Assessment
        </p>
        <h2 className="font-serif text-4xl font-normal tracking-tight text-[#1a1200] mb-4 leading-snug">
          Where Are You<br />in the Gap?
        </h2>
        <p className="text-[#4a3f28] text-lg leading-relaxed mb-4 max-w-xl">
          Between the bedside and scalable income lies a gap. Most nurses don't know
          where they stand — or which bridge crosses it fastest.
        </p>

        {/* Gap bridge visual */}
        <div className="relative h-20 mb-12 flex items-center">
          <div className="absolute inset-0 flex items-end">
            <div className="h-14 w-[22%] bg-[#e8dfc8] rounded-t-lg flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#8a7550] uppercase tracking-widest text-center leading-tight px-2">
                Clinical<br/>Burnout
              </span>
            </div>
            <div className="flex-1 h-px border-t-2 border-dashed border-[#c9a84c55] self-center mx-2" />
            <div className="h-14 w-[22%] bg-[#1a1200] rounded-t-lg flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#c9a84c] uppercase tracking-widest text-center leading-tight px-2">
                Scalable<br/>Income™
              </span>
            </div>
          </div>
          <div className="absolute left-[22%] right-[22%] mx-2 h-8 self-center flex items-center justify-center">
            <span className="bg-[#c9a84c] text-[#1a1200] font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-1 rounded-sm">
              LIMITLESS ecosystem
            </span>
          </div>
        </div>

        {/* Quiz */}
        {!submitted ? (
          <div>
            <div className="space-y-8 mb-10">
              {QUESTIONS.map((q, qi) => (
                <div key={q.id}>
                  <p className="text-[#1a1200] font-medium mb-3 text-[15px]">
                    <span className="font-mono text-[#c9a84c] text-xs mr-2">0{qi + 1}</span>
                    {q.text}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const selected = answers[q.id] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleSelect(q.id, opt.value)}
                          className={`w-full text-left px-4 py-3 rounded text-sm border transition-all duration-150 ${
                            selected
                              ? 'bg-[#1a1200] border-[#c9a84c] text-[#c9a84c]'
                              : 'bg-white border-[#e0d6be] text-[#4a3f28] hover:border-[#c9a84c]'
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
              className="bg-[#1a1200] text-[#c9a84c] font-mono text-sm tracking-[0.12em] uppercase px-8 py-3 rounded transition-opacity disabled:opacity-30 hover:opacity-90"
            >
              Reveal My Gap Score →
            </button>
          </div>
        ) : (
          result && (
            <div className="bg-[#1a1200] rounded-lg p-8 border border-[#c9a84c33]">
              <p className="font-mono text-[#c9a84c] text-xs tracking-[0.18em] uppercase mb-2">
                Your Result
              </p>
              <h3 className="text-[#FAF8F3] text-2xl font-serif font-normal mb-4">
                {result.label}
              </h3>
              <p className="text-[#c9b87a] text-[15px] leading-relaxed mb-8">
                {result.message}
              </p>
              <a
                href={result.ctaHref}
                className="inline-block bg-[#c9a84c] text-[#1a1200] font-mono text-xs tracking-[0.15em] uppercase px-8 py-3 rounded-sm hover:bg-[#b89440] transition-colors"
              >
                {result.cta} →
              </a>
              <button
                onClick={handleReset}
                className="ml-4 text-[#c9a84c55] font-mono text-xs tracking-widest uppercase hover:text-[#c9a84c] transition-colors"
              >
                Retake
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
}

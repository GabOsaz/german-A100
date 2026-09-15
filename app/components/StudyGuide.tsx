import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

function Section({
  title,
  subtitle,
  defaultOpen,
  children,
}: {
  title: string
  subtitle?: string
  defaultOpen?: boolean
  children: ReactNode
}) {
  return (
    <details
      open={defaultOpen}
      className="group mb-3 overflow-hidden rounded-xl border border-line bg-panel"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between px-3.5 py-3">
        <div>
          <div className="font-display text-[15px] text-ink">{title}</div>
          {subtitle && <div className="text-[11px] text-ink-dim">{subtitle}</div>}
        </div>
        <span className="text-ink-dim transition-transform group-open:rotate-180">▾</span>
      </summary>
      <div className="space-y-2.5 border-t border-line px-3.5 pb-3.5 pt-3 text-sm leading-relaxed text-ink">
        {children}
      </div>
    </details>
  )
}

function SkillRow({
  skill,
  time,
  points,
  parts,
}: {
  skill: string
  time: string
  points: string
  parts: string
}) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-line py-2 text-xs last:border-b-0">
      <span className="w-20 flex-none font-semibold text-gold">{skill}</span>
      <span className="flex-1 text-ink-dim">{parts}</span>
      <span className="flex-none text-ink-dim">{time}</span>
      <span className="w-14 flex-none text-right text-ink-dim">{points}</span>
    </div>
  )
}

function Check({ children }: { children: ReactNode }) {
  return (
    <label className="flex items-start gap-2 text-sm">
      <input type="checkbox" className="mt-1 h-3.5 w-3.5 accent-gold" />
      <span>{children}</span>
    </label>
  )
}

export function StudyGuide() {
  return (
    <div className="mx-auto max-w-lg px-4 pb-12 pt-4">
      <header className="mb-1">
        <h1 className="font-display text-2xl tracking-tight">Goethe A1 Study Guide</h1>
      </header>
      <p className="mb-4 text-xs text-ink-dim">
        Start Deutsch 1 / Goethe-Zertifikat A1 — exam format, grammar essentials, and a study
        plan. Formats can be refined by the Goethe-Institut over time, so cross-check specifics
        against your test center's current exam guide. The core{' '}
        <Link to="/" className="text-gold underline">
          100 words
        </Link>{' '}
        cover the grammar backbone (pronouns, connectors, question words); the{' '}
        <Link to="/a1-words" className="text-gold underline">
          A1 Words
        </Link>{' '}
        set adds the exam topic vocabulary — numbers, calendar, family, food, and more.
      </p>

      <Section
        title="Exam at a glance"
        subtitle="4 skills, ~65 minutes written + a short paired speaking exam"
        defaultOpen
      >
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2 border-b border-line pb-1.5 text-[10px] uppercase tracking-wide text-ink-dim">
            <span className="w-20 flex-none">Skill</span>
            <span className="flex-1">Parts</span>
            <span className="flex-none">Time</span>
            <span className="w-14 flex-none text-right">Points</span>
          </div>
          <SkillRow skill="Hören" parts="3 listening tracks" time="~20 min" points="25" />
          <SkillRow skill="Lesen" parts="3 reading texts" time="25 min" points="25" />
          <SkillRow skill="Schreiben" parts="form + short letter" time="20 min" points="25" />
          <SkillRow skill="Sprechen" parts="3 speaking tasks" time="~15 min" points="25" />
        </div>
        <p className="text-xs text-ink-dim">
          Total: 100 points. You generally need <b className="text-ink">60%</b> overall to pass —
          keep every skill reasonably strong rather than acing one and neglecting another.
        </p>
      </Section>

      <Section title="Hören — Listening" subtitle="~20 min, heard twice per Teil">
        <ul className="list-disc space-y-1.5 pl-4">
          <li>
            <b className="text-ink">Teil 1</b> — five short announcements/messages (e.g.
            voicemail, station announcement). Answer true/false or pick a picture.
          </li>
          <li>
            <b className="text-ink">Teil 2</b> — a longer dialogue or radio-style piece. Multiple
            choice questions.
          </li>
          <li>
            <b className="text-ink">Teil 3</b> — short everyday exchanges (phone calls). Match or
            true/false.
          </li>
        </ul>
        <p className="text-xs text-ink-dim">
          Tip: read the questions before the audio starts — you'll know exactly what to listen
          for. Numbers, times, and days of the week come up constantly.
        </p>
      </Section>

      <Section title="Lesen — Reading" subtitle="25 min, no dictionary allowed">
        <ul className="list-disc space-y-1.5 pl-4">
          <li>
            <b className="text-ink">Teil 1</b> — short everyday texts (ads, notices). True/false.
          </li>
          <li>
            <b className="text-ink">Teil 2</b> — a longer text; match statements to the right
            paragraph or person.
          </li>
          <li>
            <b className="text-ink">Teil 3</b> — signs and short instructions (Hausordnung,
            Aushänge). What's allowed / forbidden / required.
          </li>
        </ul>
        <p className="text-xs text-ink-dim">
          Tip: skim for the gist first, then hunt for keywords from the question in the text —
          you rarely need to understand every word.
        </p>
      </Section>

      <Section title="Schreiben — Writing" subtitle="20 min, two tasks">
        <ul className="list-disc space-y-1.5 pl-4">
          <li>
            <b className="text-ink">Formular</b> — fill in a form with personal details
            (Name, Adresse, Geburtsdatum, Telefonnummer…). Get these words rock solid.
          </li>
          <li>
            <b className="text-ink">Persönlicher Brief</b> — a short informal message (~30–40
            words) covering 3 given points (e.g. explain why, ask a question, suggest something).
          </li>
        </ul>
        <div className="rounded-lg border border-line bg-panel2 p-2.5 text-xs">
          <p className="mb-1 font-semibold text-gold">Reusable letter phrases</p>
          <p>Liebe/Lieber … — Ich schreibe dir, weil …</p>
          <p>Ich kann leider nicht kommen, weil …</p>
          <p>Hast du Zeit, am … ?</p>
          <p>Viele Grüße / Bis bald, [Name]</p>
        </div>
        <p className="text-xs text-ink-dim">
          Tip: address all 3 bullet points given in the prompt — missing one costs points even if
          your German is perfect otherwise.
        </p>
      </Section>

      <Section title="Sprechen — Speaking" subtitle="~15 min, done in pairs with another candidate">
        <ul className="list-disc space-y-1.5 pl-4">
          <li>
            <b className="text-ink">Teil 1 — Sich vorstellen:</b> introduce yourself (Name, Alter,
            Land, Wohnort, Sprachen, Beruf, Hobby).
          </li>
          <li>
            <b className="text-ink">Teil 2 — Fragen stellen/beantworten:</b> you and your partner
            each draw a topic card (e.g. Familie, Hobby, Wohnen) and ask each other questions.
          </li>
          <li>
            <b className="text-ink">Teil 3 — Bitten formulieren:</b> plan something together
            using a cue card (e.g. arranging a party) — make requests and agree on a plan.
          </li>
        </ul>
        <p className="text-xs text-ink-dim">
          Tip: rehearse your self-introduction until it's automatic — it's the one part you fully
          control and it settles your nerves for the rest.
        </p>
      </Section>

      <Section title="Grammar checklist" subtitle="the load-bearing structures for A1">
        <div className="space-y-1.5">
          <Check>Present tense conjugation, incl. irregulars (sein, haben, fahren, sehen…)</Check>
          <Check>Word order: verb in position 2 in statements, verb-first in yes/no questions</Check>
          <Check>W-questions: wer, was, wann, wo, wie, warum, welche</Check>
          <Check>Negation with nicht vs. kein</Check>
          <Check>Definite/indefinite articles + gender (der/die/das, ein/eine)</Check>
          <Check>Nominative vs. accusative (mich/dich, den/einen)</Check>
          <Check>Modal verbs: können, müssen, möchten + verb-to-end word order</Check>
          <Check>Separable verbs (aufstehen, einkaufen) splitting in main clauses</Check>
          <Check>Plural noun forms</Check>
          <Check>Time expressions: clock time, days, months, um/am/im</Check>
        </div>
      </Section>

      <Section title="7-day study plan" subtitle="a light structure if you're cramming">
        <ol className="list-decimal space-y-1.5 pl-4">
          <li>Drill the core 100 words on Flashcards until recall is fast in both directions.</li>
          <li>
            Switch to{' '}
            <Link to="/a1-words" className="text-gold underline">
              A1 Words
            </Link>{' '}
            — numbers, days/months, and family first; these show up constantly in Hören/Lesen.
          </li>
          <li>List mode on both sets — read every word once out loud, mark the ones you hesitate on.</li>
          <li>Quiz mode on both sets — type German from English until you clear a full pass with no mistakes.</li>
          <li>Grammar checklist above — pick 3 unchecked items, find one example sentence each.</li>
          <li>Write a practice Brief using the reusable phrases; time yourself at 20 minutes.</li>
          <li>Say your Sprechen Teil 1 self-introduction out loud 5 times from memory.</li>
          <li>Light review only — re-quiz mastered words, re-read grammar checklist, rest.</li>
        </ol>
      </Section>

      <Section title="On exam day">
        <ul className="list-disc space-y-1.5 pl-4">
          <li>Bring a valid photo ID — it's checked against your registration.</li>
          <li>Arrive early; latecomers can be refused entry to the written exam.</li>
          <li>No electronic dictionaries or phones during Hören/Lesen/Schreiben.</li>
          <li>Leftover time in Lesen/Schreiben? Recheck articles (der/die/das) and verb endings.</li>
          <li>In Sprechen, if you don't understand your partner or examiner, ask them to repeat —
            that's normal and doesn't cost points.</li>
        </ul>
      </Section>
    </div>
  )
}

"use client";

import { useState } from "react";

type Person = {
  id: string;
  name: string;
  role: string;
  initials: string;
  location: string;
  sent: string;
  message: string;
  accent: {
    avatar: string;
    badge: string;
    dot: string;
  };
};

const people: Person[] = [

  {
    id: "ryan",
    name: "Ryan",
    role: "A friend you can count on",
    initials: "RY",
    location: "Always in your corner",
    sent: "Today, 6:14 PM",
    message: `Hey Ryan, how are you doing?

Listen, this message is for you because I genuinely want you to know how much I appreciate you as a friend. Thank you for always having my back and saving my ass whenever I needed it. And if you ever need help from me, no matter what it is, I’ll be there for you too.

Thank you for being such a good friend and, more importantly, a genuinely good person. I know you care about people, and I know you’re a sensitive, simple guy who just wants to focus on his goals. Don’t ever worry about anything with me. You’re safe with me, and you never have to feel like you owe me anything. I don’t expect anything from you.

All I really want is to be there for you as a friend. I might not always be able to do enough, but I’ll always try to be honest with you and be there whenever you actually need me.

Thank you so much for today, and thank you for making my birthday special. I genuinely appreciate it, bro. Thank you, seriously.`,
    accent: {
      avatar: "bg-fuchsia-100 text-fuchsia-700",
      badge: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700",
      dot: "bg-fuchsia-400",
    },
  },
  {
    id: "khadiza-noshin",
    name: "Khadiza & Noshin",
    role: "Friends who show up",
    initials: "K&N",
    location: "The people who care",
    sent: "Today, 5:52 PM",
    message: `Hey Noshin, hey Khadiza. How are you guys?

I just wanted to genuinely thank you both for today. Thank you so much for the surprise, and thank you, Noshin, for bringing me the gift. I really appreciate it.

Khadiza, thank you for being such a good friend and honestly, for being like the sister I never had. I might not always do a lot or show it properly, but I genuinely care about you guys. You both mean a lot to me, and I’m really grateful to have you in my life.

Thank you for always being there for me, and Noshin, thank you for supporting me all this time. You both are genuinely good people, and I appreciate how kind and honest you’ve always been with me.`,
    accent: {
      avatar: "bg-cyan-100 text-cyan-700",
      badge: "border-cyan-200 bg-cyan-50 text-cyan-700",
      dot: "bg-cyan-400",
    },
  },
  {
    id: "jahin-tauhid-muktho-ornob",
    name: "Jahin, Tauhid, Muktho & Ornob",
    role: "The good-vibes crew",
    initials: "J+3",
    location: "Good memories, always",
    sent: "Today, 5:37 PM",
    message: `You guys are always in such a fun mood. You genuinely know how to make everything more funny and enjoyable. No matter how low the vibe is, you guys always manage to bring some stupid joke or something funny that makes everyone feel better.

Every time I’m with you guys, it’s just good vibes, random shit, and good memories. I honestly can’t remember many bad times with you guys, only the good ones.

Thank you so much for today. It was genuinely really nice, really fun, and honestly a beautiful day. I was expecting Nabil to be there too, but even though he couldn’t make it, I know he was concerned about me and I really appreciate that.

But regardless, we had a lot of fun today. Thank you guys for being such great friends and for always making things better just by being yourselves. I really appreciate all of you.`,
    accent: {
      avatar: "bg-orange-100 text-orange-700",
      badge: "border-orange-200 bg-orange-50 text-orange-700",
      dot: "bg-orange-400",
    },
  },
  {
    id: "tanaz",
    name: "Tanaz",
    role: "A thoughtful friend",
    initials: "TZ",
    location: "A day worth remembering",
    sent: "Today, 5:18 PM",
    message: `Thank you so much, Tanaz. I don’t know you that much, but I do know that you’re a good kid. Thank you so much for planning all the stuff. Love you, kid <3.

Thank you for this day.`,
    accent: {
      avatar: "bg-lime-100 text-lime-700",
      badge: "border-lime-200 bg-lime-50 text-lime-700",
      dot: "bg-lime-400",
    },
  },
];

function SparkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2.75 13.8 9l6.2 1.8-6.2 1.8-1.8 6.2-1.8-6.2L4 10.8 10.2 9 12 2.75Z"
        fill="currentColor"
      />
      <path
        d="m19.25 15 .75 2.25L22.25 18l-2.25.75-.75 2.25-.75-2.25-2.25-.75 2.25-.75.75-2.25Z"
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M7 17 17 7m0 0H9m8 0v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M5.75 5.5h12.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H11l-4.5 3v-3.05a2 2 0 0 1-2-1.95v-7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Home() {
  const [selectedId, setSelectedId] = useState(people[0].id);
  const selectedPerson = people.find((person) => person.id === selectedId) ?? people[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute -right-40 top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-sky-100/80 blur-3xl" />
        <div className="absolute bottom-[-16rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-rose-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-slate-200/80 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-amber-300 shadow-lg shadow-slate-900/10">
              <SparkIcon />
            </div>
            <div>
              <p className="font-serif text-lg font-bold tracking-tight text-slate-900">dearly</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                The good stuff
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-xs font-semibold text-slate-500 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-300" />
            Your little corner of the internet
          </div>
        </header>

        <section className="pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              <SparkIcon className="h-3.5 w-3.5" />
              A little more personal
            </div>
            <h1 className="font-serif text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">
              Words worth
              <span className="relative ml-3 inline-block text-slate-500">
                keeping.
                <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-2 rounded-full bg-amber-300/70" />
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              A quiet place for the messages that make an ordinary day feel a little more like yours.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-stretch lg:gap-6">
            <aside className="rounded-[2rem] border border-slate-200/90 bg-white/75 p-3 shadow-soft backdrop-blur-sm lg:p-4">
              <div className="mb-3 flex items-end justify-between px-2 pt-1 lg:mb-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Your people</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">{people.length} notes waiting</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-500">{people.length}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {people.map((person) => {
                  const isSelected = selectedPerson.id === person.id;

                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`group flex min-h-[5.5rem] items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 ease-out lg:min-h-0 ${
                        isSelected
                          ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/15"
                          : "border-transparent bg-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50"
                      }`}
                      key={person.id}
                      onClick={() => setSelectedId(person.id)}
                      type="button"
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.9rem] text-xs font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-105 ${person.accent.avatar}`}>
                        {person.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold">{person.name}</span>
                        <span className={`mt-1 block truncate text-[11px] ${isSelected ? "text-slate-400" : "text-slate-400"}`}>
                          {person.role}
                        </span>
                      </span>
                      <span className={`ml-auto hidden h-1.5 w-1.5 shrink-0 rounded-full transition-opacity duration-300 sm:block ${person.accent.dot} ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 hidden border-t border-slate-100 px-2 pt-4 lg:block">
                <p className="text-xs leading-5 text-slate-400">
                  Pick a name whenever you need a small reminder of what matters.
                </p>
              </div>
            </aside>

            <section aria-live="polite" className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-900/20 sm:min-h-[35rem]">
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10 bg-white/[0.04]" />
                <div className="absolute -right-10 -top-14 h-52 w-52 rounded-full border border-white/[0.07]" />
                <div className="absolute bottom-[-7rem] left-[-4rem] h-56 w-56 rounded-full bg-amber-300/[0.07] blur-2xl" />
                <span className="absolute right-10 top-10 h-2 w-2 animate-pulse rounded-full bg-amber-300" />
              </div>

              <div className="relative flex h-full min-h-[34rem] flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl text-xs font-extrabold ${selectedPerson.accent.avatar}`}>
                      {selectedPerson.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">A note from {selectedPerson.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{selectedPerson.location}</p>
                    </div>
                  </div>
                  <span className={`hidden rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] sm:inline-flex ${selectedPerson.accent.badge}`}>
                    For you
                  </span>
                </div>

                <div className="my-10 sm:my-12">
                  <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    <MessageIcon />
                    Personal note
                  </div>
                  <div className="relative max-w-3xl">
                    <span className="absolute -left-3 -top-7 font-serif text-7xl leading-none text-amber-300/80 sm:-left-5 sm:-top-9 sm:text-8xl" aria-hidden="true">
                      “
                    </span>
                    <p className="sr-only">Message from {selectedPerson.name}</p>
                    <blockquote className="animate-message-in whitespace-pre-line font-serif text-[2rem] font-medium leading-[1.14] tracking-[-0.035em] text-slate-100 sm:text-4xl lg:text-[2.75rem]" key={selectedPerson.id}>
                      {selectedPerson.message}
                    </blockquote>
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Sent by {selectedPerson.name}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-300">{selectedPerson.sent}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Keep this close
                    <ArrowUpRightIcon />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-slate-200/80 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Made for the moments you want to remember.</p>
          <p className="font-medium text-slate-500">dearly / 01</p>
        </footer>
      </div>
    </main>
  );
}

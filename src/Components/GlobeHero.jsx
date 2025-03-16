import React from 'react';
import { Sparkles } from './Sparkels';
import Earth from '../Components/Globe';
function GlobeHero() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-black text-white">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Hello!
          </span>
          <h1 className="text-4xl  font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            <br />
            👋 I'm 
            <br />
            <br />
            Krishna Mohan P.V.S
          </h1>
          <Earth />
        </article>

        <div className="relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]">
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
        </div>
      </div>
    </>
  );
}
export default GlobeHero;

import React from 'react';

export default function FooterSection() {
  return (
    <footer className={'mt-5 text-xs flex flex-col gap-3'}>
      <hr />
      <div className="flex justify-between">
        <p>Si vas a copiar, al menos dame créditos :)</p>
        <p>© {new Date().getFullYear()} - drgato.dev</p>
      </div>
    </footer>
  );
}

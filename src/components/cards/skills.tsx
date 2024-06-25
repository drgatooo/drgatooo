export default function SkillsCard() {
  return (
    <div
      className={
        'card col-span-2 group flex justify-between flex-col gap-3 rounded-xl overflow-hidden'
      }
    >
      <div className="w-full header pt-3 pb-2 px-3">
        <h3>Skills</h3>
      </div>

      <div className="flex gap-3 flex-wrap text-3xl px-3 pb-2">
        {/** a mano cada uno por conveniencia del guion */}
        <span className={`icon-[skill-icons--javascript]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--typescript]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--html]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--css]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--sass]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--tailwindcss-dark]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--graphql-dark]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--react-dark]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--nextjs-dark]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--nodejs-dark]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--expressjs-dark]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--mongodb]`} role="img" aria-hidden="true" />
        <span className={`icon-[skill-icons--git]`} role="img" aria-hidden="true" />
      </div>
    </div>
  );
}

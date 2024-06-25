import BDayCard from '../cards/bday';
import GithubCard from '../cards/github';
import MusicCard from '../cards/music';
import SkillsCard from '../cards/skills';
import ToggleColorModeCard from '../cards/toggleColor';

export default function CardsSection() {
  return (
    <section className={'grid grid-cols-2 md:grid-cols-4 w-full h-min gap-4'}>
      <MusicCard />
      <GithubCard />
      <ToggleColorModeCard />
      <BDayCard />
      <SkillsCard />
    </section>
  );
}

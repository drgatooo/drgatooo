import CardsSection from '@drgato/components/sections/cards';
import DiscourseSection from '@drgato/components/sections/discourse';
import HeaderSection from '@drgato/components/sections/header';
import Layout from '@drgato/components/layout';
import Meta from '@drgato/components/meta';
import RandomCatsSection from '@drgato/components/sections/cats';
import FooterSection from '@drgato/components/sections/footer';

export default function Inicio() {
  return (
    <Layout>
      <Meta
        title={'Mathias Gomez - programador autodidacta'}
        description={
          '¡Muy buenas a todos! Soy Mathias, un chico programador de 16 años fan de los gatos. ¿Quieres saber un poco más? ¡Pues entra aquí!'
        }
      />

      <HeaderSection />
      <DiscourseSection />
      <CardsSection />
      <RandomCatsSection />
      <FooterSection />
    </Layout>
  );
}

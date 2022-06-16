import NewsItem from "../../shared/components/Newsfeed/NewsItem";
import Section from "../../shared/components/UI/Section";
import Socials from "../../shared/components/UI/Socials";
import styles from "./Pozorumeni.module.css";

const Pozorumeni = () => {
  const text = (
    <>
      <p>
        PozorUmění začalo jako galerijní sekce festivalu Žižkovská noc naplno
        fungovat v květnu 2021 pod zastřešujícím ročním tématem
        identita–diverzita–komunita. Od té chvíle uspořádal náš tým více než 15
        výstav a doprovodných programů.
      </p>

      <p>
        15. září až 13. října proběhne Galerijní podzim #2 s ústředním tématem
        “možnosti spolupráce”. Chceme dát příležitost co nejširší škále umělců,
        autorů, tvůrců či kolektivů, proto vyhlašujeme open call, do kterého se
        mohou zájemci přihlašovat až do 1. července. Všechny potřebné informace
        najdete na FB události nebo nám napište na pozorumeni@zizkovskanoc.net,
        kam nám můžete posílat vaše práce.
      </p>
    </>
  );

  const text2 = (
    <>
      <p>
        Až do pondělí 30.5. se nám můžete ozvat a zúčastnit se s námi festivalu
        Otevřené ateliéry Praha 2022
      </p>

      <p>
        V rámci letošního tématu “Možnosti spolupráce” se PozorUmění spojuje s
        festivalem Otevřené ateliéry Praha, který široké veřejnosti otevírá
        ateliéry, studia a sdílené umělecké prostory v Praze.
      </p>

      <p>
        PozorUmění vyzývá tvůrce, kteří v této čtvrti sídlí, aby se festivalu
        spolu s námi zúčastnili! Ať už máte ateliér v suterénu nebo na půdě, v
        bývalé trafice nebo kočárkárně, ať u… Zobrazit víc
      </p>
    </>
  );

  const text3 = (
    <>
      <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id
        orci porta dapibus. Nulla porttitor accumsan tincidunt.
      </p>

      <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id
        orci porta dapibus. Nulla porttitor accumsan tincidunt. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
        porttitor accumsan tincidunt.
      </p>
    </>
  );

  const text4 = (
    <>
      <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id
        orci porta dapibus. Nulla porttitor accumsan tincidunt.
      </p>

      <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id
        orci porta dapibus. Nulla porttitor accumsan tincidunt. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
        porttitor accumsan tincidunt.
      </p>
    </>
  );

  return (
    <Section className={styles.pozorumeni}>
      <NewsItem
        id="pozorumeni_main"
        importance={1}
        color="#ea5764"
        title="PozorUmění"
        imageUrl="https://zizkovskanoc.net/static/media/pozorumeni3.7dee612f5cf32c5ef86d.jpg"
        socials={
          <Socials
            instagram="https://www.instagram.com/pozorumeni/"
            facebook="https://www.facebook.com/pozorumeni"
          />
        }
      >
        {text}
      </NewsItem>
      <NewsItem
        id="pozorumeni_ateliery"
        importance={4}
        color="#ea5764"
        title="Hledáme umělce a jejich ateliéry na Žižkově"
        imageUrl="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/281888665_174721778247775_489476010005163911_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-HDd0raRS-8AX8DW5k-&_nc_ht=scontent-cdg2-1.xx&oh=00_AT9PLeODmVEtwUMR1JAKFzU_juQ-Pr0sszYKCr5OcgcGkQ&oe=62AE8497"
      >
        {text2}
      </NewsItem>
      <NewsItem
        id="pozorumeni_ateliery@"
        importance={4}
        color="#ea5764"
        title="Random článek 3"
        imageUrl="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/273701621_318551616978428_6369547309248029084_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=KnKaEWcVZC8AX_L42e5&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_du0vE7YQvqWZh43qhSLIOnGHzKspFz1hcZD0xvDPPsw&oe=62AE2B1E"
      >
        {text3}
      </NewsItem>
      <NewsItem
        id="jirka_kara"
        importance={3}
        color="#ea5764"
        title="Pieta za Jiřího Káru"
        imageUrl="https://img.cncenter.cz/foto/jiri-kara-pieta-vzpominka/MHgwL3NtYXJ0L3RoYg/1-normal620-3860347.jpg?v=2&st=dcU2mfV876HIk77h8YBDr0AssQuuOFEjvt8QLBCRbLg&ts=1600812000&e=0"
      >
        {text4}
      </NewsItem>
    </Section>
  );
};

export default Pozorumeni;

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

  return (
    <Section className={styles.pozorumeni}>
      <NewsItem
        id="pozorumeni_main"
        importance={1}
        text={text}
        color="#ea5764"
        title="PozorUmění"
        imageUrl="https://zizkovskanoc.net/static/media/pozorumeni3.7dee612f5cf32c5ef86d.jpg"
        socials={
          <Socials
            instagram="https://www.instagram.com/pozorumeni/"
            facebook="https://www.facebook.com/pozorumeni"
          />
        }
      />
    </Section>
  );
};

export default Pozorumeni;

import NewsItem from "../../shared/components/Newsfeed/NewsItem";
import Section from "../../shared/components/UI/Section";
import Socials from "../../shared/components/UI/Socials";
import styles from "./Vysilac.module.css";

const Vysilac = () => {
  const text =
    "Festival Žižkovská Noc je světem, v němž není místo pro jakoukoliv formu diskriminace. Podcast Vysílač chce tento svět rozšířit za hranice žižkovských a holešovických ulic. Dáváme prostor tématům odrážející hodnoty festivalu a lidem, kteří jim rozumí. Moderují Tereza Butková, Petra Mikolášová a Františka Tranová. Znělka a edit Jonáš Kucharský.";
  return (
    <Section className={styles.vysilac}>
      <NewsItem
        id="vysilac_main"
        importance={1}
        text={text}
        color={"#50c1e8"}
        title="Vysílač"
        imageUrl="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/281885829_501457231774320_379831683568835019_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=yKzMOKCUB0EAX9oGIUR&_nc_ht=scontent-cdg2-1.xx&oh=00_AT9IiUMM_FPFtIFIRbPb-MeDse9AG3nzI01AHQyPVK90fw&oe=62AF33C6"
        socials={
          <Socials
            facebook="https://www.facebook.com/vysilac.podcast"
            instagram="https://www.instagram.com/vysilac/"
            spotify="https://open.spotify.com/show/3KobdopDV4BUkr9khhzTmf"
            apple="https://podcasts.apple.com/cz/podcast/vys%C3%ADla%C4%8D/id1538409505"
          />
        }
      />
    </Section>
  );
};

export default Vysilac;

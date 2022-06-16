import { useCallback, useEffect, useState } from "react";
import { Markup } from "interweave";

import NewsItem from "../../shared/components/Newsfeed/NewsItem";
import Section from "../../shared/components/UI/Section";
import Socials from "../../shared/components/UI/Socials";
// import { EmbededModel } from "../../shared/models/embeded";
import { Episode } from "../models/vysilac-episode";
import styles from "./Vysilac.module.css";

const Vysilac = () => {
  const [episodes, setEpisodes] = useState([<></>]);
  const [isLoading, setIsLoading] = useState(false);

  const text =
    "Festival Žižkovská Noc je světem, v němž není místo pro jakoukoliv formu diskriminace. Podcast Vysílač chce tento svět rozšířit za hranice žižkovských a holešovických ulic. Dáváme prostor tématům odrážející hodnoty festivalu a lidem, kteří jim rozumí. Moderují Tereza Butková, Petra Mikolášová a Františka Tranová. Znělka a edit Jonáš Kucharský.";

  // const embeded: EmbededModel = {
  //   id: "player_iframe",
  //   src: "https://www.buzzsprout.com/1408432?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1408432%2Fpodcast%2Fembed",
  //   width: "100%",
  //   height: "400",
  //   loading: "lazy",
  //   title: "Vysílač",
  // };

  const apiTest = useCallback(async () => {
    setIsLoading(true);
    const podcast = await fetch(
      "https://www.buzzsprout.com/api/1408432/episodes.json",
      {
        headers: {
          Authorization: "Token token=b1766a702f0e9d83092a2d0ef58bab44",
          "Content-Type": "application/json",
        },
      }
    );

    const podcastData = await podcast.json();

    const episodes = podcastData.map((ep: Episode) => {
      // definitely needs some more work + pagination
      const charCount = ep.description.length;
      const importance = charCount < 750 ? 4 : charCount < 900 ? 3 : 2;
      const clickable = importance === 2;

      const content = !clickable
        ? ep.description
        : ep.description.split(/\r? n/)[0];

      return (
        <NewsItem
          key={ep.id}
          id={ep.id.toString()}
          title={ep.title}
          color={"#50c1e8"}
          importance={importance}
          date={new Date(ep.published_at)}
          imageUrl={ep.artwork_url}
          clickable={clickable}
          audio={ep.audio_url}
        >
          <Markup content={content} />
        </NewsItem>
      );
    });
    setEpisodes(episodes);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    apiTest();
  }, [apiTest]);

  let episodesContent: JSX.Element[] | JSX.Element = (
    <p>Chyba: žádné epizody vysílače nenalezeny</p>
  );

  if (episodes && episodes.length > 0) {
    episodesContent = episodes;
  }

  if (isLoading) {
    episodesContent = <p>Loading...</p>;
  }

  return (
    <Section className={styles.vysilac}>
      <NewsItem
        key="vysilac_main"
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
        // embeded={embeded}
      />
      {episodesContent}
    </Section>
  );
};

export default Vysilac;

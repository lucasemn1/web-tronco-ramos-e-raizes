// Next
import { GetStaticProps } from "next";

// Pages
import Home, { HomeProps } from "./_home";

// Styles
import "leaflet/dist/leaflet.css";

// Services
import ExhibitionService from "../services/rest/ExhibitionService";
import ImageAlbumService from "../services/rest/ImageAlbumService";

export default function HomePage(props: HomeProps) {
  return <Home exhibitions={props.exhibitions} homeImageAlbum={props.homeImageAlbum} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const exhibitionsResponse = await new ExhibitionService().getAll(1);
  const homeImageAlbum = await new ImageAlbumService().getOne(1);

  return {
    props: {
      exhibitions: exhibitionsResponse.data.results,
      homeImageAlbum: homeImageAlbum.data,
    },
    revalidate: 24 * 60 * 60,
  };
};

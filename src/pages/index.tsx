// Next
import { GetStaticProps } from "next";

// Pages
import Home, { HomeProps } from "./_home";

// Styles
import "leaflet/dist/leaflet.css";

// Services
import ExhibitionService from "../services/rest/ExhibitionService";

export default function HomePage(props: HomeProps) {
  return <Home exhibitions={props.exhibitions} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await new ExhibitionService().getAll(1);

  return {
    props: {
      exhibitions: data.results,
    },
    revalidate: 24 * 60 * 60,
  };
};

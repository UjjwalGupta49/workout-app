import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Osprey",
    short_name: "Osprey",
    description: "A calming space for your daily workout routine",
    start_url: "/",
    display: "standalone",
    background_color: "#f5fbf9",
    theme_color: "#f5fbf9",
    icons: [
      {
        src: "/apple-touch-icon.png?v=2",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

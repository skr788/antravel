export interface PanelData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  coordinates: string;
  image: string;
}

export const PANELS_DATA: PanelData[] = [
  {
    id: "suiza",
    number: "01",
    title: "SUIZA",
    subtitle: "Montañas infinitas. Aire puro. Silencio absoluto.",
    description: "Descubre paisajes alpinos cinematográficos y experiencias exclusivas entre lagos, nieve y aventura.",
    coordinates: "46.8182° N, 8.2275° E",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "tokyo",
    number: "02",
    title: "TOKYO",
    subtitle: "Luces infinitas. Cultura viva. Energía total.",
    description: "Vive una experiencia futurista entre neones, tradición y tecnología.",
    coordinates: "35.6762° N, 139.6503° E",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "maldivas",
    number: "03",
    title: "MALDIVAS",
    subtitle: "Agua cristalina. Lujo puro. Paraíso real.",
    description: "Relájate en villas privadas rodeadas por océanos cinematográficos.",
    coordinates: "3.2028° N, 73.2207° E",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "islandia",
    number: "04",
    title: "ISLANDIA",
    subtitle: "Fuego y hielo. Naturaleza extrema.",
    description: "Explora volcanes, glaciares y auroras en uno de los lugares más increíbles del planeta.",
    coordinates: "64.9631° N, 19.0208° W",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=2000"
  }
];

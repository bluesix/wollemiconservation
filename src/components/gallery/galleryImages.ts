// Centralized list of gallery images to keep Gallery.tsx small and focused.

// Existing gallery images
import possumRock1 from "@/assets/gallery/possum-rock-1.jpg";
import possumRock2 from "@/assets/gallery/possum-rock-2.jpg";
import wallabyImg from "@/assets/wildlife/wallaby.jpg";
import pygmyPossumImg from "@/assets/wildlife/pygmy-possum.jpg";
import gliderImg from "@/assets/wildlife/glider.jpg";
import owlImg from "@/assets/wildlife/owl.jpg";

// Previously added uploads
import lyrebirdForest1 from "@/assets/gallery/lyrebird-forest-1.jpg";
import lyrebirdForest2 from "@/assets/gallery/lyrebird-forest-2.jpg";
import lyrebirdCave1 from "@/assets/gallery/lyrebird-cave-1.jpg";
import goanna1 from "@/assets/gallery/goanna-1.jpg";
import goanna2 from "@/assets/gallery/goanna-2.jpg";

// New uploads (Wildlife in Action)
import rockWallabyOverhang1 from "@/assets/gallery/rock-wallaby-overhang-1.jpg";
import rockWallabyPair1 from "@/assets/gallery/rock-wallaby-pair-1.jpg";
import rockWallabyPair2 from "@/assets/gallery/rock-wallaby-pair-2.jpg";
import rockWallabyPair3 from "@/assets/gallery/rock-wallaby-pair-3.jpg";
import rockWallabyPair4 from "@/assets/gallery/rock-wallaby-pair-4.jpg";
import rockWallabyPair5 from "@/assets/gallery/rock-wallaby-pair-5.jpg";
import rockWallabyPair6 from "@/assets/gallery/rock-wallaby-pair-6.jpg";
import wallabyClearing1 from "@/assets/gallery/wallaby-clearing-1.jpg";
import wallabyClearing2 from "@/assets/gallery/wallaby-clearing-2.jpg";
import wallabyClearing3 from "@/assets/gallery/wallaby-clearing-3.jpg";

// More uploads (Wildlife in Action)
import pygmyPossumTree1 from "@/assets/gallery/pygmy-possum-tree-1.jpg";
import pygmyPossumTree2 from "@/assets/gallery/pygmy-possum-tree-2.jpg";
import nightVisitorSpottedTail1 from "@/assets/gallery/night-visitor-spotted-tail-1.jpg";
import nightVisitorSpottedTail2 from "@/assets/gallery/night-visitor-spotted-tail-2.jpg";
import easternPygmyPossum1 from "@/assets/gallery/eastern-pygmy-possum-1.jpg";
import easternPygmyPossum2 from "@/assets/gallery/eastern-pygmy-possum-2.jpg";
import pygmyPossumBranch1 from "@/assets/gallery/pygmy-possum-branch-1.jpg";
import pygmyPossumBranch2 from "@/assets/gallery/pygmy-possum-branch-2.jpg";

// More uploads (Wildlife in Action)
import monitorReconyx1 from "@/assets/gallery/monitor-reconyx-1.jpg";
import monitorReconyx2 from "@/assets/gallery/monitor-reconyx-2.jpg";
import monitorReconyx3 from "@/assets/gallery/monitor-reconyx-3.jpg";
import monitorReconyx4 from "@/assets/gallery/monitor-reconyx-4.jpg";
import rockWallabyOverhang2 from "@/assets/gallery/rock-wallaby-overhang-2.jpg";
import rockWallabyOverhang3 from "@/assets/gallery/rock-wallaby-overhang-3.jpg";
import quollFamily1 from "@/assets/gallery/quoll-family-1.jpg";

// Additional uploads (Wildlife & Landscapes)
import wallabyCreek1 from "@/assets/gallery/wallaby-creek-1.jpg";
import wedgeTailedEagle1 from "@/assets/gallery/wedge-tailed-eagle-1.png";
import tawnyFrogmouth1 from "@/assets/gallery/tawny-frogmouth-1.jpg";
import christmasBeetle1 from "@/assets/gallery/christmas-beetle-1.jpg";
import mistyWetland1 from "@/assets/gallery/misty-wetland-1.jpg";
import eucalyptVista1 from "@/assets/gallery/eucalypt-vista-1.jpg";
import piedBat1 from "@/assets/gallery/pied-bat-1.jpg";
import piedBat2 from "@/assets/gallery/pied-bat-2.jpg";
import piedBat3 from "@/assets/gallery/pied-bat-3.jpg";
import koala1 from "@/assets/gallery/koala-1.jpg";

export type GalleryImage = {
  src: string;
  title: string;
  location: string;
  date: string;
  description: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: possumRock1,
    title: "Wombat",
    location: "Sandstone escarpment, Site RC-215",
    date: "15 March 2025",
    description:
      "Captured at 21:13 on a warm evening, this wallaby emerges from its rocky shelter to forage.",
  },
  {
    src: possumRock2,
    title: "Wombat",
    location: "Sandstone escarpment, Site RC-215",
    date: "19 March 2025",
    description:
      "The same individual returns four days later, demonstrating site fidelity to these rocky outcrops.",
  },
  {
    src: wallabyImg,
    title: "Rock Wallaby at Dusk",
    location: "Northern escarpment",
    date: "March 2025",
    description: "Trail cameras reveal the nocturnal habits of these elusive marsupials.",
  },
  {
    src: pygmyPossumImg,
    title: "Eastern Pygmy Possum",
    location: "Banksia heathland",
    date: "March 2025",
    description: "Weighing just 15-40 grams, this tiny pollinator was spotted foraging for nectar.",
  },
  {
    src: gliderImg,
    title: "Sugar Glider",
    location: "Old-growth forest",
    date: "March 2025",
    description: "Caught mid-movement on camera, gliders can soar up to 50 metres between trees.",
  },
  {
    src: owlImg,
    title: "Sooty Owl",
    location: "Wet forest gully",
    date: "March 2025",
    description: "A rare sighting of this secretive nocturnal hunter in its natural habitat.",
  },
  {
    src: lyrebirdForest1,
    title: "Superb Lyrebird",
    location: "Forest clearing, Site RC-236",
    date: "12 March 2025",
    description:
      "A lyrebird captured mid-stride, displaying its distinctive tail plumage while foraging through the eucalyptus forest.",
  },
  {
    src: lyrebirdForest2,
    title: "Superb Lyrebird Foraging",
    location: "Forest clearing, Site RC-236",
    date: "12 March 2025",
    description:
      "Moments earlier, the same lyrebird crosses the forest clearing, scratching through leaf litter for invertebrates.",
  },
  {
    src: lyrebirdCave1,
    title: "Lyrebird at Sandstone Overhang",
    location: "Sandstone escarpment, Site RC-223",
    date: "March 2025",
    description:
      "An unusual sighting of a lyrebird exploring the base of a sandstone cave, its tail feathers clearly visible.",
  },
  {
    src: goanna1,
    title: "Lace Monitor",
    location: "Sandstone escarpment, Site RC-200",
    date: "2 March 2025",
    description:
      "A large lace monitor (Varanus varius) emerges from a sandstone crevice, basking in the afternoon sun.",
  },
  {
    src: goanna2,
    title: "Lace Monitor Basking",
    location: "Sandstone escarpment, Site RC-200",
    date: "2 March 2025",
    description:
      "The same monitor caught on camera moments later, demonstrating the escarpment's importance as reptile habitat.",
  },

  // New uploads
  {
    src: rockWallabyOverhang1,
    title: "Brush-tailed Rock Wallaby",
    location: "Sandstone overhang, Site RC-8",
    date: "6 March 2025",
    description:
      "A rock wallaby pauses beneath a sandstone overhang in the early hours of the morning.",
  },
  {
    src: rockWallabyPair1,
    title: "Rock Wallabies Together",
    location: "Sandstone overhang, Site RC-224",
    date: "12 March 2025",
    description:
      "Two wallabies captured moving through a rocky shelter during a night survey.",
  },
  {
    src: rockWallabyPair2,
    title: "Rock Wallaby Pair",
    location: "Sandstone overhang, Site RC-224",
    date: "12 March 2025",
    description:
      "A second frame from the same sequence, showing the pair navigating the escarpment.",
  },
  {
    src: rockWallabyPair3,
    title: "Rock Wallabies at Night",
    location: "Sandstone overhang, Site RC-224",
    date: "12 March 2025",
    description:
      "Trail cameras capture movement through the rock shelter, highlighting repeated use of the site.",
  },
  {
    src: rockWallabyPair4,
    title: "Rock Wallaby Sequence",
    location: "Sandstone overhang, Site RC-224",
    date: "12 March 2025",
    description: "A later moment in the sequence as the animals move out of frame.",
  },
  {
    src: rockWallabyPair5,
    title: "Rock Wallaby Sequence",
    location: "Sandstone overhang, Site RC-224",
    date: "12 March 2025",
    description: "A follow-up frame documenting continued activity at the shelter.",
  },
  {
    src: rockWallabyPair6,
    title: "Rock Wallaby Sequence",
    location: "Sandstone overhang, Site RC-224",
    date: "12 March 2025",
    description: "Final frame in the series as the wallabies depart the rocky ledge.",
  },
  {
    src: wallabyClearing1,
    title: "Rock Wallaby in Clearing",
    location: "Forest clearing, Site RC-236",
    date: "17 March 2025",
    description:
      "A night-time capture of a wallaby moving through open ground at the edge of the forest.",
  },
  {
    src: wallabyClearing2,
    title: "Rock Wallaby in Clearing",
    location: "Forest clearing, Site RC-236",
    date: "17 March 2025",
    description:
      "A second frame from the same clearing, showing the animal continuing along the track.",
  },
  {
    src: wallabyClearing3,
    title: "Rock Wallaby in Clearing",
    location: "Forest clearing, Site RC-236",
    date: "17 March 2025",
    description: "A final frame in the series as it moves beyond the camera's range.",
  },

  // Latest uploads
  {
    src: pygmyPossumTree1,
    title: "Eastern Pygmy Possum",
    location: "Tree trunk, Site RC-183",
    date: "21 Feb 2025",
    description: "A pygmy possum climbs a smooth-barked trunk during a pre-dawn trail camera capture.",
  },
  {
    src: pygmyPossumTree2,
    title: "Eastern Pygmy Possum",
    location: "Tree trunk, Site RC-183",
    date: "21 Feb 2025",
    description: "A second frame from the same sequence moments later.",
  },
  {
    src: easternPygmyPossum1,
    title: "Eastern Pygmy Possum",
    location: "Canopy branch",
    date: "4 Feb 2025",
    description: "Captured climbing along a branch at night (RECONYX camera sequence).",
  },
  {
    src: easternPygmyPossum2,
    title: "Eastern Pygmy Possum",
    location: "Canopy branch",
    date: "4 Feb 2025",
    description: "Follow-up frame from the same capture sequence.",
  },
  {
    src: pygmyPossumBranch1,
    title: "Eastern Pygmy Possum",
    location: "Branch survey, Site RC-205",
    date: "20 Feb 2025",
    description: "A small possum captured moving along a branch during a nocturnal survey.",
  },
  {
    src: pygmyPossumBranch2,
    title: "Eastern Pygmy Possum",
    location: "Branch survey, Site RC-205",
    date: "20 Feb 2025",
    description: "A second frame moments later as it continues along the branch.",
  },
  {
    src: nightVisitorSpottedTail1,
    title: "Night-time Visitor",
    location: "Rocky gully, Site RC-202",
    date: "17 Mar 2025",
    description: "A fast-moving animal captured in low light as it passes between boulders.",
  },
  {
    src: nightVisitorSpottedTail2,
    title: "Night-time Visitor",
    location: "Rocky gully, Site RC-202",
    date: "17 Mar 2025",
    description: "A follow-up frame from the same sequence.",
  },

  {
    src: monitorReconyx1,
    title: "Sandy Monitor Lizard",
    location: "RECONYX camera",
    date: "9 Feb 2025",
    description: "A large monitor captured moving across a tree trunk in daylight.",
  },
  {
    src: monitorReconyx2,
    title: "Sandy Monitor Lizard",
    location: "RECONYX camera",
    date: "9 Feb 2025",
    description: "Second frame from the sequence, tongue extended.",
  },
  {
    src: monitorReconyx3,
    title: "Sandy Monitor Lizard",
    location: "RECONYX camera",
    date: "9 Feb 2025",
    description: "Third frame from the same capture sequence.",
  },
  {
    src: monitorReconyx4,
    title: "Sandy Monitor Lizard",
    location: "RECONYX camera",
    date: "9 Feb 2025",
    description: "Later frame as the animal continues along the trunk.",
  },
  {
    src: rockWallabyOverhang2,
    title: "Wombat",
    location: "Sandstone escarpment, Site RC-215",
    date: "15 Mar 2025",
    description: "A follow-up capture showing the wallaby moving deeper beneath the overhang.",
  },
  {
    src: rockWallabyOverhang3,
    title: "Wombat",
    location: "Sandstone escarpment, Site RC-215",
    date: "19 Mar 2025",
    description: "A second night capture at the same site, confirming repeat use of the shelter.",
  },
  {
    src: quollFamily1,
    title: "Spotted-quoll family",
    location: "Den entrance",
    date: "(date unknown)",
    description: "A pair of spotted quolls captured near a den entrance.",
  },

  // Additional wildlife & landscape
  {
    src: wallabyCreek1,
    title: "Wallaby at Creek",
    location: "Wollemi Creek",
    date: "(date unknown)",
    description: "A wallaby forages along the creek bank among fallen timber.",
  },
  {
    src: wedgeTailedEagle1,
    title: "Wedge-tailed Eagle",
    location: "Above Melaleuca",
    date: "(date unknown)",
    description: "Australia's largest bird of prey soars above the eucalypt canopy.",
  },
  {
    src: tawnyFrogmouth1,
    title: "Tawny Frogmouth",
    location: "Forest floor",
    date: "May 2021",
    description: "A tawny frogmouth relies on its exceptional camouflage while resting on the ground.",
  },
  {
    src: christmasBeetle1,
    title: "Christmas Beetle",
    location: "Melaleuca",
    date: "Dec 2020",
    description: "A metallic Christmas beetle crawls along a fallen branch during summer.",
  },
  {
    src: mistyWetland1,
    title: "Misty Morning Wetland",
    location: "Melaleuca floodplain",
    date: "Apr 2020",
    description: "Morning mist rises from the wetland at dawn, highlighting the property's water features.",
  },
  {
    src: eucalyptVista1,
    title: "Eucalypt Vista",
    location: "Melaleuca escarpment",
    date: "Oct 2019",
    description: "Eucalyptus blossoms frame a panoramic view of the Wollemi wilderness.",
  },
  {
    src: piedBat1,
    title: "Large-eared Pied Bat",
    location: "Night flight, Melaleuca",
    date: "Mar 2025",
    description: "A large-eared pied bat (Chalinolobus dwyeri) captured in flight against the night sky. This vulnerable microbat roosts in sandstone caves across the reserve.",
  },
  {
    src: koala1,
    title: "Koala in Eucalypt",
    location: "Eucalyptus forest, Melaleuca",
    date: "Mar 2025",
    description: "A koala peers from behind a eucalyptus trunk, demonstrating the importance of Melaleuca's 485 hectares of prime koala habitat.",
  },
  {
    src: piedBat2,
    title: "Large-eared Pied Bat in Flight",
    location: "Night survey, Melaleuca",
    date: "Mar 2025",
    description: "A pied bat captured mid-flight during an acoustic survey, showing its distinctive wing membrane and large ears.",
  },
  {
    src: piedBat3,
    title: "Large-eared Pied Bat Roosting",
    location: "Sandstone ledge, Melaleuca",
    date: "Mar 2025",
    description: "A pied bat rests on a sandstone surface, displaying its characteristic large ears and golden-brown fur.",
  },
];

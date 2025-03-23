import { Container, Box, Typography, Stack, Divider } from "@mui/material";

import arrynLogo from "../assets/great_houses/Arryn.png"
import baratheonLogo from "../assets/great_houses/Baratheon.png"
import greyjoyLogo from "../assets/great_houses/Greyjoy.png"
import lannisterLogo from "../assets/great_houses/Lannister.png"
import martellLogo from "../assets/great_houses/Martell.png"
import starkLogo from "../assets/great_houses/Stark.png"
import targaryenLogo from "../assets/great_houses/Targaryen.png"
import tullyLogo from "../assets/great_houses/Tully.png"
import tyrellLogo from "../assets/great_houses/Tyrell.png"

const housesData = [
  {
    id: 11,
    img: arrynLogo,
    name: "Arryn house",
    desc: "House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of the Mountain and the Vale and more recently as Defenders of the Vale and Wardens of the East under the Targaryen, Baratheon, and Lannister dynasties. The nominal head of House Arryn is Robin Arryn with Yohn Royce holding actual power over the house."
  },
  {
    id: 1,
    img: baratheonLogo,
    name: "Baratheon house",
    desc: "House Baratheon of Storm's End is a Great House of Westeros that traditionally rules the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms. House Baratheon became the royal house of the Seven Kingdoms (as House Baratheon of King's Landing) after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark."
  },
  {
    id: 2,
    img: greyjoyLogo,
    name: "Greyjoy house",
    desc: "House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. "
  },
  {
    id: 3,
    img: lannisterLogo,
    name: "Lannister house",
    desc: "House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and one of its oldest dynasties. It was briefly the royal house of the Seven Kingdoms until their defeat in the Last War. "
  },
  {
    id: 4,
    img: martellLogo,
    name: "Martell house",
    desc: "House Martell of Sunspear is one of the Great Houses of Westeros. It rules the peninsula of Dorne in the far south of the continent. Though loyal to the Iron Throne, the Martells were never conquered by the Targaryens and have pursued a more isolated role in wider political events since Robert's Rebellion. "
  },
  {
    id: 5,
    img: starkLogo,
    name: "Stark house",
    desc: "House Stark of Winterfell is a Great House of Westeros and the royal house of the Kingdom of the North. They rule over the vast region known as the North. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before Aegon's Conquest, as well as during the War of the Five Kings and early on in the Last War, the leaders of House Stark ruled over the region as the Kings in the North. "
  },
  {
    id: 6,
    img: targaryenLogo,
    name: "Targaryen house",
    desc: "House Targaryen of Dragonstone, known poetically as the House of the Dragon, is an exiled Great House of Westeros and the former royal house of the Seven Kingdoms. House Targaryen conquered and unified the realm before it was deposed during Robert's Rebellion, where House Baratheon replaced it as the new royal house. The two surviving Targaryens, Viserys and Daenerys, fled into exile to the Free Cities of Essos across the Narrow Sea."
  },
  {
    id: 7,
    img: tullyLogo,
    name: "Tully house",
    desc: "House Tully of Riverrun is a Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are \"Family, Duty, Honor.\""
  },
  {
    id: 8,
    img: tyrellLogo,
    name: "Tyrell house",
    desc: "House Tyrell[1] of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, and heavily-populated region of southwestern Westeros as Lords Paramount of the Reach and Wardens of the South after taking control of the region from House Gardener during Aegon's Conquest. "
  },
];


export default function GreatHouses() {
  return (
    <Container component="section" maxWidth="md">
      <Stack
        direction="column"
        spacing={2}
        divider={<Divider />}
        sx={{
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        {housesData.map(house => <House data={house} key={house.id} />)}
      </Stack>
    </Container>
  );
}

function House({ data }) {
  return (
    <Box display="flex">
      <Box display="flex" justifyContent="center" alignItems="center" sx={{margin: "0 12px"}}>
        <img
          height="120px"
          width="120px"
          src={data.img}
          alt={data.name}
        />
      </Box>
      <Box sx={{margin: "12px"}}>
        <Typography variant="h5" component="h2">{data.name}</Typography>
        <Typography variant="body1" sx={{marginTop: "10px"}} color="textSecondary">{data.desc}</Typography>
      </Box>
    </Box>
  );
}
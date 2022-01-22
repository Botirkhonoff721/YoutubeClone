import React, { useContext, createContext, useState } from "react";
import Kino from '../Assets/Movies/Images.png'
import Kino2 from '../Assets/Movies/Image2.jpg'
import Kino3 from '../Assets/Movies/img3.jpg'
import Kino4 from '../Assets/Movies/img4.jpg'
import Kino5 from '../Assets/Movies/img5.jpg'
import Kino6 from '../Assets/Movies/img6.jpg'
import Avatar from '../Assets/Movies/AvatarPhoto.png'
import Avatar2 from '../Assets/Movies/AvatarPhoto2.png'
import Avatar3 from '../Assets/Movies/AvatarPhoto3.png'
export const ContentData = [
  { id: 1, channelName:'Tarona',user:`${Avatar}`,name: "Friends", avatar: `${Kino}`, viewed: '10k', time: "Yesterday" },
  { id: 2, channelName:'Tarona',user:`${Avatar2}`,name: "Mask", avatar: `${Kino2}`, viewed: '54k', time: "3 days ago" },
  { id: 3, channelName:'Tarona',user:`${Avatar3}`,name: "Troya", avatar: `${Kino3}`, viewed: '154', time: "4 days ago" },
  { id: 4, channelName:'Tarona',user:`${Avatar}`,name: "Marvel", avatar: `${Kino4}`, viewed: '1k', time: " 1 week ago " },
  { id: 5, channelName:'Tarona',user:`${Avatar2}`,name: "Tor1", avatar: `${Kino5}`, viewed: '250k', time: "5 hours ago" },
  { id: 6, channelName:'Tarona',user:`${Avatar3}`,name: "Tor2", avatar: `${Kino6}`, viewed: '1m', time: "1 years ago" },
  { id: 7, channelName:'Tarona',user:`${Avatar}`,name: "Revenge", avatar: `${Kino}`, viewed: '80k', time: "2 weeks ago" },
  { id: 8, channelName:'Tarona',user:`${Avatar2}`,name: "Tom and Jerry", avatar: `${Kino5}`, viewed: 5465, time: "9 hours ago" },
  { id: 9, channelName:'Tarona',user:`${Avatar3}`,name: "Legends", avatar: `${Kino3}`, viewed: '120k', time: "2 months ago" },
  { id: 10,channelName:'Tarona',user:`${Avatar}`, name: "How many", avatar: `${Kino2}`, viewed: '50k', time: "8 years ago" },
  { id: 11, channelName:'Tarona',user:`${Avatar2}`,name: "Mother", avatar: `${Kino4}`, viewed: '62k', time: "8 days ago" },
  { id: 12, channelName:'Tarona',user:`${Avatar3}`,name: "History of Piramids", avatar: `${Kino}`, viewed: '96k', time: "12:50" },
];
export const MoviesList = createContext();

const Movies = ({ children }) => {
  const [mock, setMock] = useState(ContentData);
  return (
    <MoviesList.Provider value={[mock, setMock]}>
      {children}
    </MoviesList.Provider>
  );
};

export default Movies;

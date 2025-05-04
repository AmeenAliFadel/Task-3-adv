import Classroomsimg1 from '../../assets/RoomsGallery/Classrooms/img1.png';
import Classroomsimg2 from '../../assets/RoomsGallery/Classrooms/img2.png';
import Classroomsimg3 from '../../assets/RoomsGallery/Classrooms/img3.png';
import Classroomsimg4 from '../../assets/RoomsGallery/Classrooms/img4.png';

import Libraryimg1 from '../../assets/RoomsGallery/Library/img1.png';
import Libraryimg2 from '../../assets/RoomsGallery/Library/img2.png';
import Libraryimg3 from '../../assets/RoomsGallery/Library/img3.png';
import Libraryimg4 from '../../assets/RoomsGallery/Library/img4.png';

import ScienceLabimg1 from '../../assets/RoomsGallery/ScienceLab/img1.png';
import ScienceLabimg2 from '../../assets/RoomsGallery/ScienceLab/img2.png';
import ScienceLabimg3 from '../../assets/RoomsGallery/ScienceLab/img3.png';
import ScienceLabimg4 from '../../assets/RoomsGallery/ScienceLab/img4.png';

import ComputerLabimg1 from '../../assets/RoomsGallery/ComputerLab/img1.png';
import ComputerLabimg2 from '../../assets/RoomsGallery/ComputerLab/img2.png';
import ComputerLabimg3 from '../../assets/RoomsGallery/ComputerLab/img3.png';
import ComputerLabimg4 from '../../assets/RoomsGallery/ComputerLab/img4.png';

import Gardenimg1 from '../../assets/RoomsGallery/Garden/img1.png';
import Gardenimg2 from '../../assets/RoomsGallery/Garden/img2.png';
import Gardenimg3 from '../../assets/RoomsGallery/Garden/img3.png';
import Gardenimg4 from '../../assets/RoomsGallery/Garden/img4.png';


const StoredGalleryCardData = localStorage.getItem("GalleryCardData");

export const GalleryCardData = StoredGalleryCardData ? JSON.parse(StoredGalleryCardData) : [
    {
        filter: "Classrooms",
        title: "Classrooms",
        img: [
            Classroomsimg1,
            Classroomsimg2,
            Classroomsimg3,
            Classroomsimg4,
            Classroomsimg1,
            Classroomsimg2,
            Classroomsimg3,
            Classroomsimg4
        ],
        content: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
    },
    {
        filter: "Library",
        title: "Library",
        img: [
            Libraryimg1,
            Libraryimg2,
            Libraryimg3,
            Libraryimg4,
            Libraryimg1,
            Libraryimg2,
            Libraryimg3,
            Libraryimg4
        ],
        content: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
    },
    {
        filter: "Science Lab",
        title: "Science Lab",
        img: [
            ScienceLabimg1,
            ScienceLabimg2,
            ScienceLabimg3,
            ScienceLabimg4,
            ScienceLabimg1,
            ScienceLabimg2,
            ScienceLabimg3,
            ScienceLabimg4
        ],
        content: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
    },
    {
        filter: "Computer Lab",
        title: "Computer Lab",
        img: [
            ComputerLabimg1,
            ComputerLabimg2,
            ComputerLabimg3,
            ComputerLabimg4,
            ComputerLabimg1,
            ComputerLabimg2,
            ComputerLabimg3,
            ComputerLabimg4
        ],
        content: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
    },
    {
        filter: "Garden and Nature Area",
        title: "Garden and Nature Area",
        img: [
            Gardenimg1,
            Gardenimg2,
            Gardenimg3,
            Gardenimg4,
            Gardenimg1,
            Gardenimg2,
            Gardenimg3,
            Gardenimg4
        ],
        content: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
    }
]

if (!StoredGalleryCardData) {
    localStorage.setItem("GalleryCardData", JSON.stringify(GalleryCardData));
}

import Selector from './Selector'; 

import BookSvg from '../assets/book.svg';
import CharacterSvg from '../assets/character.svg';
import AbilitySvg from '../assets/ability.svg';
import SackSvg from '../assets/sack.svg';
import SaveSvg from '../assets/save.svg';
import MapSvg from '../assets/map.svg';

interface SideNavProps {
  onSelect: (page: string) => void;
  onSelectCharacter: (isOpen: boolean) => void
}

function SideNav({ onSelect, onSelectCharacter }: SideNavProps) {

    return (
        <nav 
            className={`h-full absolute transition-colors duration-300 ease-in-out`} 
        >
            <Selector color="bg-bh-purple" img={MapSvg} alt="System Icon" title="MAPA" onClick={() => onSelect("map")} />
            <Selector color="bg-bh-red" img={BookSvg} alt="System Icon" title="SISTEMA" onClick={() => onSelect("system")} />
            <Selector color="bg-bh-blue" img={CharacterSvg} alt="Character Icon" title="PERSONAGEM" onClick={() => onSelectCharacter(true)} />
            <Selector color="bg-bh-pink" img={AbilitySvg} alt="Ability Icon" title="HABILIDADES" onClick={() => onSelect("ability")} />
            <Selector color="bg-bh-yellow" img={SackSvg} alt="Shop Icon" title="LOJA" onClick={() => onSelect("shop")} />
            <Selector color="bg-bh-dark-green" img={SaveSvg} alt="Save Icon" title="SALVAR" />
        </nav>
    );
}

export default SideNav
import AgilitySvg from "../assets/agility.svg";
import ArmorClassSvg from "../assets/armor-class.svg";
import ClotheSvg from "../assets/clothe.svg";
import CoinsSvg from "../assets/coins.svg";
import EquipmentsSvg from "../assets/equipments.svg";
import ExpSvg from "../assets/exp.svg";
import HeartSvg from "../assets/heart.svg";
import IntelligenceSvg from "../assets/intelligence.svg";
import KneckaleSvg from "../assets/kneckale.svg";
import LevelSvg from "../assets/level.svg";
import PotionSvg from "../assets/potion.svg";
import PresenceSvg from "../assets/presence.svg";
import RankSvg from "../assets/rank.svg";
import StrengthSvg from "../assets/strength.svg";
import WeaponSvg from "../assets/weapon.svg";
import CharacterPlaceholder from "../assets/photo-placeholder.png";
import BookSvg from "../assets/book.svg";
import CharacterSvg from "../assets/character.svg";
import AbilitySvg from "../assets/ability.svg";
import SackSvg from "../assets/sack.svg";
import MapSvg from "../assets/map.svg";
import CogSvg from "../assets/cog.svg";

import Stat from "./Stat";
import Equipments from "./Equipments";
import type { ICharacter } from "../classes/character";
import SidebarSelector from "./SidebarSelector";

interface SidebarParams {
  data: ICharacter;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  onOptionClick: (page: string) => void;
  onSelectCharacter: (isOpen: boolean) => void
}

function Sidebar({ data, isActive, setIsActive, onOptionClick, onSelectCharacter }: SidebarParams) {

  const toggleSidebar = () => setIsActive(prev => !prev)
  console.log(data)
  return (
    <div className="relative flex">
      <aside
        className={`bg-bh-dark-secondary h-full flex flex-col transition-all duration-300 ease-in-out overflow-hidden 
          ${isActive ? "w-110 p-6" : "w-20 p-4"}`}
      >
        {!isActive && (
          // FECHADO
          <div className="flex flex-col gap-4 h-full items-center">
            <img
              src={CharacterPlaceholder}
              alt="Character Image"
              className="w-12 h-12 rounded-2xl cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={toggleSidebar}
            />
            <hr className="w-full" />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <SidebarSelector
                  img={MapSvg}
                  alt="Map Icon"
                  color="bg-bh-purple"
                  page="map"
                  onClick={onOptionClick}
                />
                <SidebarSelector
                  img={BookSvg}
                  alt="System Icon"
                  color="bg-bh-red"
                  page="system"
                  onClick={onOptionClick}
                />
                <SidebarSelector
                  img={CharacterSvg}
                  alt="Character Icon"
                  color="bg-bh-blue"
                  page="character"
                  onClick={() => onSelectCharacter(true)}
                />
                <SidebarSelector
                  img={AbilitySvg}
                  alt="Abilities Icon"
                  color="bg-bh-pink"
                  page="ability"
                  onClick={onOptionClick}
                />
                <SidebarSelector
                  img={SackSvg}
                  alt="Shop Icon"
                  color="bg-bh-yellow"
                  page="shop"
                  onClick={onOptionClick}
                />
              </div>
              <div className="flex p-2 w-full justify-center items-center cursor-pointer hover:bg-bh-dark-primary rounded-2xl">
                <img src={CogSvg} alt="Options Icon"/>
              </div>
            </div>
          </div>
        )}

        {isActive && (
          // ABERTO
          <div className="flex flex-col h-full">
            <div className="flex gap-5">
              <img
                src={CharacterPlaceholder}
                alt="Character Image"
                className="w-28 h-28 rounded-2xl cursor-pointer"
                onClick={toggleSidebar}
              />
              <div className="flex flex-col w-full justify-around">
                <div className="w-full">
                  <p className="text-2xl font-semibold">Nome do Personagem</p>
                  <p>Nome da Técnica</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <Stat img={RankSvg} alt="Rank Icon" value="F" />
                    <Stat
                      img={LevelSvg}
                      alt="Level Icon"
                      value={1}
                      className="ml-3"
                    />
                    <Stat
                      img={ExpSvg}
                      alt="Exp Icon"
                      value={0}
                      className="ml-3"
                    />
                  </div>
                  <div className="flex">
                    <Stat img={CoinsSvg} alt="Money Icon" value={500.0 + " ¥"} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5">
              <Stat img={HeartSvg} alt="Rank Icon" value={6} />
              <Stat
                img={StrengthSvg}
                alt="Level Icon"
                value={6}
                className="ml-3"
              />
              <Stat
                img={PresenceSvg}
                alt="Exp Icon"
                value={6}
                className="ml-3"
              />
              <Stat
                img={AgilitySvg}
                alt="Level Icon"
                value={6}
                className="ml-3"
              />
              <Stat
                img={IntelligenceSvg}
                alt="Exp Icon"
                value={6}
                className="ml-3"
              />
            </div>

            <div>
              <div className="flex mt-5 items-center gap-3">
                <div className="w-full h-8 rounded-lg flex items-center justify-end">
                  <div className="flex items-center justify-center w-1/5">
                    <img
                      src={ArmorClassSvg}
                      alt={"Armor Class Icon"}
                      className="h-auto w-auto"
                    />
                    <p className="ml-1">6</p>
                  </div>
                  <div className="w-4/5 h-8 bg-bh-light-green rounded-lg"></div>
                </div>
                <p className="text-lg">36</p>
              </div>
            </div>

            <div>
              <div className="flex mt-2 items-center gap-3">
                <div className="w-full h-8 bg-bh-blue rounded-lg"></div>
                <p className="text-lg">25</p>
              </div>
            </div>

            <div className="flex justify-around mt-5">
              <p>-</p>
              <p>-</p>
              <p>-</p>
            </div>

            <hr className="my-5" />

            <div className="py-4">
              <div className="flex gap-2 items-center">
                <img src={EquipmentsSvg} alt="Equipments Icon" />
                <p className="text-3xl font-semibold">EQUIPAMENTOS</p>
              </div>
              <Equipments
                img={WeaponSvg}
                alt="Weapon Icon"
                title="Armas"
                maxSlots={2}
                slots={[]}
              />
              <Equipments
                img={WeaponSvg}
                alt="Weapon Icon"
                title="Arma Especial"
                maxSlots={1}
                slots={[]}
              />
              <Equipments
                img={ClotheSvg}
                alt="Clothe Icon"
                title="Vestimentas"
                maxSlots={2}
                slots={[]}
              />
              <Equipments
                img={KneckaleSvg}
                alt="Accessory Icon"
                title="Acessório"
                maxSlots={1}
                slots={[]}
              />
              <Equipments
                img={PotionSvg}
                alt="Consumable Icon"
                title="Consumíveis"
                maxSlots={5}
                slots={[]}
              />
            </div>

            <textarea
              placeholder="Digite informações adicionais..."
              className="bg-bh-dark-primary mt-3 h-full p-5 rounded-lg focus:outline-none focus:shadow-none focus:border-none text-sm placeholder:text-white/20"
            />
          </div>
        )}
      </aside>
    </div>
  );
}

export default Sidebar;


import SideNav from "./components/SideNav";

import { useState } from "react";
import SystemPage from "./components/System";
import AbilityPage from "./components/Ability";
import ShopPage from "./components/Shop";
import Sidebar from "./components/Sidebar";
import { Character, type INewCharacter } from "./classes/character";
import { Storage } from "./database/storage";
import MapPage from "./components/Map";
import CharacterModal from "./components/CharacterModal";
import ConfirmModal from "./components/ConfirmModal";


function App() {
  const [activePage, setActivePage] = useState("system")
  const [character, setCharacter] = useState<Character | null>(null)
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false)
  const [isCharacterModalActive, setIsCharacterModalActive] = useState<boolean>(false)

  const [isConfirmModalActive, setIsConfirmModalActive] = useState(false)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)

  const storage = new Storage()
  
  const newTemplateCharacter = () => {
      const newCharacterProps: INewCharacter = {
          name: "Nome do Personagem 02",
          technique: "Nome da Técnica 02"
      }
      const createdCharacter = Character.create(newCharacterProps)
      setCharacter(createdCharacter)
  }

  useState(() => {
      const loadCharacter = async () => {
          const savedCharacter = await storage.load("slot1")
          if (savedCharacter) {
              setCharacter(savedCharacter);
          } else {
              newTemplateCharacter();
          }
      }
      loadCharacter()
  })

  const executePendingAction = () => {
      if (pendingAction) {
          pendingAction()
          setPendingAction(null)
      }
      setIsConfirmModalActive(false)
  }

  return (  
    <>
      {character ? <Sidebar isActive={isSidebarActive} setIsActive={setIsSidebarActive} onOptionClick={setActivePage} onSelectCharacter={setIsCharacterModalActive} /> : <></>}
      <main className="relative bg-bh-dark-primary w-full h-full">
        {isSidebarActive && (
          <SideNav onSelect={setActivePage} onSelectCharacter={setIsCharacterModalActive} />
        )}
        {activePage === "map" && <MapPage />}
        {activePage === "system" && <SystemPage />}
        {activePage === "ability" && <AbilityPage />}
        {activePage === "shop" && <ShopPage />}
        <CharacterModal isOpen={isCharacterModalActive} onClickBack={setIsCharacterModalActive} setPendingAction={setPendingAction} setIsConfirmModalActive={setIsConfirmModalActive} />
        <ConfirmModal 
            isOpen={isConfirmModalActive} 
            onClickBack={setIsConfirmModalActive} 
            handle={executePendingAction} 
        />
      </main>
    </>
  )
}

export default App

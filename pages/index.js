import styled from "styled-components";
import MainGrid from "./src/components/MainGrid";
import Box from "./src/components/Box";
import { ProfileRelationsBoxWrapper } from "./src/components/ProfileRelations"
import { AlurakutMenu, OrkutNostalgicIconSet } from "./src/lib/aluraKutCommons";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.user}.png`}
        style={{ borderRadius: "5px" }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "alvaropsouza";
  const pessoasFavoritas = ["eddardd", "jcesmeraldo", "rafaballerini", "felipefialho"];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar user={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem Vindo</h1>

            <OrkutNostalgicIconSet/>
            </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade({pessoasFavoritas.length})</h2>
            
            <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
               <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`}></img>
                  <span>{itemAtual}</span>
                </a>
               </li>
              )
            })}
            </ul>
            </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}

import { BodyTextLarge, Colors, Heading, Text } from "@hacksc/sctw-ui-kit";
import { styled } from "styled-components";
import { TeamMembersAPI } from "../services/team-members";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TeamMember } from "../types/team-members";

export const TeamMembersDisplay = (props: {
  onHoverTeamMember: (teamMember: TeamMember) => void;
  onMouseOutTeamMember: (teamMember: TeamMember) => void;
}) => {
  const [query, setQuery] = useState<{
    data: TeamMember[];
    status: "loading" | "error" | "success";
    error?: Error;
  }>({ data: [], status: "loading" });

  useEffect(() => {
    TeamMembersAPI.getMembers()
      .then((data) => {
        setQuery({ data, status: "success" });
      })
      .catch((error) => {
        setQuery({ data: [], status: "error", error });
      });
  }, []);

  if (query.status === "loading") {
    return (
      <TeamMembersContainer>
        <BodyTextLarge style={{ color: Colors.Blue.Periwinkle }}>
          Loading...
        </BodyTextLarge>
      </TeamMembersContainer>
    );
  }

  return (
    <TeamMembersContainer>
      {query.data.map((el, i) => (
        <AvatarContainer
          key={`${el.name}-${i}`}
          onMouseEnter={() => {
            props.onHoverTeamMember(el);
          }}
          onMouseLeave={() => props.onMouseOutTeamMember(el)}
        >
          <Image
            src={el.pfp_url}
            alt={`A profile picture of ${el.name}`}
            width={100}
            height={100}
            style={{ borderRadius: "7.735px" }}
          />
        </AvatarContainer>
      ))}
    </TeamMembersContainer>
  );
};

const AvatarContainer = styled.div`
  transition: transform 1s ease-out;
  :hover {
    transform: translateY(-10%);
  }
`;

const TeamMembersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const MeetTheTeam = () => {
  const [chosenMember, setChosenMember] = useState<TeamMember | null>(null);

  return (
    <SectionContainer>
      <Heading style={{ color: "white", textAlign: "center" }}>
        MEET THE TEAM
      </Heading>
      <BodyTextLarge style={{ color: Colors.Blue.Periwinkle }}>
        Take a look at the people behind the scenes.
      </BodyTextLarge>
      <hr style={{ width: "4rem" }} />
      <BodyTextLarge style={{ height: "1rem", color: "white" }}>
        {chosenMember !== null ? (
          <>
            {chosenMember?.name} | {chosenMember.position}
          </>
        ) : (
          "Hover over a team member to see what they do!👇"
        )}
      </BodyTextLarge>
      <TeamMembersDisplay
        onHoverTeamMember={(teamMember) => setChosenMember(teamMember)}
        onMouseOutTeamMember={() => setChosenMember(null)}
      />
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.Blue.BlueIvy};
  gap: 2rem;
  padding: 5rem;
`;

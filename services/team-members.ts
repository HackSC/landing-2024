import { HACKSC_TEAM_MEMBERS_API_URL } from "../common/constants";
import { TeamMember } from "../types/team-members";

export namespace TeamMembersAPI {
  export const getMembers = async (): Promise<TeamMember[]> => {
    return fetch(HACKSC_TEAM_MEMBERS_API_URL).then(
      (res) => res.json() as unknown as TeamMember[],
    );
  };
}

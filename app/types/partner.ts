import TeamMember from "@/app/types/team-member";

export default interface Partner {
    readonly name: string;
    readonly logo: string;
    readonly link: string;
    readonly teamMembers: TeamMember[];
}